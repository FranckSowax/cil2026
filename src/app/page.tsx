'use client';

import Link from "next/link";
import Countdown from "@/components/Countdown";
import { Calendar, MapPin, ArrowRight, Check, ChevronRight, Users, Mic, Globe, Zap, GraduationCap, Briefcase, BookOpen, Building2, Award, Flag } from "lucide-react";

// Date du colloque - 25 mars 2026
const eventDate = new Date('2026-03-25T09:00:00');

// Statistiques actuelles et historiques
const stats = [
  { value: '12', suffix: 'ème', label: 'Édition' },
  { value: '1000', suffix: '+', label: 'Participants depuis 2013' },
  { value: '600', suffix: '+', label: 'Communications' },
  { value: '15', suffix: '+', label: 'Pays' },
];

// Tarifs par ordre décroissant (sans mention POPULAIRE)
const pricingPlans = [
  {
    name: "Praticiens et décideurs",
    price: "150 000",
    features: ["Accès VIP", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport", "Networking privilégié"],
  },
  {
    name: "Enseignants-Chercheurs",
    price: "70 000",
    features: ["Accès complet", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport", "12 ECTS"],
  },
  {
    name: "Doctorants et membres APCIL",
    price: "50 000",
    features: ["Accès complet", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport"],
  },
  {
    name: "Master professionnel / recherche",
    price: "40 000",
    features: ["Accès complet", "Pauses & déjeuners", "Soirée de gala", "Attestation"],
  },
  {
    name: "Étudiants",
    price: "10 000",
    features: ["Accès aux sessions", "Pauses café", "Attestation"],
  },
];

// Profils des participants
const participantProfiles = [
  { icon: GraduationCap, label: "Professeurs" },
  { icon: Briefcase, label: "Praticiens" },
  { icon: Award, label: "Docteurs" },
  { icon: BookOpen, label: "Doctorants" },
  { icon: GraduationCap, label: "Mastérants" },
  { icon: Building2, label: "Décideurs publics" },
  { icon: Briefcase, label: "Entrepreneurs" },
  { icon: Users, label: "Chercheurs" },
];

// Continents et pays participants
const continents = [
  { name: "Afrique", countries: ["Gabon", "Cameroun", "Côte d'Ivoire", "Sénégal", "Burkina Faso", "Bénin", "Togo", "Mali", "Niger", "RDC", "Congo", "Maroc", "Tunisie"] },
  { name: "Europe", countries: ["France", "Belgique", "Suisse", "Allemagne"] },
  { name: "Amérique", countries: ["Canada", "États-Unis"] },
];

// Partenaires
const partners = {
  organisateur: ["LARSIG"],
  partenaires: ["IST (Institut Supérieur de Technologie)", "EXCELIA Business School", "STUDIA SUP"],
  soutienScientifique: ["Université de Pau et des Pays de l'Adour", "Global Action Research Review", "IJEMS", "AGRH", "VSE (Vie & Sciences de l'Entreprise)", "Université Omar Bongo", "AEI", "Revue Camerounaise de Gestion"],
  editions: ["Eichenblatt Verlag"],
};

const features = [
  {
    icon: Mic,
    title: "Conférences Plénières",
    description: "Des experts internationaux partagent leurs visions sur l'IA et les organisations africaines."
  },
  {
    icon: Users,
    title: "Ateliers Pratiques",
    description: "Formations NVIVO et Équations Structurelles (SEM) pour les chercheurs."
  },
  {
    icon: Globe,
    title: "Networking International",
    description: "Rencontrez des chercheurs et praticiens de plus de 15 pays."
  },
  {
    icon: Zap,
    title: "Publications Scientifiques",
    description: "Opportunités de publication dans des revues indexées."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec titre principal et countdown */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/COVERCIL.jpg')" }}
        ></div>
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#0a1628]/90"></div>

        {/* Decorative blob */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-[#4169E1]/20 rounded-full filter blur-[100px] sm:blur-[150px]"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Titre principal - Colloque International de Libreville */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-md uppercase tracking-wide"
            style={{ fontFamily: "'Arial Black', 'Arial Bold', Gadget, sans-serif", fontWeight: 900 }}
          >
            Colloque International de Libreville
          </h1>

          {/* Sous-titre - Regards croisés */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100 mb-8 max-w-4xl mx-auto">
            « Regards croisés sur le développement en Afrique »
          </p>

          {/* Badge édition */}
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-10 shadow-lg">
            <span className="w-2.5 h-2.5 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm sm:text-base font-medium text-white tracking-wide">12è édition • CIL2026</span>
          </div>

          {/* Countdown Section */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl font-medium text-blue-50 mb-2">
              Début du Colloque dans
            </p>
            <p className="text-base sm:text-lg text-white/90 mb-8 font-light tracking-wide">
              23 - 27 Mars 2026 • Libreville, Gabon
            </p>
          </div>

          {/* Countdown component */}
          <div className="max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <Countdown targetDate={eventDate} />
          </div>
        </div>
      </section>

      {/* Thème Section - White Background */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Titre du thème */}
            <div className="mb-10">
              <p className="text-[#D4AF37] text-sm sm:text-base font-bold uppercase tracking-widest mb-4">
                Thème de cette édition
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4169E1] mb-6 leading-tight">
                « Intelligence artificielle et dynamiques des Organisations »
              </h2>
              <p className="text-xl sm:text-2xl font-medium text-gray-700">
                enjeux, défis et perspectives
              </p>
            </div>

            {/* Présidence */}
            <p className="text-base sm:text-lg text-gray-500 mb-12">
              Sous la présidence du <span className="text-[#4169E1] font-bold">Professeur Jean MOUSSAVOU</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link
                href="/inscription"
                className="btn-primary"
              >
                S&apos;inscrire maintenant
                <ArrowRight className="ml-2 w-5 h-5 inline-block" />
              </Link>
              <Link
                href="/appel-communications"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#4169E1] text-[#4169E1] font-semibold rounded-full hover:bg-[#4169E1] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Soumettre un papier
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Transparent (Blue Gradient) */}
      <section className="py-16 sm:py-20 border-y border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <p className="text-white/80 font-semibold text-sm sm:text-base uppercase tracking-wider">Une décennie d&apos;excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center relative">
                <div className="stat-number drop-shadow-sm">
                  {stat.value}<span className="text-2xl sm:text-4xl">{stat.suffix}</span>
                </div>
                <div className="stat-label text-blue-100 font-medium">{stat.label}</div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils des Participants - White Background */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Profils des <span className="text-[#4169E1]">Participants</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Le CIL réunit une diversité de profils pour des échanges riches et interdisciplinaires
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {participantProfiles.map((profile) => (
              <div
                key={profile.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#4169E1]/20 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 mx-auto bg-[#4169E1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-[#4169E1]">
                  <profile.icon className="w-7 h-7 text-[#4169E1] group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">{profile.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Géographique - Pays et Continents - Transparent (Blue Gradient) */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Participation <span className="text-blue-200">Internationale</span>
            </h2>
            <p className="text-blue-50 text-base sm:text-lg max-w-2xl mx-auto">
              Des participants de tous les continents pour des perspectives diversifiées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {continents.map((continent) => (
              <div
                key={continent.name}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-white/10 rounded-lg mr-4">
                    <Flag className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{continent.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {continent.countries.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1.5 bg-white/20 border border-white/10 rounded-full text-sm font-medium text-white shadow-sm"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - White Background */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tarifs d&apos;<span className="text-[#4169E1]">Inscription</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-3xl p-6 border transition-all duration-300 hover:scale-[1.02] flex flex-col ${
                  index === 0
                    ? 'border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/50'
                    : 'border-gray-100 shadow-lg hover:shadow-xl hover:border-[#4169E1]/30'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full shadow-md">
                    VIP
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px] flex items-center">{plan.name}</h3>
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-3xl font-bold text-[#4169E1]">{plan.price}</span>
                  <span className="text-gray-500 ml-1 text-sm font-medium">FCFA</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#4169E1] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={`block w-full py-3 text-center rounded-xl font-bold transition-all text-sm ${
                    index === 0
                      ? 'bg-[#D4AF37] text-white hover:bg-[#b5952f] shadow-md'
                      : 'bg-gray-50 text-[#4169E1] hover:bg-[#4169E1] hover:text-white'
                  }`}
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-bold text-[#4169E1]">Atelier Pré-CIL (NVIVO + SEM)</span> : <span className="text-gray-900 font-bold text-xl">35 000 FCFA</span>
            </p>
            <p className="text-gray-500 text-sm italic">
              (hors frais de participation au colloque)
            </p>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h4 className="text-gray-900 font-bold mb-6 text-center text-lg">L&apos;inscription comprend :</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
              {["Accueil à l'aéroport", "Participation aux sessions", "Pauses café", "Déjeuners", "Soirée de gala", "Attestation"].map((item) => (
                <div key={item} className="flex flex-col items-center group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-[#4169E1] transition-colors">
                    <Check className="w-5 h-5 text-[#4169E1] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Transparent (Blue Gradient) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Pourquoi <span className="text-blue-200">Participer ?</span>
            </h2>
            <p className="text-blue-50 text-base sm:text-lg max-w-2xl mx-auto">
              Une expérience unique au cœur de l&apos;innovation africaine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-white to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 text-[#4169E1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Partenaires - White Background */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Nos <span className="text-[#4169E1]">Partenaires</span>
            </h2>
          </div>

          {/* Organisateur principal */}
          <div className="mb-12">
            <h3 className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6 text-center">Organisateur principal</h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl px-10 py-6 border-2 border-[#D4AF37]/20 shadow-lg flex items-center gap-4">
                <span className="text-[#D4AF37] font-bold text-2xl">LARSIG</span>
              </div>
            </div>
          </div>

          {/* Partenaires */}
          <div className="mb-12">
            <h3 className="text-[#4169E1] font-bold text-sm uppercase tracking-widest mb-6 text-center">Partenaires</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.partenaires.map((partner) => (
                <div key={partner} className="bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 hover:border-[#4169E1] hover:shadow-md transition-all">
                  <span className="text-gray-700 font-medium text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soutien scientifique */}
          <div className="mb-12">
            <h3 className="text-[#4169E1] font-bold text-sm uppercase tracking-widest mb-6 text-center">Soutien scientifique</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.soutienScientifique.map((partner) => (
                <div key={partner} className="bg-white rounded-lg px-4 py-2 border border-gray-100 hover:border-[#4169E1]/50 transition-all shadow-sm">
                  <span className="text-gray-500 text-sm font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Éditions */}
          <div>
            <h3 className="text-[#4169E1] font-bold text-sm uppercase tracking-widest mb-6 text-center">Éditions</h3>
            <div className="flex justify-center">
              {partners.editions.map((partner) => (
                <div key={partner} className="bg-white rounded-xl px-6 py-4 border border-gray-100 shadow-sm">
                  <span className="text-gray-700 font-bold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Transparent (Blue Gradient) */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-[150px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
            Prêt à rejoindre le <span className="text-blue-200">CIL 2026</span> ?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez plus de 1000 chercheurs, praticiens et décideurs pour explorer
            l&apos;avenir de l&apos;IA en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#4169E1] font-bold rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            >
              S&apos;inscrire maintenant
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              href="/presentation"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
