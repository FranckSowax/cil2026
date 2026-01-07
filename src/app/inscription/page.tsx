'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, CreditCard, Smartphone, Building, AlertCircle, ArrowRight, ShoppingCart } from 'lucide-react';
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
      <section className="py-20 bg-[#0A0A0A] min-h-screen pt-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10">
            <div className="w-20 h-20 bg-[#4169E1]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-[#4169E1]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Inscription enregistrée !</h2>
            <p className="text-[#B0B0B0] mb-6">
              Votre demande d&apos;inscription a été enregistrée avec succès.
              Un email de confirmation avec les instructions de paiement vous a été envoyé à <strong className="text-white">{formData.email}</strong>.
            </p>
            <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
              <h3 className="font-bold text-[#4169E1] mb-4">Récapitulatif</h3>
              <div className="space-y-2 text-left text-[#B0B0B0]">
                <p><span className="text-white/60">Nom :</span> <span className="text-white">{formData.lastName} {formData.firstName}</span></p>
                <p><span className="text-white/60">Catégorie :</span> <span className="text-white">{formData.category}</span></p>
                <p><span className="text-white/60">Montant total :</span> <strong className="text-[#4169E1]">{formatPrice(calculateTotal())} FCFA</strong></p>
                <p><span className="text-white/60">Mode de paiement :</span> <span className="text-white">{paymentMethods.find(m => m.id === formData.paymentMethod)?.name}</span></p>
              </div>
            </div>
            <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="text-[#D4AF37] text-sm text-left">
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
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-[#4169E1] rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Inscriptions ouvertes</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Inscription & <span className="text-[#4169E1]">Tarifs</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto px-2">
              Inscrivez-vous au 12ème Colloque International de Libreville
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs - Ordre décroissant */}
      <section id="tarifs" className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Grille <span className="text-[#4169E1]">Tarifaire</span></h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 sm:mb-12">
            {pricingCategories.map((pricing, index) => (
              <div
                key={pricing.category}
                className={`relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 ${
                  pricing.highlight
                    ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                    : 'border-white/10 hover:border-[#4169E1]/30'
                }`}
              >
                {pricing.highlight && (
                  <div className="absolute -top-0 left-0 right-0 bg-[#D4AF37] text-black text-center py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold">
                    VIP
                  </div>
                )}
                <div className={`p-4 sm:p-5 ${pricing.highlight ? 'pt-8 sm:pt-10' : ''}`}>
                  <h3 className="font-bold text-xs sm:text-sm text-white mb-2 sm:mb-3 min-h-[32px] sm:min-h-[40px]">{pricing.category}</h3>
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl font-bold text-[#4169E1]">
                      {formatPrice(pricing.price)}
                    </div>
                    <span className="text-[#B0B0B0] text-xs">FCFA</span>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4">
                    {pricing.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-[10px] sm:text-xs">
                        <Check className="w-3 h-3 text-[#4169E1] flex-shrink-0 mt-0.5" />
                        <span className="text-[#B0B0B0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleAddToCart(pricing)}
                    className={`w-full py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                      pricing.highlight
                        ? 'bg-[#D4AF37] text-black hover:brightness-110'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-[#4169E1] hover:border-[#4169E1]'
                    }`}
                  >
                    <ShoppingCart className="w-3 sm:w-4 h-3 sm:h-4" />
                    Choisir
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Option Pré-Colloque */}
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-base sm:text-lg text-[#4169E1] mb-3 sm:mb-4 text-center">Option Pré-Colloque</h3>
            <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <span className="font-medium text-white text-sm sm:text-base">Ateliers de formation (23-24 mars)</span>
                  <p className="text-xs sm:text-sm text-[#B0B0B0]">NVIVO et Introduction aux Équations structurelles (SEM)</p>
                </div>
                <span className="text-[#4169E1] font-bold text-lg">{formatPrice(workshopPrice)} FCFA</span>
              </div>
            </div>
            <p className="text-center text-xs sm:text-sm text-[#B0B0B0] mt-3 sm:mt-4">
              En plus des frais de participation au colloque
            </p>
          </div>

          {/* Ce que comprend l'inscription */}
          <div className="mt-8 bg-[#1A1A1A] rounded-xl p-6 border border-white/10 max-w-4xl mx-auto">
            <h4 className="text-white font-semibold mb-4 text-center">L&apos;inscription comprend :</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
              {["Accueil à l'aéroport", "Participation aux sessions", "Pauses café", "Déjeuners", "Soirée de gala", "Attestation"].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <Check className="w-5 h-5 text-[#4169E1] mb-2" />
                  <span className="text-xs text-[#B0B0B0]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cart CTA */}
          {cartItemCount > 0 && (
            <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
              <Link
                href="/panier"
                className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-[#4169E1] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-all text-sm sm:text-base"
                style={{ boxShadow: '0 0 40px rgba(65, 105, 225, 0.5)' }}
              >
                <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
                Voir le panier ({cartItemCount})
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Formulaire d&apos;<span className="text-[#4169E1]">Inscription</span></h2>
            <p className="text-[#B0B0B0]">Remplissez le formulaire ci-dessous pour vous inscrire</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-2xl border border-white/10 p-6 sm:p-8">
            {/* Informations personnelles */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#4169E1] mb-4 pb-2 border-b border-white/10">
                Informations Personnelles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Institution / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Catégorie */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#4169E1] mb-4 pb-2 border-b border-white/10">
                Catégorie de Participant
              </h3>
              <div>
                <label className="block text-sm font-medium text-[#B0B0B0] mb-1">
                  Sélectionnez votre catégorie <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                >
                  <option value="" className="bg-[#1A1A1A]">-- Choisir une catégorie --</option>
                  {pricingCategories.map((p) => (
                    <option key={p.category} value={p.category} className="bg-[#1A1A1A]">
                      {p.category} - {formatPrice(p.price)} FCFA
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Options */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#4169E1] mb-4 pb-2 border-b border-white/10">
                Option Pré-Colloque
              </h3>
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="workshop"
                    checked={formData.workshop}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#4169E1] border-white/20 bg-white/5 rounded focus:ring-[#4169E1] mt-0.5"
                  />
                  <div>
                    <span className="text-white font-medium">
                      Ateliers de formation (23-24 mars) - <strong className="text-[#4169E1]">{formatPrice(workshopPrice)} FCFA</strong>
                    </span>
                    <p className="text-sm text-[#B0B0B0]">Formation NVIVO et Introduction aux Équations structurelles (SEM)</p>
                  </div>
                </label>
              </div>
              <p className="text-sm text-[#B0B0B0] mt-3">
                Note : La soirée de gala est incluse dans les frais d&apos;inscription (sauf catégorie Étudiants).
              </p>
            </div>

            {/* Mode de paiement */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#4169E1] mb-4 pb-2 border-b border-white/10">
                Mode de Paiement
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.paymentMethod === method.id
                        ? 'border-[#4169E1] bg-[#4169E1]/10'
                        : 'border-white/10 hover:border-white/20'
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
                      formData.paymentMethod === method.id ? 'text-[#4169E1]' : 'text-[#B0B0B0]'
                    }`} />
                    <span className="font-medium text-sm text-center text-white">{method.name}</span>
                    <span className="text-xs text-[#B0B0B0] text-center">{method.description}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Récapitulatif */}
            {formData.category && (
              <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-[#4169E1] mb-4">Récapitulatif</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#B0B0B0]">
                    <span>Inscription ({formData.category})</span>
                    <span className="text-white">{formatPrice(pricingCategories.find(p => p.category === formData.category)?.price || 0)} FCFA</span>
                  </div>
                  {formData.workshop && (
                    <div className="flex justify-between text-[#B0B0B0]">
                      <span>Ateliers pré-colloque (NVIVO + SEM)</span>
                      <span className="text-white">{formatPrice(workshopPrice)} FCFA</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-white">Total</span>
                      <span className="text-[#4169E1]">{formatPrice(calculateTotal())} FCFA</span>
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
                  className="w-5 h-5 text-[#4169E1] border-white/20 bg-white/5 rounded focus:ring-[#4169E1] mt-0.5"
                />
                <span className="text-[#B0B0B0] text-sm">
                  J&apos;accepte les conditions générales de participation et la politique de confidentialité du CIL 2026. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod}
              className={`w-full py-4 rounded-full font-bold text-white transition-all flex items-center justify-center ${
                isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod
                  ? 'bg-white/10 cursor-not-allowed'
                  : 'bg-[#4169E1] hover:brightness-110'
              }`}
              style={!(isSubmitting || !formData.acceptTerms || !formData.category || !formData.paymentMethod) ? { boxShadow: '0 0 30px rgba(65, 105, 225, 0.3)' } : {}}
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
