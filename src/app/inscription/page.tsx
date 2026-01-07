'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, CreditCard, Smartphone, Building, AlertCircle, ArrowRight, ShoppingCart, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

// Tarifs par ordre décroissant (du plus élevé au plus bas)
const pricingCategories = [
  {
    category: "Praticiens et décideurs",
    price: 150000,
    features: ["Accès VIP à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation", "Networking privilégié"],
    highlight: true,
  },
  {
    category: "Enseignants-chercheurs",
    price: 70000,
    features: ["Accès à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation", "12 ECTS"],
    highlight: false,
  },
  {
    category: "Doctorants et membres APCIL",
    price: 50000,
    features: ["Accès à toutes les sessions", "Accueil à l'aéroport", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"],
    highlight: false,
  },
  {
    category: "Master professionnel / recherche",
    price: 40000,
    features: ["Accès à toutes les sessions", "Pauses café et déjeuners", "Soirée de gala", "Attestations de participation"],
    highlight: false,
  },
  {
    category: "Étudiants",
    price: 10000,
    features: ["Accès à toutes les sessions", "Pauses café", "Attestation de participation"],
    highlight: false,
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
  const { addItem, getItemCount, clearCart } = useCart();
  const cartItemCount = getItemCount();

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
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const handleAddToCart = (pricing: { category: string; price: number }) => {
    clearCart();

    addItem({
      id: pricing.category.toLowerCase().replace(/\s+/g, '-'),
      name: `Inscription CIL 2026`,
      category: pricing.category,
      price: pricing.price,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      <section className="py-20 bg-gray-50 min-h-screen pt-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl">
            <div className="w-20 h-20 bg-[#4169E1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-[#4169E1]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inscription enregistrée !</h2>
            <p className="text-gray-600 mb-6">
              Votre demande d&apos;inscription a été enregistrée avec succès.
              Un email de confirmation avec les instructions de paiement vous a été envoyé à <strong className="text-[#4169E1]">{formData.email}</strong>.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100 text-left">
              <h3 className="font-bold text-[#4169E1] mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="text-gray-500">Nom :</span> <span className="font-medium">{formData.lastName} {formData.firstName}</span></p>
                <p><span className="text-gray-500">Catégorie :</span> <span className="font-medium">{formData.category}</span></p>
                <p><span className="text-gray-500">Montant total :</span> <strong className="text-[#4169E1]">{formatPrice(calculateTotal())} FCFA</strong></p>
                <p><span className="text-gray-500">Mode de paiement :</span> <span className="font-medium">{paymentMethods.find(m => m.id === formData.paymentMethod)?.name}</span></p>
              </div>
            </div>
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="text-[#D4AF37] text-sm text-left font-medium">
                  Votre inscription sera validée après réception du paiement.
                  Veuillez effectuer le paiement dans les 7 jours suivant votre inscription.
                </p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#4169E1] text-white font-semibold rounded-full hover:bg-[#3154b3] transition-colors"
            >
              Retour à l&apos;accueil
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Image avec effet Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/COVERSCILBACK.jpg')" }}
        ></div>
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/75 via-[#0a1628]/65 to-[#0a1628]/80"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs sm:text-sm text-white font-medium">Inscriptions ouvertes</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Inscription & <span className="text-blue-200">Tarifs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Inscrivez-vous au 12ème Colloque International de Libreville
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs - Ordre décroissant */}
      <section id="tarifs" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Grille <span className="text-[#4169E1]">Tarifaire</span></h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
            {pricingCategories.map((pricing, index) => (
              <div
                key={pricing.category}
                className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col ${
                  pricing.highlight
                    ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/50'
                    : 'border-gray-100 shadow-md hover:border-[#4169E1]/30'
                }`}
              >
                {pricing.highlight && (
                  <div className="absolute -top-0 left-0 right-0 bg-[#D4AF37] text-white text-center py-1.5 text-xs font-bold uppercase tracking-wider">
                    VIP
                  </div>
                )}
                <div className={`p-5 flex flex-col h-full ${pricing.highlight ? 'pt-10' : ''}`}>
                  <h3 className="font-bold text-sm text-gray-900 mb-4 min-h-[40px] leading-tight">{pricing.category}</h3>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <div className="text-2xl font-bold text-[#4169E1]">
                      {formatPrice(pricing.price)}
                    </div>
                    <span className="text-gray-500 text-xs font-medium">FCFA</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {pricing.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#4169E1] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleAddToCart(pricing)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 mt-auto ${
                      pricing.highlight
                        ? 'bg-[#D4AF37] text-white hover:bg-[#b5952f] shadow-md'
                        : 'bg-gray-50 text-[#4169E1] hover:bg-[#4169E1] hover:text-white border border-gray-100'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Choisir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Option Pré-Colloque */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 max-w-3xl mx-auto shadow-sm">
            <h3 className="font-bold text-lg text-[#4169E1] mb-4 text-center">Option Pré-Colloque</h3>
            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                  <span className="font-bold text-gray-900 text-base">Ateliers de formation (23-24 mars)</span>
                  <p className="text-sm text-gray-500 mt-1">NVIVO et Introduction aux Équations structurelles (SEM)</p>
                </div>
                <span className="text-[#4169E1] font-bold text-xl">{formatPrice(workshopPrice)} FCFA</span>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 italic">
              En plus des frais de participation au colloque
            </p>
          </div>

          {/* Ce que comprend l'inscription */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <h4 className="text-gray-900 font-bold mb-6 text-center">L&apos;inscription comprend :</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {["Accueil à l'aéroport", "Participation aux sessions", "Pauses café", "Déjeuners", "Soirée de gala", "Attestation"].map((item) => (
                <div key={item} className="flex flex-col items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-[#4169E1] transition-colors">
                    <Check className="w-5 h-5 text-[#4169E1] group-hover:text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cart CTA */}
          {cartItemCount > 0 && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
              <Link
                href="/panier"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#4169E1] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all transform hover:-translate-y-1"
                style={{ boxShadow: '0 10px 40px rgba(65, 105, 225, 0.4)' }}
              >
                <ShoppingCart className="w-5 h-5" />
                Voir le panier ({cartItemCount})
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulaire d&apos;<span className="text-[#4169E1]">Inscription</span></h2>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous pour vous inscrire</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10">
            {/* Informations personnelles */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#4169E1] mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#4169E1] text-sm">1</span>
                Informations Personnelles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="Votre prénom"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="+241 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="Votre institution"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="Votre pays"
                  />
                </div>
              </div>
            </div>

            {/* Catégorie */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#4169E1] mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#4169E1] text-sm">2</span>
                Catégorie de Participant
              </h3>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sélectionnez votre catégorie <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none appearance-none"
                  >
                    <option value="">-- Choisir une catégorie --</option>
                    {pricingCategories.map((p) => (
                      <option key={p.category} value={p.category}>
                        {p.category} - {formatPrice(p.price)} FCFA
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#4169E1] mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#4169E1] text-sm">3</span>
                Option Pré-Colloque
              </h3>
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                  <input
                    type="checkbox"
                    name="workshop"
                    checked={formData.workshop}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#4169E1] border-gray-300 rounded focus:ring-[#4169E1] mt-1"
                  />
                  <div>
                    <span className="text-gray-900 font-bold">
                      Ateliers de formation (23-24 mars) - <strong className="text-[#4169E1]">{formatPrice(workshopPrice)} FCFA</strong>
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Formation NVIVO et Introduction aux Équations structurelles (SEM)</p>
                  </div>
                </label>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                Note : La soirée de gala est incluse dans les frais d&apos;inscription (sauf catégorie Étudiants).
              </p>
            </div>

            {/* Mode de paiement */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#4169E1] mb-6 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#4169E1] text-sm">4</span>
                Mode de Paiement
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex flex-col items-center p-5 border-2 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] ${
                      formData.paymentMethod === method.id
                        ? 'border-[#4169E1] bg-blue-50/50'
                        : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'
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
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      formData.paymentMethod === method.id ? 'bg-[#4169E1] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm text-center text-gray-900 mb-1">{method.name}</span>
                    <span className="text-xs text-gray-500 text-center leading-tight">{method.description}</span>
                    {formData.paymentMethod === method.id && (
                      <div className="absolute top-3 right-3 text-[#4169E1]">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Récapitulatif */}
            {formData.category && (
              <div className="mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Récapitulatif</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Inscription ({formData.category})</span>
                    <span className="font-semibold text-gray-900">{formatPrice(pricingCategories.find(p => p.category === formData.category)?.price || 0)} FCFA</span>
                  </div>
                  {formData.workshop && (
                    <div className="flex justify-between text-gray-600">
                      <span>Ateliers pré-colloque (NVIVO + SEM)</span>
                      <span className="font-semibold text-gray-900">{formatPrice(workshopPrice)} FCFA</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-900">Total à payer</span>
                      <span className="text-[#4169E1]">{formatPrice(calculateTotal())} FCFA</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conditions */}
            <div className="mb-8">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all checked:border-[#4169E1] checked:bg-[#4169E1] hover:border-[#4169E1]"
                  />
                  <Check className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 w-3.5 h-3.5" />
                </div>
                <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">
                  J&apos;accepte les conditions générales de participation et la politique de confidentialité du CIL 2026. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center text-lg ${
                isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#4169E1] hover:bg-[#3154b3] shadow-lg hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </>
              ) : (
                <>
                  Valider mon inscription
                  <ArrowRight className="ml-2 w-6 h-6" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
