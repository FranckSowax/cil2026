export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      inscriptions: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          // Informations personnelles
          civilite: 'M.' | 'Mme' | 'Dr' | 'Pr';
          nom: string;
          prenom: string;
          email: string;
          telephone: string;
          // Informations professionnelles
          institution: string;
          fonction: string;
          pays: string;
          ville: string;
          // Inscription
          categorie: 'etudiant' | 'master' | 'doctorant' | 'enseignant' | 'praticien';
          tarif: number;
          avec_atelier: boolean;
          // Paiement
          montant_total: number;
          statut_paiement: 'en_attente' | 'confirme' | 'annule';
          reference_paiement: string | null;
          mode_paiement: 'carte' | 'virement' | 'mobile_money' | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
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
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          civilite?: 'M.' | 'Mme' | 'Dr' | 'Pr';
          nom?: string;
          prenom?: string;
          email?: string;
          telephone?: string;
          institution?: string;
          fonction?: string;
          pays?: string;
          ville?: string;
          categorie?: 'etudiant' | 'master' | 'doctorant' | 'enseignant' | 'praticien';
          tarif?: number;
          avec_atelier?: boolean;
          montant_total?: number;
          statut_paiement?: 'en_attente' | 'confirme' | 'annule';
          reference_paiement?: string | null;
          mode_paiement?: 'carte' | 'virement' | 'mobile_money' | null;
        };
      };
      soumissions: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          // Auteur principal
          auteur_civilite: 'M.' | 'Mme' | 'Dr' | 'Pr';
          auteur_nom: string;
          auteur_prenom: string;
          auteur_email: string;
          auteur_telephone: string;
          auteur_institution: string;
          auteur_pays: string;
          // Co-auteurs (JSON array)
          co_auteurs: Json | null;
          // Communication
          titre: string;
          axe_thematique: string;
          mots_cles: string[];
          resume: string;
          fichier_url: string | null;
          // Statut
          statut: 'soumise' | 'en_evaluation' | 'acceptee' | 'refusee' | 'revision';
          commentaires_evaluateurs: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          auteur_civilite: 'M.' | 'Mme' | 'Dr' | 'Pr';
          auteur_nom: string;
          auteur_prenom: string;
          auteur_email: string;
          auteur_telephone: string;
          auteur_institution: string;
          auteur_pays: string;
          co_auteurs?: Json | null;
          titre: string;
          axe_thematique: string;
          mots_cles: string[];
          resume: string;
          fichier_url?: string | null;
          statut?: 'soumise' | 'en_evaluation' | 'acceptee' | 'refusee' | 'revision';
          commentaires_evaluateurs?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          auteur_civilite?: 'M.' | 'Mme' | 'Dr' | 'Pr';
          auteur_nom?: string;
          auteur_prenom?: string;
          auteur_email?: string;
          auteur_telephone?: string;
          auteur_institution?: string;
          auteur_pays?: string;
          co_auteurs?: Json | null;
          titre?: string;
          axe_thematique?: string;
          mots_cles?: string[];
          resume?: string;
          fichier_url?: string | null;
          statut?: 'soumise' | 'en_evaluation' | 'acceptee' | 'refusee' | 'revision';
          commentaires_evaluateurs?: string | null;
        };
      };
      newsletter: {
        Row: {
          id: string;
          created_at: string;
          email: string;
          actif: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          email: string;
          actif?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          email?: string;
          actif?: boolean;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

// Types exportés pour une utilisation facile
export type Inscription = Database['public']['Tables']['inscriptions']['Row'];
export type InscriptionInsert = Database['public']['Tables']['inscriptions']['Insert'];
export type InscriptionUpdate = Database['public']['Tables']['inscriptions']['Update'];

export type Soumission = Database['public']['Tables']['soumissions']['Row'];
export type SoumissionInsert = Database['public']['Tables']['soumissions']['Insert'];
export type SoumissionUpdate = Database['public']['Tables']['soumissions']['Update'];

export type Newsletter = Database['public']['Tables']['newsletter']['Row'];
export type NewsletterInsert = Database['public']['Tables']['newsletter']['Insert'];
