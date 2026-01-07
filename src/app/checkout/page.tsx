'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart, workshopPrice } from '@/context/CartContext';
import { createInscription, type InscriptionData } from '@/lib/api';
import {
  CreditCard,
  Smartphone,
  Building,
  Lock,
  CheckCircle,
  ArrowLeft,
  User,
  Loader2,
  AlertCircle
} from 'lucide-react';

const paymentMethods = [
  {
    id: 'mobile_money',
    name: 'Mobile Money',
    icon: Smartphone,
    description: 'Airtel Money, Moov Money',
  },
  {
    id: 'carte',
    name: 'Carte Bancaire',
    icon: CreditCard,
    description: 'Visa, Mastercard',
  },
  {
    id: 'virement',
    name: 'Virement Bancaire',
    icon: Building,
    description: 'Virement national ou international',
  },
];

const civilites = ['M.', 'Mme', 'Dr', 'Pr'] as const;

const paysAfricains = [
  'Gabon', 'Cameroun', 'Côte d\'Ivoire', 'Sénégal', 'Congo', 'RDC',
  'Bénin', 'Togo', 'Burkina Faso', 'Mali', 'Niger', 'Guinée',
  'Tchad', 'Centrafrique', 'Mauritanie', 'Madagascar', 'Maroc',
  'Tunisie', 'Algérie', 'Nigeria', 'Ghana', 'Kenya', 'Afrique du Sud',
  'France', 'Belgique', 'Suisse', 'Canada', 'Autre'
];

// Mapping des catégories du panier vers les catégories de la base de données
const categorieMapping: Record<string, 'etudiant' | 'master' | 'doctorant' | 'enseignant' | 'praticien'> = {
  'Étudiants': 'etudiant',
  'Master professionnel / recherche': 'master',
  'Doctorants et membres APCIL': 'doctorant',
  'Enseignants-Chercheurs': 'enseignant',
  'Praticiens et décideurs': 'praticien',
};

export default function CheckoutPage() {
  const { items, workshop, getTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<'carte' | 'virement' | 'mobile_money' | ''>('');

  const [formData, setFormData] = useState({
    civilite: 'M.' as typeof civilites[number],
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    institution: '',
    fonction: '',
    pays: 'Gabon',
    ville: '',
    acceptTerms: false,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayment || !formData.acceptTerms || items.length === 0) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Récupérer la catégorie depuis l'item du panier
      const item = items[0];
      const categorie = categorieMapping[item.name] || 'etudiant';

      const inscriptionData: InscriptionData = {
        civilite: formData.civilite,
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        institution: formData.institution,
        fonction: formData.fonction,
        pays: formData.pays,
        ville: formData.ville,
        categorie: categorie,
        tarif: item.price,
        avec_atelier: workshop,
        montant_total: getTotal(),
        statut_paiement: 'en_attente',
        mode_paiement: selectedPayment as 'carte' | 'virement' | 'mobile_money',
      };

      await createInscription(inscriptionData);

      setSubmitted(true);
      clearCart();
    } catch (err) {
      console.error('Erreur inscription:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Votre panier est vide</h2>
          <p className="text-[#B0B0B0] mb-8">Ajoutez une formule d&apos;inscription pour continuer</p>
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#4169E1] text-white font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
          >
            Voir les tarifs
          </Link>
        </div>
      </div>
    );
  }

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
              Inscription <span className="text-[#4169E1]">Confirmée !</span>
            </h1>
            <p className="text-lg text-[#B0B0B0] mb-8">
              Merci pour votre inscription au CIL 2026. Un email de confirmation a été envoyé à <strong className="text-white">{formData.email}</strong>
            </p>
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 border border-white/10 mb-8">
              <h3 className="text-white font-bold mb-4">Prochaines étapes</h3>
              <ul className="text-left space-y-3 text-[#B0B0B0] text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <span>Vérifiez votre email pour les instructions de paiement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <span>Effectuez le paiement dans les 48 heures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <span>Recevez votre confirmation définitive par email</span>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#4169E1] text-white font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <Lock className="w-3 sm:w-4 h-3 sm:h-4 text-[#4169E1] mr-2" />
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Paiement sécurisé</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Finaliser votre <span className="text-[#4169E1]">Inscription</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-8 sm:py-12 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Form Fields */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Info */}
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#4169E1]" />
                    Informations personnelles
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="Votre nom"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="Votre prénom"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="votre@email.com"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="+241 XX XX XX XX"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="Université, entreprise..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Fonction <span className="text-[#4169E1]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="Professeur, Étudiant, Directeur..."
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
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Ville <span className="text-[#4169E1]">*</span>
                      </label>
                      <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#4169E1] transition-colors text-sm"
                        placeholder="Votre ville"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#4169E1]" />
                    Mode de paiement
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedPayment(method.id as 'carte' | 'virement' | 'mobile_money')}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedPayment === method.id
                            ? 'border-[#4169E1] bg-[#4169E1]/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <method.icon className={`w-6 h-6 mb-2 ${
                          selectedPayment === method.id ? 'text-[#4169E1]' : 'text-[#B0B0B0]'
                        }`} />
                        <h4 className="text-white font-semibold text-sm">{method.name}</h4>
                        <p className="text-[#B0B0B0] text-xs mt-1">{method.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-[#4169E1] focus:ring-[#4169E1]"
                    />
                    <span className="text-[#B0B0B0] text-sm">
                      J&apos;accepte les <Link href="#" className="text-[#4169E1] hover:underline">conditions générales</Link> et la <Link href="#" className="text-[#4169E1] hover:underline">politique de confidentialité</Link> du CIL 2026. <span className="text-[#4169E1]">*</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 sticky top-24">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Votre commande</h3>

                  <div className="space-y-3 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-[#B0B0B0]">{item.name}</span>
                        <span className="text-white">{formatPrice(item.price)} FCFA</span>
                      </div>
                    ))}
                    {workshop && (
                      <div className="flex justify-between text-sm">
                        <span className="text-[#B0B0B0]">Ateliers pré-colloque</span>
                        <span className="text-white">{formatPrice(workshopPrice)} FCFA</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white font-bold">Total</span>
                      <span className="text-[#4169E1] font-bold text-xl">{formatPrice(getTotal())} FCFA</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedPayment || !formData.acceptTerms}
                    className={`flex items-center justify-center gap-2 w-full py-3 sm:py-4 text-center font-bold rounded-full transition-all text-sm sm:text-base ${
                      isSubmitting || !selectedPayment || !formData.acceptTerms
                        ? 'bg-white/20 text-white/50 cursor-not-allowed'
                        : 'bg-[#4169E1] text-white hover:scale-105'
                    }`}
                    style={!isSubmitting && selectedPayment && formData.acceptTerms ? { boxShadow: '0 0 30px rgba(65, 105, 225, 0.3)' } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      'Confirmer l\'inscription'
                    )}
                  </button>

                  <Link
                    href="/panier"
                    className="block w-full py-3 mt-3 text-center text-[#B0B0B0] hover:text-white transition-colors text-sm"
                  >
                    <ArrowLeft className="w-4 h-4 inline mr-2" />
                    Retour au panier
                  </Link>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 text-[#B0B0B0] text-xs">
                      <Lock className="w-4 h-4" />
                      <span>Paiement 100% sécurisé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
