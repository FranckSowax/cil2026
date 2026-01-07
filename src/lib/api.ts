import { supabase } from './supabase';

// Types simplifiés pour les insertions
export interface InscriptionData {
  civilite: 'M.' | 'Mme' | 'Dr' | 'Pr';
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  institution: string;
  fonction: string;
  pays: string;
  ville: string;
  categorie: 'etudiant' | 'master' | 'doctorant' | 'enseignant' | 'praticien';
  tarif: number;
  avec_atelier: boolean;
  montant_total: number;
  statut_paiement?: 'en_attente' | 'confirme' | 'annule';
  reference_paiement?: string | null;
  mode_paiement?: 'carte' | 'virement' | 'mobile_money' | null;
}

export interface SoumissionData {
  auteur_civilite: 'M.' | 'Mme' | 'Dr' | 'Pr';
  auteur_nom: string;
  auteur_prenom: string;
  auteur_email: string;
  auteur_telephone: string;
  auteur_institution: string;
  auteur_pays: string;
  co_auteurs?: { nom: string }[] | null;
  titre: string;
  axe_thematique: string;
  mots_cles: string[];
  resume: string;
  fichier_url?: string | null;
  statut?: 'soumise' | 'en_evaluation' | 'acceptee' | 'refusee' | 'revision';
}

// =====================================================
// API INSCRIPTIONS
// =====================================================

export async function createInscription(data: InscriptionData) {
  const { data: inscription, error } = await supabase
    .from('inscriptions')
    .insert(data as never)
    .select()
    .single();

  if (error) {
    console.error('Erreur création inscription:', error);
    throw new Error(error.message);
  }

  return inscription;
}

export async function getInscriptionByEmail(email: string) {
  const { data, error } = await supabase
    .from('inscriptions')
    .select('*')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Erreur recherche inscription:', error);
    throw new Error(error.message);
  }

  return data;
}

// =====================================================
// API SOUMISSIONS
// =====================================================

export async function createSoumission(data: SoumissionData) {
  const { data: soumission, error } = await supabase
    .from('soumissions')
    .insert(data as never)
    .select()
    .single();

  if (error) {
    console.error('Erreur création soumission:', error);
    throw new Error(error.message);
  }

  return soumission;
}

export async function getSoumissionsByEmail(email: string) {
  const { data, error } = await supabase
    .from('soumissions')
    .select('*')
    .eq('auteur_email', email)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erreur recherche soumissions:', error);
    throw new Error(error.message);
  }

  return data || [];
}

// =====================================================
// API NEWSLETTER
// =====================================================

export async function subscribeNewsletter(email: string) {
  // Vérifier si l'email existe déjà
  const { data: existing } = await supabase
    .from('newsletter')
    .select('id, actif')
    .eq('email', email)
    .single();

  if (existing) {
    // Si l'email existe mais est inactif, le réactiver
    const existingRecord = existing as { id: string; actif: boolean };
    if (!existingRecord.actif) {
      const { error } = await supabase
        .from('newsletter')
        .update({ actif: true } as never)
        .eq('id', existingRecord.id);

      if (error) throw new Error(error.message);
    }
    return { success: true, message: 'Vous êtes déjà inscrit à la newsletter.' };
  }

  // Sinon, créer une nouvelle inscription
  const { error } = await supabase
    .from('newsletter')
    .insert({ email } as never);

  if (error) {
    console.error('Erreur inscription newsletter:', error);
    throw new Error(error.message);
  }

  return { success: true, message: 'Inscription à la newsletter réussie!' };
}

export async function unsubscribeNewsletter(email: string) {
  const { error } = await supabase
    .from('newsletter')
    .update({ actif: false } as never)
    .eq('email', email);

  if (error) {
    console.error('Erreur désinscription newsletter:', error);
    throw new Error(error.message);
  }

  return { success: true, message: 'Désinscription réussie.' };
}

// =====================================================
// UPLOAD FICHIERS (pour les soumissions)
// =====================================================

export async function uploadFile(file: File, bucket: string = 'soumissions') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (uploadError) {
    console.error('Erreur upload fichier:', uploadError);
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
