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
      <div className="bg-gray-50 min-h-screen">
        <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#1e3a8a]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full filter blur-[150px]"></div>
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce-subtle">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#4169E1]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-sm">
              Soumission <span className="text-blue-200">Enregistrée !</span>
            </h1>
            <p className="text-lg text-blue-50 mb-8 font-light">
              Votre communication a été soumise avec succès. Un email de confirmation a été envoyé à <strong className="font-semibold">{formData.email}</strong>
            </p>
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 shadow-xl mb-8 text-left border border-white/20">
              <h3 className="text-gray-900 font-bold mb-4 text-xl">Récapitulatif</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-gray-500 font-medium">Titre :</span> <span className="text-gray-900 font-semibold">{formData.titre}</span></p>
                <p><span className="text-gray-500 font-medium">Auteur :</span> <span className="text-gray-900">{formData.civilite} {formData.prenom} {formData.nom}</span></p>
                <p><span className="text-gray-500 font-medium">Axe thématique :</span> <span className="text-gray-900">{formData.axeThematique}</span></p>
                {file && <p><span className="text-gray-500 font-medium">Fichier :</span> <span className="text-[#4169E1] underline">{file.name}</span></p>}
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <p className="text-blue-50 text-sm">
                <strong className="text-white">Prochaines étapes :</strong> Votre soumission sera évaluée par le comité scientifique.
                Vous recevrez une notification d&apos;acceptation avant le 15 février 2026.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#4169E1] font-bold rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#1e3a8a]"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-white/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white font-medium">Espace Auteurs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Soumettre une <span className="text-blue-200">Communication</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Remplissez le formulaire ci-dessous pour soumettre votre résumé ou article complet
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations auteur */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white shadow-md">1</div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#4169E1]" />
                  Informations Auteur
                </div>
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Civilité <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="civilite"
                    value={formData.civilite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  >
                    {civilites.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="hidden sm:block"></div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="+241 ..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    placeholder="Université / Entreprise"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="pays"
                    value={formData.pays}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  >
                    {paysAfricains.map(pays => (
                      <option key={pays} value={pays}>{pays}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Co-auteurs (séparés par des virgules)
                  </label>
                  <input
                    type="text"
                    name="coAuteurs"
                    value={formData.coAuteurs}
                    onChange={handleChange}
                    placeholder="Dr Jean Dupont, Pr Marie Martin..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Informations sur la communication */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white shadow-md">2</div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#4169E1]" />
                  Informations sur la communication
                </div>
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Titre de la communication <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="titre"
                    value={formData.titre}
                    onChange={handleChange}
                    required
                    placeholder="Titre de votre communication"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Axe thématique <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="axeThematique"
                    value={formData.axeThematique}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  >
                    <option value="">-- Sélectionnez un axe --</option>
                    {thematicAxes.map((axis) => (
                      <option key={axis.value} value={axis.value}>{axis.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mots-clés (5 maximum, séparés par des virgules) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motsCles"
                    value={formData.motsCles}
                    onChange={handleChange}
                    required
                    placeholder="intelligence artificielle, organisation, transformation digitale..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Résumé (150-200 mots, max 3000 caractères) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                    maxLength={3000}
                    rows={6}
                    placeholder="Résumé de votre communication..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none resize-none"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1 text-right">{formData.resume.length}/3000 caractères</p>
                </div>
              </div>
            </div>

            {/* Upload du fichier */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-sm text-white shadow-md">3</div>
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-[#4169E1]" />
                  Téléchargement du fichier
                </div>
              </h3>
              <div
                className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all ${
                  dragActive 
                    ? 'border-[#4169E1] bg-blue-50' 
                    : 'border-gray-300 hover:border-[#4169E1] hover:bg-gray-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#4169E1]" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900 text-lg">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} Mo</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline mt-2"
                    >
                      Supprimer et remplacer
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-900 font-medium mb-2 text-lg">
                      Glissez-déposez votre fichier ici
                    </p>
                    <p className="text-gray-500 text-sm mb-6">ou</p>
                    <label className="inline-flex items-center px-6 py-3 bg-[#4169E1] text-white rounded-full cursor-pointer hover:bg-[#3154b3] transition-all font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      <span>Parcourir mes fichiers</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-400 mt-6">
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
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-3 text-lg ${
                isSubmitting
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#4169E1] hover:bg-[#3154b3] shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Soumettre ma communication
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
