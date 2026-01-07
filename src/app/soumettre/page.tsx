'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight, Download, User, BookOpen, Loader2 } from 'lucide-react';
import { createSoumission, uploadFile, type SoumissionData } from '@/lib/api';

const thematicAxes = [
  { value: 'Axe 1 : IA et Transformation Organisationnelle', label: 'Axe 1 : IA et Transformation Organisationnelle' },
  { value: 'Axe 2 : IA et Gestion des Ressources Humaines', label: 'Axe 2 : IA et Gestion des Ressources Humaines' },
  { value: 'Axe 3 : IA et Prise de Décision', label: 'Axe 3 : IA et Prise de Décision' },
  { value: 'Axe 4 : IA et Innovation en Afrique', label: 'Axe 4 : IA et Innovation en Afrique' },
];

const civilites = ['M.', 'Mme', 'Dr', 'Pr'] as const;

const paysAfricains = [
  'Gabon', 'Cameroun', 'Côte d\'Ivoire', 'Sénégal', 'Congo', 'RDC',
  'Bénin', 'Togo', 'Burkina Faso', 'Mali', 'Niger', 'Guinée',
  'Tchad', 'Centrafrique', 'Mauritanie', 'Madagascar', 'Maroc',
  'Tunisie', 'Algérie', 'Nigeria', 'Ghana', 'Kenya', 'Afrique du Sud',
  'France', 'Belgique', 'Suisse', 'Canada', 'Autre'
];

export default function SoumettreePage() {
  const [formData, setFormData] = useState({
    civilite: 'Dr' as typeof civilites[number],
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    institution: '',
    pays: 'Gabon',
    coAuteurs: '',
    titre: '',
    axeThematique: '',
    motsCles: '',
    resume: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Upload du fichier si présent
      let fichierUrl: string | null = null;
      if (file) {
        fichierUrl = await uploadFile(file, 'soumissions');
      }

      // Préparer les mots-clés comme tableau
      const motsClesArray = formData.motsCles
        .split(',')
        .map(m => m.trim())
        .filter(m => m.length > 0);

      // Préparer les co-auteurs comme JSON
      const coAuteursArray = formData.coAuteurs
        .split(',')
        .map(c => c.trim())
        .filter(c => c.length > 0)
        .map(c => ({ nom: c }));

      const soumissionData: SoumissionData = {
        auteur_civilite: formData.civilite,
        auteur_nom: formData.nom,
        auteur_prenom: formData.prenom,
        auteur_email: formData.email,
        auteur_telephone: formData.telephone,
        auteur_institution: formData.institution,
        auteur_pays: formData.pays,
        co_auteurs: coAuteursArray.length > 0 ? coAuteursArray : null,
        titre: formData.titre,
        axe_thematique: formData.axeThematique,
        mots_cles: motsClesArray,
        resume: formData.resume,
        fichier_url: fichierUrl,
        statut: 'soumise',
      };

      await createSoumission(soumissionData);
      setSubmitted(true);
    } catch (err) {
      console.error('Erreur soumission:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (isValidFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (isValidFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const isValidFile = (file: File) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    return validTypes.includes(file.type) && file.size <= maxSize;
  };

  if (submitted) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen">
        <section className="relative pt-24 sm:pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 mesh-gradient"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4169E1]/20 rounded-full filter blur-[150px]"></div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#4169E1] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Soumission <span className="text-[#4169E1]">Enregistrée !</span>
            </h1>
            <p className="text-lg text-[#B0B0B0] mb-8">
              Votre communication a été soumise avec succès. Un email de confirmation a été envoyé à <strong className="text-white">{formData.email}</strong>
            </p>
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 border border-white/10 mb-8 text-left">
              <h3 className="text-white font-bold mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-[#B0B0B0]">Titre :</span> <span className="text-white">{formData.titre}</span></p>
                <p><span className="text-[#B0B0B0]">Auteur :</span> <span className="text-white">{formData.civilite} {formData.prenom} {formData.nom}</span></p>
                <p><span className="text-[#B0B0B0]">Axe thématique :</span> <span className="text-white">{formData.axeThematique}</span></p>
                {file && <p><span className="text-[#B0B0B0]">Fichier :</span> <span className="text-white">{file.name}</span></p>}
              </div>
            </div>
            <div className="bg-[#4169E1]/10 border border-[#4169E1]/30 rounded-xl p-4 mb-8">
              <p className="text-[#B0B0B0] text-sm">
                <strong className="text-white">Prochaines étapes :</strong> Votre soumission sera évaluée par le comité scientifique.
                Vous recevrez une notification d&apos;acceptation avant le 15 février 2026.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#4169E1] text-white font-bold rounded-full hover:scale-105 transition-all"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                S&apos;inscrire au colloque
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <BookOpen className="w-3 sm:w-4 h-3 sm:h-4 text-[#4169E1] mr-2" />
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Date limite : 15 janvier 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Soumettre une <span className="text-[#4169E1]">Communication</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto mb-8">
              Partagez vos travaux de recherche sur l&apos;Intelligence Artificielle
              et les Dynamiques des Organisations
            </p>
            <a
              href="/documents/template-cil2026.docx"
              download
              className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              <Download className="w-5 h-5 mr-2 text-[#4169E1]" />
              Télécharger le template
            </a>
          </div>
        </div>
      </section>

      {/* Rappel des consignes */}
      <section className="py-4 bg-[#D4AF37]/10 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <p className="text-[#D4AF37] text-sm">
              <strong>Rappel important :</strong> Formats acceptés : PDF ou Word. Taille maximale : 10 Mo.
              <Link href="/appel-communications" className="ml-2 text-[#4169E1] hover:underline">
                Voir les consignes complètes
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-12 sm:py-16 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informations sur l'auteur */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white">1</div>
                <User className="w-5 h-5 text-[#4169E1]" />
                Informations sur l&apos;auteur
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Civilité <span className="text-[#4169E1]">*</span>
                  </label>
                  <select
                    name="civilite"
                    value={formData.civilite}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  >
                    {civilites.map(c => (
                      <option key={c} value={c} className="bg-[#1A1A1A]">{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Nom <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Prénom <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Téléphone <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="+241 XX XX XX XX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Institution <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    placeholder="Université, laboratoire..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Pays <span className="text-[#4169E1]">*</span>
                  </label>
                  <select
                    name="pays"
                    value={formData.pays}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  >
                    {paysAfricains.map(pays => (
                      <option key={pays} value={pays} className="bg-[#1A1A1A]">{pays}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">
                    Co-auteurs (séparés par des virgules)
                  </label>
                  <input
                    type="text"
                    name="coAuteurs"
                    value={formData.coAuteurs}
                    onChange={handleChange}
                    placeholder="Dr Jean Dupont, Pr Marie Martin..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Informations sur la communication */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white">2</div>
                <BookOpen className="w-5 h-5 text-[#4169E1]" />
                Informations sur la communication
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Titre de la communication <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="titre"
                    value={formData.titre}
                    onChange={handleChange}
                    required
                    placeholder="Titre de votre communication"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Axe thématique <span className="text-[#4169E1]">*</span>
                  </label>
                  <select
                    name="axeThematique"
                    value={formData.axeThematique}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  >
                    <option value="" className="bg-[#1A1A1A]">-- Sélectionnez un axe --</option>
                    {thematicAxes.map((axis) => (
                      <option key={axis.value} value={axis.value} className="bg-[#1A1A1A]">{axis.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Mots-clés (5 maximum, séparés par des virgules) <span className="text-[#4169E1]">*</span>
                  </label>
                  <input
                    type="text"
                    name="motsCles"
                    value={formData.motsCles}
                    onChange={handleChange}
                    required
                    placeholder="intelligence artificielle, organisation, transformation digitale..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Résumé (150-200 mots, max 3000 caractères) <span className="text-[#4169E1]">*</span>
                  </label>
                  <textarea
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                    maxLength={3000}
                    rows={6}
                    placeholder="Résumé de votre communication..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm resize-none"
                  ></textarea>
                  <p className="text-xs text-[#B0B0B0] mt-1">{formData.resume.length}/3000 caractères</p>
                </div>
              </div>
            </div>

            {/* Upload du fichier */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white">3</div>
                <Upload className="w-5 h-5 text-[#4169E1]" />
                Téléchargement du fichier
              </h3>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive ? 'border-[#4169E1] bg-[#4169E1]/10' : 'border-white/20 hover:border-white/30'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="flex items-center justify-center gap-4">
                    <FileText className="w-10 h-10 text-[#4169E1]" />
                    <div className="text-left">
                      <p className="font-medium text-white">{file.name}</p>
                      <p className="text-sm text-[#B0B0B0]">{(file.size / 1024 / 1024).toFixed(2)} Mo</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-[#B0B0B0] mx-auto mb-4" />
                    <p className="text-[#B0B0B0] mb-2">
                      Glissez-déposez votre fichier ici ou
                    </p>
                    <label className="inline-flex items-center px-4 py-2 bg-[#4169E1] text-white rounded-full cursor-pointer hover:scale-105 transition-all">
                      <span>Parcourir</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-[#B0B0B0] mt-3">
                      Formats acceptés : PDF, DOC, DOCX (max. 10 Mo)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full font-bold text-white transition-all flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-white/20 cursor-not-allowed'
                  : 'bg-[#4169E1] hover:scale-105'
              }`}
              style={!isSubmitting ? { boxShadow: '0 0 30px rgba(65, 105, 225, 0.3)' } : {}}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Soumettre ma communication
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
