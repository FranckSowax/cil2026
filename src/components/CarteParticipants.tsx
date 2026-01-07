'use client';

import { useState } from 'react';

const countries = {
  afrique: {
    name: "Afrique",
    color: "#22c55e",
    countries: [
      { name: "Gabon", x: 47, y: 33, flag: "🇬🇦" },
      { name: "Cameroun", x: 48, y: 31, flag: "🇨🇲" },
      { name: "Côte d'Ivoire", x: 42, y: 31, flag: "🇨🇮" },
      { name: "Sénégal", x: 39, y: 28, flag: "🇸🇳" },
      { name: "Burkina Faso", x: 43.5, y: 28, flag: "🇧🇫" },
      { name: "Bénin", x: 45.5, y: 30, flag: "🇧🇯" },
      { name: "Togo", x: 44.5, y: 30.5, flag: "🇹🇬" },
      { name: "Mali", x: 41.5, y: 26, flag: "🇲🇱" },
      { name: "Niger", x: 46, y: 27, flag: "🇳🇪" },
      { name: "RDC", x: 51, y: 35, flag: "🇨🇩" },
      { name: "Congo", x: 49, y: 34, flag: "🇨🇬" },
      { name: "Maroc", x: 41, y: 22, flag: "🇲🇦" },
      { name: "Tunisie", x: 46, y: 21, flag: "🇹🇳" },
    ]
  },
  europe: {
    name: "Europe",
    color: "#3b82f6",
    countries: [
      { name: "France", x: 45, y: 17, flag: "🇫🇷" },
      { name: "Belgique", x: 46, y: 15, flag: "🇧🇪" },
      { name: "Suisse", x: 47, y: 17, flag: "🇨🇭" },
      { name: "Allemagne", x: 48, y: 15, flag: "🇩🇪" },
    ]
  },
  amerique: {
    name: "Amérique",
    color: "#ef4444",
    countries: [
      { name: "Canada", x: 18, y: 18, flag: "🇨🇦" },
      { name: "États-Unis", x: 16, y: 22, flag: "🇺🇸" },
    ]
  }
};

// Position de Libreville (Gabon)
const libreville = { x: 47, y: 33 };

type ContinentKey = 'afrique' | 'europe' | 'amerique';

interface Country {
  name: string;
  x: number;
  y: number;
  flag: string;
  continent?: string;
  color?: string;
}

export default function CarteParticipants() {
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);

  const allCountries: Country[] = Object.values(countries).flatMap(c =>
    c.countries.map(country => ({ ...country, continent: c.name, color: c.color }))
  );

  const filteredCountries = selectedContinent
    ? allCountries.filter(c => c.continent === countries[selectedContinent]?.name)
    : allCountries;

  const stats = {
    total: allCountries.length,
    afrique: countries.afrique.countries.length,
    europe: countries.europe.countries.length,
    amerique: countries.amerique.countries.length
  };

  return (
    <div className="w-full px-2 sm:px-0">
      {/* Stats Cards - Ultra Responsive */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
        <button
          onClick={() => setSelectedContinent(null)}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
            selectedContinent === null
              ? 'bg-white text-slate-900 shadow-lg scale-105'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold">{stats.total}</div>
          <div className="text-[10px] sm:text-xs">Tous les pays</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'afrique' ? null : 'afrique')}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'afrique'
              ? 'bg-green-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-green-400 hover:bg-white/20'
          }`}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold">{stats.afrique}</div>
          <div className="text-[10px] sm:text-xs">Afrique</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'europe' ? null : 'europe')}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'europe'
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-blue-400 hover:bg-white/20'
          }`}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold">{stats.europe}</div>
          <div className="text-[10px] sm:text-xs">Europe</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'amerique' ? null : 'amerique')}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg sm:rounded-xl cursor-pointer transition-all ${
            selectedContinent === 'amerique'
              ? 'bg-red-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-red-400 hover:bg-white/20'
          }`}
        >
          <div className="text-lg sm:text-xl md:text-2xl font-bold">{stats.amerique}</div>
          <div className="text-[10px] sm:text-xs">Amérique</div>
        </button>
      </div>

      {/* Map with Background Image and SVG Overlay - Ultra Responsive */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8 shadow-lg">
        {/* Background Image */}
        <img
          src="/images/fond-carte.jpg"
          alt="Carte mondiale"
          className="w-full h-auto object-cover min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
        />

        {/* SVG Overlay for animated points and lines */}
        <svg
          viewBox="0 0 100 53"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection lines from Libreville */}
          {filteredCountries.map((country, index) => (
            country.name !== "Gabon" && (
              <g key={`line-${index}`}>
                <line
                  x1={libreville.x}
                  y1={libreville.y}
                  x2={country.x}
                  y2={country.y}
                  stroke={country.color}
                  strokeWidth="0.15"
                  opacity="0.4"
                />
                <line
                  x1={libreville.x}
                  y1={libreville.y}
                  x2={country.x}
                  y2={country.y}
                  stroke={country.color}
                  strokeWidth="0.1"
                  strokeDasharray="1,0.5"
                  opacity="0.7"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="1.5"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>
            )
          ))}

          {/* Country markers */}
          {filteredCountries.map((country, index) => (
            <g
              key={index}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer pulse ring */}
              <circle
                cx={country.x}
                cy={country.y}
                r="2"
                fill="none"
                stroke={country.color}
                strokeWidth="0.3"
              >
                <animate
                  attributeName="r"
                  from="1"
                  to="3"
                  dur={`${1.5 + (index % 3) * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.8"
                  to="0"
                  dur={`${1.5 + (index % 3) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Main dot */}
              <circle
                cx={country.x}
                cy={country.y}
                r={country.name === "Gabon" ? "1.2" : "0.8"}
                fill={country.name === "Gabon" ? "#fbbf24" : country.color}
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  values={country.name === "Gabon" ? "1;1.5;1" : "0.6;1;0.6"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Inner bright core */}
              <circle
                cx={country.x}
                cy={country.y}
                r="0.3"
                fill="white"
                opacity="0.9"
              />
            </g>
          ))}

          {/* Libreville special marker */}
          <g>
            <circle cx={libreville.x} cy={libreville.y} r="4" fill="#fbbf24" opacity="0.15">
              <animate
                attributeName="r"
                from="2"
                to="5"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.3"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>

        {/* Hover tooltip - Ultra Responsive */}
        {hoveredCountry && (
          <div
            className="absolute bg-slate-900/95 text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-md sm:rounded-lg shadow-xl border border-white/20 pointer-events-none z-20 backdrop-blur-sm text-xs sm:text-sm"
            style={{
              left: `${Math.min(Math.max(hoveredCountry.x, 15), 85)}%`,
              top: `${hoveredCountry.y - 6}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-xl">{hoveredCountry.flag}</span>
              <div>
                <div className="font-bold text-xs sm:text-sm">{hoveredCountry.name}</div>
                <div
                  className="text-[10px] sm:text-xs"
                  style={{ color: hoveredCountry.color }}
                >
                  {hoveredCountry.continent}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Legend overlay - Ultra Responsive */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 flex flex-wrap gap-1 sm:gap-2 md:gap-3 text-[8px] sm:text-[10px] md:text-xs">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400">Afrique</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-blue-400">Europe</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-400">Amérique</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-400">Libreville</span>
          </div>
        </div>
      </div>

      {/* Country Lists - Ultra Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {/* Afrique */}
        <div className={`bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border transition-all ${
          selectedContinent === 'afrique' ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'afrique' ? 'opacity-40' : ''}`}>
          <h3 className="text-green-400 font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></span>
            Afrique ({stats.afrique} pays)
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {countries.afrique.countries.map((c, i) => (
              <span key={i} className="bg-green-900/30 text-green-300 px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 hover:bg-green-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Europe */}
        <div className={`bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border transition-all ${
          selectedContinent === 'europe' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'europe' ? 'opacity-40' : ''}`}>
          <h3 className="text-blue-400 font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></span>
            Europe ({stats.europe} pays)
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {countries.europe.countries.map((c, i) => (
              <span key={i} className="bg-blue-900/30 text-blue-300 px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 hover:bg-blue-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Amérique */}
        <div className={`bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border transition-all sm:col-span-2 lg:col-span-1 ${
          selectedContinent === 'amerique' ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-white/20'
        } ${selectedContinent && selectedContinent !== 'amerique' ? 'opacity-40' : ''}`}>
          <h3 className="text-red-400 font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></span>
            Amérique ({stats.amerique} pays)
          </h3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {countries.amerique.countries.map((c, i) => (
              <span key={i} className="bg-red-900/30 text-red-300 px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-sm flex items-center gap-1 sm:gap-1.5 hover:bg-red-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
