'use client';

import { useState } from 'react';
import { Check, CreditCard, Smartphone, Building, AlertCircle, ArrowRight } from 'lucide-react';

const pricingCategories = [
  {
    category: "Praticiens et décideurs",
    price: 150000,
    features: ["Accès à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"]
  },
  {
    category: "Enseignants-chercheurs",
    price: 70000,
    features: ["Accès à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"]
  },
  {
    category: "Doctorants et membres APCIL",
    price: 50000,
    features: ["Accès à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"]
  },
  {
    category: "Master professionnel / recherche",
    price: 40000,
    features: ["Accès à toutes les sessions", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"]
  },
  {
    category: "Étudiants",
    price: 10000,
    features: ["Accès à toutes les sessions", "Pauses café", "Attestation de participation"]
  },
];

const workshopPrice = 35000;

const paymentMethods = [
  {
    id: 'mobile',
    name: 'Mobile Money',
    icon: Smartphone,
    description: 'Airtel Money, Moov Money',
    instructions: 'Envoyez le montant au numéro +241 XX XX XX XX avec votre nom complet en référence.'
  },
  {
    id: 'card',
    name: 'Carte Bancaire',
    icon: CreditCard,
    description: 'Visa, Mastercard',
    instructions: 'Paiement sécurisé via notre plateforme de paiement en ligne.'
  },
  {
    id: 'transfer',
    name: 'Virement Bancaire',
    icon: Building,
    description: 'Virement national ou international',
    instructions: 'IBAN: GA00 0000 0000 0000 0000 0000 000 - BIC: XXXXXX - Banque: BGFI Bank Gabon'
  },
];

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    institution: '',
    country: '',
    category: '',
    workshop: false,
    paymentMethod: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    const selectedCategory = pricingCategories.find(p => p.category === formData.category);
    if (selectedCategory) {
      total += selectedCategory.price;
    }
    if (formData.workshop) total += workshopPrice;
    return total;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#006400] mb-4">Inscription enregistrée !</h2>
            <p className="text-gray-600 mb-6">
              Votre demande d&apos;inscription a été enregistrée avec succès. 
              Un email de confirmation avec les instructions de paiement vous a été envoyé à <strong>{formData.email}</strong>.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-[#006400] mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-left">
                <p><span className="text-gray-500">Nom :</span> {formData.lastName} {formData.firstName}</p>
                <p><span className="text-gray-500">Catégorie :</span> {formData.category}</p>
                <p><span className="text-gray-500">Montant total :</span> <strong className="text-[#006400]">{formatPrice(calculateTotal())}</strong></p>
                <p><span className="text-gray-500">Mode de paiement :</span> {paymentMethods.find(m => m.id === formData.paymentMethod)?.name}</p>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-800 text-sm text-left">
                  Votre inscription sera validée après réception du paiement. 
                  Veuillez effectuer le paiement dans les 7 jours suivant votre inscription.
                </p>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-primary"
            >
              Retour à l&apos;accueil
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#00D9C5]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Inscriptions ouvertes</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Inscription & <span className="text-[#00D9C5]">Tarifs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto px-2">
              Inscrivez-vous au 12ème Colloque International de Libreville
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Grille Tarifaire</h2>
            <p className="text-[#B0B0B0]">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
            {pricingCategories.map((pricing, index) => (
              <div 
                key={pricing.category}
                className={`relative bg-[#1A1A1A] rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
                  index === 2 ? 'border-[#00D9C5] shadow-[0_0_40px_rgba(0,217,197,0.2)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {index === 2 && (
                  <div className="absolute -top-0 left-0 right-0 bg-[#00D9C5] text-black text-center py-2 text-xs font-bold">
                    POPULAIRE
                  </div>
                )}
                <div className={`p-5 ${index === 2 ? 'pt-10' : ''}`}>
                  <h3 className="font-bold text-sm text-white mb-3 min-h-[40px]">{pricing.category}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-[#00D9C5]">
                      {formatPrice(pricing.price)}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pricing.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-xs">
                        <Check className="w-3 h-3 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                        <span className="text-[#B0B0B0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Options supplémentaires */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-lg text-[#00D9C5] mb-4 text-center">Option Pré-Colloque</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-white">Ateliers de formation (23-24 mars)</span>
                  <p className="text-sm text-[#B0B0B0]">NVIVO et Introduction aux Équations structurelles (SEM)</p>
                </div>
                <span className="text-[#00D9C5] font-bold">{formatPrice(workshopPrice)}</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              En plus des frais de participation au colloque
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Formulaire d&apos;Inscription</h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous pour vous inscrire</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Informations personnelles */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b">
                Informations Personnelles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
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
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
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

            {/* Catégorie */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b">
                Catégorie de Participant
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sélectionnez votre catégorie <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006400] focus:border-transparent"
                >
                  <option value="">-- Choisir une catégorie --</option>
                  {pricingCategories.map((p) => (
                    <option key={p.category} value={p.category}>
                      {p.category} - {formatPrice(p.price)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Options */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b">
                Option Pré-Colloque
              </h3>
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="workshop"
                    checked={formData.workshop}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#006400] border-gray-300 rounded focus:ring-[#006400] mt-0.5"
                  />
                  <div>
                    <span className="text-gray-700 font-medium">
                      Ateliers de formation (23-24 mars) - <strong className="text-[#006400]">{formatPrice(workshopPrice)}</strong>
                    </span>
                    <p className="text-sm text-gray-500">Formation NVIVO et Introduction aux Équations structurelles (SEM)</p>
                  </div>
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Note : La soirée de gala est incluse dans les frais d&apos;inscription (sauf catégorie Étudiants).
              </p>
            </div>

            {/* Mode de paiement */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#006400] mb-4 pb-2 border-b">
                Mode de Paiement
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === method.id
                        ? 'border-[#006400] bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <method.icon className={`w-8 h-8 mb-2 ${
                      formData.paymentMethod === method.id ? 'text-[#006400]' : 'text-gray-400'
                    }`} />
                    <span className="font-medium text-sm text-center">{method.name}</span>
                    <span className="text-xs text-gray-500 text-center">{method.description}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Récapitulatif */}
            {formData.category && (
              <div className="mb-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#006400] mb-4">Récapitulatif</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inscription ({formData.category})</span>
                    <span>{formatPrice(pricingCategories.find(p => p.category === formData.category)?.price || 0)}</span>
                  </div>
                  {formData.workshop && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ateliers pré-colloque (NVIVO + SEM)</span>
                      <span>{formatPrice(workshopPrice)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-[#006400]">Total</span>
                      <span className="text-[#006400]">{formatPrice(calculateTotal())}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conditions */}
            <div className="mb-8">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 text-[#006400] border-gray-300 rounded focus:ring-[#006400] mt-0.5"
                />
                <span className="text-gray-700 text-sm">
                  J&apos;accepte les conditions générales de participation et la politique de confidentialité du CIL 2026. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center ${
                isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod
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
                  Valider mon inscription
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
