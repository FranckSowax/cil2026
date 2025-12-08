'use client';

import Link from "next/link";
import Countdown from "@/components/Countdown";
import { Calendar, MapPin, ArrowRight, Check, ChevronRight, Users, Mic, Globe, Zap } from "lucide-react";

// Date du colloque - 25 mars 2026
const eventDate = new Date('2026-03-25T09:00:00');

const stats = [
  { value: '12', suffix: 'ème', label: 'Édition' },
  { value: '500', suffix: '+', label: 'Participants' },
  { value: '29', suffix: '', label: 'Experts' },
  { value: '15', suffix: '+', label: 'Pays' },
];

const pricingPlans = [
  {
    name: "Étudiants",
    price: "10 000",
    originalPrice: null,
    features: ["Accès aux sessions", "Pauses café", "Attestation"],
    popular: false,
  },
  {
    name: "Doctorants",
    price: "50 000",
    originalPrice: null,
    features: ["Accès complet", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport"],
    popular: false,
  },
  {
    name: "Enseignants-Chercheurs",
    price: "70 000",
    originalPrice: null,
    features: ["Accès complet", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport", "12 ECTS"],
    popular: true,
  },
  {
    name: "Praticiens",
    price: "150 000",
    originalPrice: null,
    features: ["Accès VIP", "Pauses & déjeuners", "Soirée de gala", "Attestation", "Accueil aéroport", "Networking privilégié"],
    popular: false,
  },
];

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
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#00D9C5]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#B8B5FF]/15 rounded-full filter blur-[80px] sm:blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#00D9C5] rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs sm:text-sm text-[#B0B0B0]">12ème Édition • Libreville, Gabon</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Intelligence Artificielle &<br />
                <span className="text-[#00D9C5] text-glow">Dynamiques des Organisations</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] mb-3 sm:mb-4 leading-relaxed">
                Enjeux, défis et perspectives pour l&apos;Afrique
              </p>
              <p className="text-xs sm:text-sm text-[#B0B0B0]/70 mb-6 sm:mb-8">
                Sous la présidence du Professeur Jean MOUSSAVOU
              </p>

              {/* Date & Location */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-10">
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                  <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-[#00D9C5]" />
                  <span className="text-white text-xs sm:text-sm">23 - 27 Mars 2026</span>
                </div>
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-[#00D9C5]" />
                  <span className="text-white text-xs sm:text-sm">Université Omar Bongo</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Link 
                  href="/inscription" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00D9C5] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 animate-pulse-glow text-sm sm:text-base"
                >
                  S&apos;inscrire maintenant
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
                <Link 
                  href="/appel-communications" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#00D9C5]/30 text-[#00D9C5] font-semibold rounded-full hover:bg-[#00D9C5]/10 transition-all duration-300 text-sm sm:text-base"
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
                    className="block w-full py-2.5 sm:py-3 text-center bg-[#00D9C5] text-black font-semibold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#0A0A0A] to-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title">Tarifs d&apos;Inscription</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Choisissez la formule adaptée à votre profil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 ${
                  plan.popular 
                    ? 'border-[#00D9C5] shadow-[0_0_30px_rgba(0,217,197,0.2)] sm:shadow-[0_0_40px_rgba(0,217,197,0.2)]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 bg-[#00D9C5] text-black text-[10px] sm:text-xs font-bold rounded-full">
                    POPULAIRE
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{plan.name}</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-4xl font-bold text-[#00D9C5]">{plan.price}</span>
                  <span className="text-[#B0B0B0] ml-1 sm:ml-2 text-sm">FCFA</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs sm:text-sm text-[#B0B0B0]">
                      <Check className="w-3 sm:w-4 h-3 sm:h-4 text-[#00D9C5] mr-2 sm:mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inscription"
                  className={`block w-full py-2.5 sm:py-3 text-center rounded-full font-semibold transition-all text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-[#00D9C5] text-black hover:brightness-110'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-[#B0B0B0] text-xs sm:text-sm">
              Ateliers pré-colloque (NVIVO + SEM) : <span className="text-[#00D9C5] font-semibold">+35 000 FCFA</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="section-title-cyan">Pourquoi Participer ?</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              Une expérience unique au cœur de l&apos;innovation africaine
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-[#00D9C5]/30 transition-all duration-300 group"
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-black" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-[#B0B0B0] text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#00D9C5]/10 rounded-full filter blur-[100px] sm:blur-[150px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Prêt à rejoindre le CIL 2026 ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B0B0B0] mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Rejoignez plus de 500 chercheurs, praticiens et décideurs pour explorer 
            l&apos;avenir de l&apos;IA en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link 
              href="/inscription" 
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
              style={{ boxShadow: '0 0 40px rgba(0, 217, 197, 0.4)' }}
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
