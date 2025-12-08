'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight, Download } from 'lucide-react';

const documentTypes = [
  { value: 'resume', label: 'Résumé étendu (2-3 pages)' },
  { value: 'short', label: 'Communication courte (5-8 pages)' },
  { value: 'full', label: 'Communication complète (15-20 pages)' },
];

const thematicAxes = [
  { value: 'axe1', label: 'Axe 1 : IA et Transformation Organisationnelle' },
  { value: 'axe2', label: 'Axe 2 : IA et Gestion des Ressources Humaines' },
  { value: 'axe3', label: 'Axe 3 : IA et Prise de Décision' },
  { value: 'axe4', label: 'Axe 4 : IA et Innovation en Afrique' },
];

export default function SoumettreePage() {
  const [formData, setFormData] = useState({
    authorName: '',
    coAuthors: '',
    email: '',
    phone: '',
    institution: '',
    country: '',
    title: '',
    thematicAxis: '',
    documentType: '',
    keywords: '',
    abstract: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
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
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#006400] mb-4">Soumission enregistrée !</h2>
            <p className="text-gray-600 mb-6">
              Votre communication a été soumise avec succès. Un email de confirmation a été envoyé à <strong>{formData.email}</strong>.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-bold text-[#006400] mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-500">Titre :</span> {formData.title}</p>
                <p><span className="text-gray-500">Auteur :</span> {formData.authorName}</p>
                <p><span className="text-gray-500">Axe thématique :</span> {thematicAxes.find(a => a.value === formData.thematicAxis)?.label}</p>
                <p><span className="text-gray-500">Type de document :</span> {documentTypes.find(d => d.value === formData.documentType)?.label}</p>
                <p><span className="text-gray-500">Fichier :</span> {file?.name}</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>Prochaines étapes :</strong> Votre soumission sera évaluée par le comité scientifique. 
                Vous recevrez une notification d&apos;acceptation avant le 15 février 2026.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">
                Retour à l&apos;accueil
              </Link>
              <Link href="/inscription" className="btn-secondary">
                S&apos;inscrire au colloque
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006400] to-[#004d00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soumettre une Communication
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Partagez vos travaux de recherche sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/documents/template-cil2026.docx" 
                download
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger le template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rappel des consignes */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div>
              <p className="text-yellow-800 font-medium">Rappel important</p>
              <p className="text-yellow-700 text-sm">
                Date limite de soumission : <strong>15 janvier 2026</strong>. 
                Formats acceptés : PDF ou Word. Taille maximale : 10 Mo.
                <Link href="/appel-communications" className="ml-2 text-[#006400] hover:underline">
                  Voir les consignes complètes →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Informations sur l'auteur */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b flex items-center">
                <span className="w-8 h-8 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Informations sur l&apos;auteur
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet de l&apos;auteur principal <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleChange}
                    required
                    placeholder="Prénom NOM"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Co-auteurs (si applicable)
                  </label>
                  <input
                    type="text"
                    name="coAuthors"
                    value={formData.coAuthors}
                    onChange={handleChange}
                    placeholder="Prénom NOM, Prénom NOM..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Informations sur la communication */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b flex items-center">
                <span className="w-8 h-8 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Informations sur la communication
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titre de la communication <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Axe thématique <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="thematicAxis"
                      value={formData.thematicAxis}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                    >
                      <option value="">-- Sélectionnez un axe --</option>
                      {thematicAxes.map((axis) => (
                        <option key={axis.value} value={axis.value}>{axis.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type de document <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                    >
                      <option value="">-- Sélectionnez un type --</option>
                      {documentTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mots-clés (5 maximum, séparés par des virgules) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    required
                    placeholder="intelligence artificielle, organisation, transformation digitale..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Résumé (150-200 mots) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Upload du fichier */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b flex items-center">
                <span className="w-8 h-8 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Téléchargement du fichier
              </h3>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive ? 'border-[#006400] bg-green-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="flex items-center justify-center space-x-3">
                    <FileText className="w-10 h-10 text-[#006400]" />
                    <div className="text-left">
                      <p className="font-medium text-[#006400]">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} Mo</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Supprimer
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Glissez-déposez votre fichier ici ou
                    </p>
                    <label className="inline-flex items-center px-4 py-2 bg-[#006400] text-white rounded-lg cursor-pointer hover:bg-[#004d00] transition-colors">
                      <span>Parcourir</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-3">
                      Formats acceptés : PDF, DOC, DOCX (max. 10 Mo)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting || !file}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                isSubmitting || !file
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#006400] hover:bg-[#004d00]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Soumettre ma communication
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
