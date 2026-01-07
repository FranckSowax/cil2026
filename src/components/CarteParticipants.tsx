'use client';

import { useState } from 'react';

const countries = {
  afrique: {
    name: "Afrique",
    color: "#22c55e",
    countries: [
      { name: "Gabon", flag: "🇬🇦" },
      { name: "Cameroun", flag: "🇨🇲" },
      { name: "Côte d'Ivoire", flag: "🇨🇮" },
      { name: "Sénégal", flag: "🇸🇳" },
      { name: "Burkina Faso", flag: "🇧🇫" },
      { name: "Bénin", flag: "🇧🇯" },
      { name: "Togo", flag: "🇹🇬" },
      { name: "Mali", flag: "🇲🇱" },
      { name: "Niger", flag: "🇳🇪" },
      { name: "RDC", flag: "🇨🇩" },
      { name: "Congo", flag: "🇨🇬" },
      { name: "Maroc", flag: "🇲🇦" },
      { name: "Tunisie", flag: "🇹🇳" },
    ]
  },
  europe: {
    name: "Europe",
    color: "#3b82f6",
    countries: [
      { name: "France", flag: "🇫🇷" },
      { name: "Belgique", flag: "🇧🇪" },
      { name: "Suisse", flag: "🇨🇭" },
      { name: "Allemagne", flag: "🇩🇪" },
    ]
  },
  amerique: {
    name: "Amérique",
    color: "#ef4444",
    countries: [
      { name: "Canada", flag: "🇨🇦" },
      { name: "États-Unis", flag: "🇺🇸" },
    ]
  }
};

type ContinentKey = 'afrique' | 'europe' | 'amerique';

export default function CarteParticipants() {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey | null>(null);

  const stats = {
    total: countries.afrique.countries.length + countries.europe.countries.length + countries.amerique.countries.length,
    afrique: countries.afrique.countries.length,
    europe: countries.europe.countries.length,
    amerique: countries.amerique.countries.length
  };

  return (
    <div className="w-full">
      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedContinent(null)}
          className={`px-5 py-3 rounded-xl cursor-pointer transition-all ${
            selectedContinent === null
              ? 'bg-white text-slate-900 shadow-lg scale-105'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <div className="text-2xl font-bold">{stats.total}</div>
          <div className="text-xs">Tous les pays</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'afrique' ? null : 'afrique')}
          className={`px-5 py-3 rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'afrique'
              ? 'bg-green-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-green-400 hover:bg-white/20'
          }`}
        >
          <div className="text-2xl font-bold">{stats.afrique}</div>
          <div className="text-xs">Afrique</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'europe' ? null : 'europe')}
          className={`px-5 py-3 rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'europe'
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-blue-400 hover:bg-white/20'
          }`}
        >
          <div className="text-2xl font-bold">{stats.europe}</div>
          <div className="text-xs">Europe</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'amerique' ? null : 'amerique')}
          className={`px-5 py-3 rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'amerique'
              ? 'bg-red-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-red-400 hover:bg-white/20'
          }`}
        >
          <div className="text-2xl font-bold">{stats.amerique}</div>
          <div className="text-xs">Amérique</div>
        </button>
      </div>

      {/* Map Image */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src="/images/fond-carte.jpg"
          alt="Carte mondiale des participants"
          className="w-full h-auto object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent"></div>
      </div>

      {/* Country Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Afrique */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border transition-all ${
          selectedContinent === 'afrique' ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'afrique' ? 'opacity-40' : ''}`}>
          <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2 text-lg">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Afrique ({stats.afrique} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.afrique.countries.map((c, i) => (
              <span key={i} className="bg-green-900/30 text-green-300 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-green-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Europe */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border transition-all ${
          selectedContinent === 'europe' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'europe' ? 'opacity-40' : ''}`}>
          <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-lg">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            Europe ({stats.europe} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.europe.countries.map((c, i) => (
              <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-blue-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Amérique */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border transition-all ${
          selectedContinent === 'amerique' ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'amerique' ? 'opacity-40' : ''}`}>
          <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2 text-lg">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            Amérique ({stats.amerique} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.amerique.countries.map((c, i) => (
              <span key={i} className="bg-red-900/30 text-red-300 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-red-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
