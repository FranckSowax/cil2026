'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Coffee, Utensils, Music, BookOpen, Award, ChevronDown, ChevronUp } from 'lucide-react';

type DayKey = 'jour1' | 'jour2' | 'jour3' | 'jour4' | 'jour5';

interface Session {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  location?: string;
  type: 'keynote' | 'session' | 'workshop' | 'break' | 'social' | 'registration';
}

interface DayProgram {
  date: string;
  title: string;
  sessions: Session[];
}

const programData: Record<DayKey, DayProgram> = {
  jour1: {
    date: "Lundi 23 Mars 2026",
    title: "Pré-Colloque - Ateliers de Formation (Jour 1)",
    sessions: [
      { time: "08:00 - 09:00", title: "Accueil et inscription aux ateliers", type: "registration", location: "Hall principal" },
      { time: "09:00 - 12:30", title: "Atelier NVIVO - Partie 1", description: "Introduction à l'analyse qualitative avec NVIVO : prise en main et importation de données", type: "workshop", location: "Salle informatique A" },
      { time: "09:00 - 12:30", title: "Atelier Équations Structurelles (SEM) - Partie 1", description: "Fondements théoriques et conceptuels des modèles d'équations structurelles", type: "workshop", location: "Salle informatique B" },
      { time: "12:30 - 14:00", title: "Pause déjeuner", type: "break" },
      { time: "14:00 - 17:30", title: "Atelier NVIVO - Partie 2", description: "Codage, analyse thématique et visualisation des résultats", type: "workshop", location: "Salle informatique A" },
      { time: "14:00 - 17:30", title: "Atelier SEM - Partie 2", description: "Spécification et estimation des modèles avec logiciels (AMOS, SmartPLS)", type: "workshop", location: "Salle informatique B" },
    ]
  },
  jour2: {
    date: "Mardi 24 Mars 2026",
    title: "Pré-Colloque - Ateliers de Formation (Jour 2)",
    sessions: [
      { time: "09:00 - 12:30", title: "Atelier NVIVO - Partie 3", description: "Analyse avancée : requêtes, matrices et rapports de recherche", type: "workshop", location: "Salle informatique A" },
      { time: "09:00 - 12:30", title: "Atelier SEM - Partie 3", description: "Évaluation de la qualité des modèles et interprétation des résultats", type: "workshop", location: "Salle informatique B" },
      { time: "12:30 - 14:00", title: "Pause déjeuner", type: "break" },
      { time: "14:00 - 17:30", title: "Atelier NVIVO - Partie 4", description: "Études de cas et applications pratiques", type: "workshop", location: "Salle informatique A" },
      { time: "14:00 - 17:30", title: "Atelier SEM - Partie 4", description: "Applications pratiques et rédaction des résultats pour publication", type: "workshop", location: "Salle informatique B" },
      { time: "18:00 - 19:30", title: "Cocktail de bienvenue", description: "Rencontre informelle entre participants du colloque", type: "social", location: "Terrasse du campus" },
    ]
  },
  jour3: {
    date: "Mercredi 25 Mars 2026",
    title: "Colloque - Jour 1 : Ouverture et Axe 1",
    sessions: [
      { time: "08:00 - 09:00", title: "Accueil et inscription", type: "registration", location: "Hall principal" },
      { time: "09:00 - 10:00", title: "Cérémonie d'ouverture officielle", description: "Discours des autorités et présentation du colloque", type: "keynote", location: "Amphithéâtre principal" },
      { time: "10:00 - 10:30", title: "Pause café", type: "break" },
      { time: "10:30 - 12:00", title: "Conférence inaugurale : L'IA, révolution ou évolution ?", description: "Vision prospective sur l'impact de l'IA dans les organisations", speaker: "Prof. Jean Moussavou", type: "keynote", location: "Amphithéâtre principal" },
      { time: "12:00 - 14:00", title: "Pause déjeuner", type: "break" },
      { time: "14:00 - 15:30", title: "Session 1A : IA et Transformation Organisationnelle", description: "Présentations de communications sur l'axe 1", type: "session", location: "Salle A" },
      { time: "14:00 - 15:30", title: "Session 1B : Automatisation des processus", description: "Présentations de communications", type: "session", location: "Salle B" },
      { time: "15:30 - 16:00", title: "Pause café", type: "break" },
      { time: "16:00 - 17:30", title: "Session 2A : Modèles organisationnels émergents", description: "Présentations de communications", type: "session", location: "Salle A" },
      { time: "16:00 - 17:30", title: "Session 2B : Gestion du changement technologique", description: "Présentations de communications", type: "session", location: "Salle B" },
    ]
  },
  jour4: {
    date: "Jeudi 26 Mars 2026",
    title: "Colloque - Jour 2 : Axes 2 et 3",
    sessions: [
      { time: "09:00 - 10:30", title: "Conférence plénière : IA et Capital Humain", description: "Les nouveaux défis RH à l'ère de l'IA", speaker: "Prof. Invité International", type: "keynote", location: "Amphithéâtre principal" },
      { time: "10:30 - 11:00", title: "Pause café", type: "break" },
      { time: "11:00 - 12:30", title: "Session 3A : IA et Gestion des RH", description: "Présentations de communications sur l'axe 2", type: "session", location: "Salle A" },
      { time: "11:00 - 12:30", title: "Session 3B : Recrutement et IA", description: "Présentations de communications", type: "session", location: "Salle B" },
      { time: "12:30 - 14:00", title: "Pause déjeuner", type: "break" },
      { time: "14:00 - 15:30", title: "Session 4A : IA et Prise de Décision", description: "Présentations de communications sur l'axe 3", type: "session", location: "Salle A" },
      { time: "14:00 - 15:30", title: "Session 4B : Gouvernance algorithmique", description: "Présentations de communications", type: "session", location: "Salle B" },
      { time: "15:30 - 16:00", title: "Pause café", type: "break" },
      { time: "16:00 - 17:30", title: "Table ronde : Éthique et IA dans les organisations africaines", description: "Débat avec des experts et praticiens", type: "session", location: "Amphithéâtre principal" },
      { time: "20:00 - 23:00", title: "Dîner de gala", description: "Soirée festive avec remise des prix", type: "social", location: "Hôtel Radisson Blu" },
    ]
  },
  jour5: {
    date: "Vendredi 27 Mars 2026",
    title: "Colloque - Jour 3 : Axe 4 et Clôture",
    sessions: [
      { time: "09:00 - 10:30", title: "Conférence plénière : L'IA en Afrique - Défis et Opportunités", description: "Perspectives africaines sur l'IA", speaker: "Dr. Expert Africain", type: "keynote", location: "Amphithéâtre principal" },
      { time: "10:30 - 11:00", title: "Pause café", type: "break" },
      { time: "11:00 - 12:30", title: "Session 5A : IA et Innovation en Afrique", description: "Présentations de communications sur l'axe 4", type: "session", location: "Salle A" },
      { time: "11:00 - 12:30", title: "Session 5B : Entrepreneuriat technologique", description: "Présentations de communications", type: "session", location: "Salle B" },
      { time: "12:30 - 14:00", title: "Pause déjeuner", type: "break" },
      { time: "14:00 - 15:30", title: "Session de synthèse et perspectives", description: "Bilan des travaux et orientations futures", type: "session", location: "Amphithéâtre principal" },
      { time: "15:30 - 16:30", title: "Cérémonie de clôture", description: "Discours de clôture et annonce du prochain CIL", type: "keynote", location: "Amphithéâtre principal" },
    ]
  },
};

const getSessionIcon = (type: string) => {
  switch (type) {
    case 'keynote': return Award;
    case 'session': return Users;
    case 'workshop': return BookOpen;
    case 'break': return Coffee;
    case 'social': return Music;
    case 'registration': return Calendar;
    default: return Calendar;
  }
};

const getSessionColor = (type: string) => {
  switch (type) {
    case 'keynote': return 'bg-[#00D9C5]/20 text-[#00D9C5] border-[#00D9C5]/30';
    case 'session': return 'bg-[#B8B5FF]/20 text-[#B8B5FF] border-[#B8B5FF]/30';
    case 'workshop': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'break': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'social': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    case 'registration': return 'bg-white/10 text-[#B0B0B0] border-white/20';
    default: return 'bg-white/10 text-[#B0B0B0] border-white/20';
  }
};

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState<DayKey>('jour3');
  const [expandedSessions, setExpandedSessions] = useState<Record<string, boolean>>({});

  const toggleSession = (sessionId: string) => {
    setExpandedSessions(prev => ({
      ...prev,
      [sessionId]: !prev[sessionId]
    }));
  };

  const days: { key: DayKey; label: string; shortLabel: string }[] = [
    { key: 'jour1', label: 'Lun 23', shortLabel: '23' },
    { key: 'jour2', label: 'Mar 24', shortLabel: '24' },
    { key: 'jour3', label: 'Mer 25', shortLabel: '25' },
    { key: 'jour4', label: 'Jeu 26', shortLabel: '26' },
    { key: 'jour5', label: 'Ven 27', shortLabel: '27' },
  ];

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-[#B8B5FF]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-[#B0B0B0]">23 - 27 Mars 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Programme du <span className="text-[#00D9C5]">Colloque</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto px-2">
              5 jours d&apos;échanges, de conférences et d&apos;ateliers sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <section className="py-4 sm:py-6 bg-[#111111] border-b border-white/10 sticky top-16 sm:top-20 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-0.5 sm:p-1 border border-white/10 overflow-x-auto">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setActiveDay(day.key)}
                  className={`px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all text-xs sm:text-sm ${
                    activeDay === day.key
                      ? 'bg-[#00D9C5] text-black shadow-lg'
                      : 'text-[#B0B0B0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">{day.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme du jour */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">{programData[activeDay].date}</h2>
            <p className="text-[#00D9C5]">{programData[activeDay].title}</p>
          </div>

          {/* Légende */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { type: 'keynote', label: 'Plénière' },
              { type: 'session', label: 'Session' },
              { type: 'workshop', label: 'Atelier' },
              { type: 'break', label: 'Pause' },
              { type: 'social', label: 'Social' },
            ].map((item) => (
              <div key={item.type} className={`px-3 py-1 rounded-full text-xs font-medium border ${getSessionColor(item.type)}`}>
                {item.label}
              </div>
            ))}
          </div>

          {/* Sessions */}
          <div className="space-y-4">
            {programData[activeDay].sessions.map((session, index) => {
              const SessionIcon = getSessionIcon(session.type);
              const sessionId = `${activeDay}-${index}`;
              const isExpanded = expandedSessions[sessionId];

              return (
                <div
                  key={sessionId}
                  className={`bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden transition-all hover:border-white/20 ${
                    session.type === 'break' ? 'opacity-60' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleSession(sessionId)}
                    className="w-full p-4 flex items-start space-x-4 text-left"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border ${getSessionColor(session.type)}`}>
                      <SessionIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4 text-[#B0B0B0]" />
                        <span className="text-sm font-medium text-[#B0B0B0]">{session.time}</span>
                      </div>
                      <h3 className="font-bold text-white mb-1">{session.title}</h3>
                      {session.location && (
                        <div className="flex items-center space-x-1 text-sm text-[#B0B0B0]">
                          <MapPin className="w-3 h-3" />
                          <span>{session.location}</span>
                        </div>
                      )}
                    </div>
                    {(session.description || session.speaker) && (
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#B0B0B0]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#B0B0B0]" />
                        )}
                      </div>
                    )}
                  </button>

                  {isExpanded && (session.description || session.speaker) && (
                    <div className="px-4 pb-4 pt-0 ml-16">
                      {session.description && (
                        <p className="text-[#B0B0B0] text-sm mb-2">{session.description}</p>
                      )}
                      {session.speaker && (
                        <p className="text-sm">
                          <span className="text-[#B0B0B0]">Intervenant :</span>{' '}
                          <span className="font-medium text-[#00D9C5]">{session.speaker}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info supplémentaire */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] rounded-3xl p-6 text-center border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">4 Ateliers</h3>
              <p className="text-[#B0B0B0] text-sm">Formations pratiques sur 2 jours avant le colloque</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-3xl p-6 text-center border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">10+ Sessions</h3>
              <p className="text-[#B0B0B0] text-sm">Présentations de communications scientifiques</p>
            </div>
            <div className="bg-[#1A1A1A] rounded-3xl p-6 text-center border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">3 Plénières</h3>
              <p className="text-[#B0B0B0] text-sm">Conférences avec des experts internationaux</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
