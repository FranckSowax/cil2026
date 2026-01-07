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
    <div className="bg-[#0A0A0A]">
      {/* Hero Section - Full viewport */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#D4AF37]/15 rounded-full filter blur-[80px] sm:blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              {/* En-tête officiel */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-[#4169E1] text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2">
                  Colloque International de Libreville
                </h2>
                <p className="text-white/70 text-xs sm:text-sm italic mb-1">
                  « Regards croisés sur le développement en Afrique »
                </p>
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#4169E1] rounded-full mr-2 animate-pulse"></span>
                  <span className="text-xs sm:text-sm text-[#B0B0B0]">12è édition • CIL2026</span>
                </div>
              </div>

              {/* Titre du thème avec typographie spécifique */}
              <div className="mb-4 sm:mb-6">
                <h1 className="theme-title-main text-[#4169E1] mb-2">
                  « Intelligence artificielle et dynamiques des Organisations »
                </h1>
                <p className="theme-title-sub text-[#4169E1]">
                  enjeux, défis et perspectives
                </p>
              </div>

              {/* Présidence */}
              <p className="text-xs sm:text-sm text-[#B0B0B0]/70 mb-6 sm:mb-8">
                Sous la présidence du <span className="text-white font-medium">Professeur Jean MOUSSAVOU</span>
              </p>

              {/* Date & Location */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-10">
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-[#4169E1]" />
                  <span className="text-white text-xs sm:text-sm">23 - 27 Mars 2026</span>
                </div>
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-[#4169E1]" />
                  <span className="text-white text-xs sm:text-sm">Libreville, Gabon</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#4169E1] text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-pulse-glow text-sm sm:text-base"
                >
                  S&apos;inscrire maintenant
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
                <Link
                  href="/appel-communications"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#4169E1]/30 text-[#4169E1] font-semibold rounded-full hover:bg-[#4169E1]/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Soumettre un papier
                  <ChevronRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </div>
            </div>

            {/* Right: Countdown */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-md w-full">
                <p className="text-center text-[#B0B0B0] text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-6">
                  Début du colloque dans
                </p>
                <Countdown targetDate={eventDate} />
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-center text-[#B0B0B0] text-xs sm:text-sm mb-3 sm:mb-4">Inscriptions ouvertes</p>
                  <Link
                    href="/inscription"
                    className="block w-full py-2.5 sm:py-3 text-center bg-[#4169E1] text-white font-semibold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Historiques */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#0A0A0A] to-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#4169E1] font-semibold text-sm sm:text-base uppercase tracking-wider">Depuis 2013</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center relative">
                <div className="stat-number">
                  {stat.value}<span className="text-xl sm:text-3xl">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 sm:h-12 bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profils des Participants */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Profils des <span className="text-[#4169E1]">Participants</span></h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Le CIL réunit une diversité de profils pour des échanges riches et interdisciplinaires
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {participantProfiles.map((profile) => (
              <div
                key={profile.label}
                className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-[#4169E1]/30 transition-all duration-300 text-center group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 mx-auto bg-gradient-to-br from-[#4169E1] to-[#D4AF37] rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <profile.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">{profile.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Géographique - Pays et Continents */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-cyan">Participation <span className="text-white">Internationale</span></h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Des participants de tous les continents pour des perspectives diversifiées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {continents.map((continent) => (
              <div
                key={continent.name}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#4169E1]/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Flag className="w-5 h-5 text-[#4169E1] mr-2" />
                  <h3 className="text-xl font-bold text-white">{continent.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {continent.countries.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-[#B0B0B0]"
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

      {/* Pricing Section - Ordre décroissant */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title">Tarifs d&apos;<span className="text-[#4169E1]">Inscription</span></h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-5 border transition-all duration-300 hover:scale-[1.02] ${
                  index === 0
                    ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                    : 'border-white/10 hover:border-[#4169E1]/30'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 bg-[#D4AF37] text-black text-[10px] sm:text-xs font-bold rounded-full">
                    VIP
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-bold text-white mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-[#4169E1]">{plan.price}</span>
                  <span className="text-[#B0B0B0] ml-1 text-xs sm:text-sm">FCFA</span>
                </div>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs text-[#B0B0B0]">
                      <Check className="w-3 h-3 text-[#4169E1] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={`block w-full py-2 text-center rounded-full font-semibold transition-all text-xs sm:text-sm ${
                    index === 0
                      ? 'bg-[#D4AF37] text-black hover:brightness-110'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-[#4169E1] hover:border-[#4169E1]'
                  }`}
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 p-4 bg-[#1A1A1A] rounded-xl border border-white/10">
            <p className="text-[#B0B0B0] text-sm sm:text-base mb-2">
              <span className="font-semibold text-white">Atelier Pré-CIL (NVIVO + SEM)</span> : <span className="text-[#4169E1] font-bold">35 000 FCFA</span>
            </p>
            <p className="text-[#B0B0B0]/70 text-xs">
              (hors frais de participation au colloque)
            </p>
          </div>

          <div className="mt-8 bg-[#1A1A1A] rounded-xl p-6 border border-white/10">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title-cyan">Pourquoi <span className="text-white">Participer ?</span></h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Une expérience unique au cœur de l&apos;innovation africaine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-[#4169E1]/30 transition-all duration-300 group"
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-[#4169E1] to-[#D4AF37] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-[#B0B0B0] text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Nos <span className="text-[#4169E1]">Partenaires</span></h2>
          </div>

          {/* Organisateur principal */}
          <div className="mb-8">
            <h3 className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-4 text-center">Organisateur principal</h3>
            <div className="flex justify-center">
              <div className="bg-[#1A1A1A] rounded-xl px-8 py-4 border border-[#D4AF37]/30">
                <span className="text-white font-bold text-lg">LARSIG</span>
              </div>
            </div>
          </div>

          {/* Partenaires */}
          <div className="mb-8">
            <h3 className="text-[#4169E1] font-semibold text-sm uppercase tracking-wider mb-4 text-center">Partenaires</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.partenaires.map((partner) => (
                <div key={partner} className="bg-[#1A1A1A] rounded-xl px-6 py-3 border border-white/10 hover:border-[#4169E1]/30 transition-all">
                  <span className="text-white text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soutien scientifique */}
          <div className="mb-8">
            <h3 className="text-[#4169E1] font-semibold text-sm uppercase tracking-wider mb-4 text-center">Soutien scientifique</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.soutienScientifique.map((partner) => (
                <div key={partner} className="bg-[#1A1A1A] rounded-lg px-4 py-2 border border-white/10 hover:border-[#4169E1]/30 transition-all">
                  <span className="text-[#B0B0B0] text-xs sm:text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Éditions */}
          <div>
            <h3 className="text-[#4169E1] font-semibold text-sm uppercase tracking-wider mb-4 text-center">Éditions</h3>
            <div className="flex justify-center">
              {partners.editions.map((partner) => (
                <div key={partner} className="bg-[#1A1A1A] rounded-xl px-6 py-3 border border-white/10">
                  <span className="text-white text-sm">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#4169E1]/10 rounded-full filter blur-[100px] sm:blur-[150px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Prêt à rejoindre le <span className="text-[#4169E1]">CIL 2026</span> ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B0B0B0] mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Rejoignez plus de 1000 chercheurs, praticiens et décideurs pour explorer
            l&apos;avenir de l&apos;IA en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#4169E1] text-white font-bold rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
              style={{ boxShadow: '0 0 40px rgba(65, 105, 225, 0.4)' }}
            >
              S&apos;inscrire maintenant
              <ArrowRight className="ml-2 sm:ml-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
            </Link>
            <Link
              href="/presentation"
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
