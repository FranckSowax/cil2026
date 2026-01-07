'use client';

import { useState } from 'react';

const countries = {
  afrique: {
    name: "Afrique",
    color: "#22c55e",
    countries: [
      { name: "Gabon", x: 515, y: 365, flag: "🇬🇦" },
      { name: "Cameroun", x: 520, y: 340, flag: "🇨🇲" },
      { name: "Côte d'Ivoire", x: 470, y: 345, flag: "🇨🇮" },
      { name: "Sénégal", x: 435, y: 315, flag: "🇸🇳" },
      { name: "Burkina Faso", x: 475, y: 320, flag: "🇧🇫" },
      { name: "Bénin", x: 495, y: 335, flag: "🇧🇯" },
      { name: "Togo", x: 488, y: 338, flag: "🇹🇬" },
      { name: "Mali", x: 465, y: 305, flag: "🇲🇱" },
      { name: "Niger", x: 510, y: 310, flag: "🇳🇪" },
      { name: "RDC", x: 555, y: 375, flag: "🇨🇩" },
      { name: "Congo", x: 530, y: 370, flag: "🇨🇬" },
      { name: "Maroc", x: 455, y: 260, flag: "🇲🇦" },
      { name: "Tunisie", x: 510, y: 250, flag: "🇹🇳" },
    ]
  },
  europe: {
    name: "Europe",
    color: "#3b82f6",
    countries: [
      { name: "France", x: 490, y: 210, flag: "🇫🇷" },
      { name: "Belgique", x: 498, y: 195, flag: "🇧🇪" },
      { name: "Suisse", x: 508, y: 210, flag: "🇨🇭" },
      { name: "Allemagne", x: 515, y: 195, flag: "🇩🇪" },
    ]
  },
  amerique: {
    name: "Amérique",
    color: "#ef4444",
    countries: [
      { name: "Canada", x: 220, y: 170, flag: "🇨🇦" },
      { name: "États-Unis", x: 200, y: 240, flag: "🇺🇸" },
    ]
  }
};

const libreville = { x: 515, y: 365 };

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
    <div className="w-full">
      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setSelectedContinent(null)}
          className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
            selectedContinent === null
              ? 'bg-white text-slate-900 shadow-lg scale-105'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <div className="text-xl font-bold">{stats.total}</div>
          <div className="text-xs">Tous les pays</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'afrique' ? null : 'afrique')}
          className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
            selectedContinent === 'afrique'
              ? 'bg-green-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-green-400 hover:bg-white/20'
          }`}
        >
          <div className="text-xl font-bold">{stats.afrique}</div>
          <div className="text-xs">Afrique</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'europe' ? null : 'europe')}
          className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
            selectedContinent === 'europe'
              ? 'bg-blue-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-blue-400 hover:bg-white/20'
          }`}
        >
          <div className="text-xl font-bold">{stats.europe}</div>
          <div className="text-xs">Europe</div>
        </button>
        <button
          onClick={() => setSelectedContinent(selectedContinent === 'amerique' ? null : 'amerique')}
          className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
            selectedContinent === 'amerique'
              ? 'bg-red-500 text-white shadow-lg scale-105'
              : 'bg-white/10 text-red-400 hover:bg-white/20'
          }`}
        >
          <div className="text-xl font-bold">{stats.amerique}</div>
          <div className="text-xs">Amérique</div>
        </button>
      </div>

      {/* Map Container */}
      <div className="relative bg-slate-800/50 rounded-2xl p-2 backdrop-blur-sm border border-white/20 overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-full h-auto">
          <defs>
            <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1929" />
              <stop offset="100%" stopColor="#1a365d" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="continentShadow">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
            </filter>
            <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>

          {/* Ocean Background */}
          <rect width="1000" height="500" fill="url(#oceanGradient)" />
          <rect width="1000" height="500" fill="url(#gridPattern)" />

          {/* North America */}
          <path
            d="M120,50 L180,45 L220,55 L260,80 L290,70 L320,90 L340,120 L330,150 L310,180 L290,200 L260,220 L240,250 L230,280 L210,300 L180,310 L160,290 L140,260 L120,230 L100,200 L90,170 L80,140 L90,110 L100,80 Z
               M250,120 L280,110 L310,130 L320,160 L300,180 L270,170 L250,150 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* South America */}
          <path
            d="M220,320 L250,310 L280,320 L300,350 L310,390 L300,430 L280,460 L250,480 L220,470 L200,440 L190,400 L200,360 L210,340 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Europe */}
          <path
            d="M460,140 L480,130 L510,135 L540,130 L570,140 L590,160 L580,180 L560,195 L540,200 L520,210 L500,220 L480,215 L460,200 L450,180 L455,160 Z
               M570,150 L600,140 L620,160 L610,180 L580,175 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Africa */}
          <path
            d="M440,230 L470,220 L500,225 L530,230 L560,245 L580,270 L590,310 L585,350 L575,390 L555,420 L530,445 L500,455 L470,450 L445,430 L430,400 L420,360 L425,320 L430,280 L435,250 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Asia */}
          <path
            d="M580,100 L620,90 L680,95 L740,100 L800,120 L850,150 L880,190 L870,230 L840,260 L800,280 L750,290 L700,280 L660,260 L620,240 L590,220 L580,190 L575,150 Z
               M700,300 L750,310 L780,340 L770,370 L740,380 L710,360 L700,330 Z
               M820,280 L860,290 L880,320 L870,350 L840,340 L820,310 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Australia */}
          <path
            d="M780,380 L830,370 L870,385 L890,410 L880,440 L850,460 L810,455 L780,435 L770,410 Z
               M820,350 L840,345 L850,360 L835,370 L815,365 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Greenland */}
          <path
            d="M350,60 L380,50 L410,60 L420,90 L410,120 L380,130 L350,120 L340,90 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* UK/Ireland */}
          <path
            d="M455,170 L470,165 L475,180 L465,190 L450,185 Z"
            fill="#374151"
            filter="url(#continentShadow)"
            opacity="0.8"
          />

          {/* Connection lines from Libreville */}
          {filteredCountries.map((country, index) => (
            <g key={`line-${index}`}>
              <line
                x1={libreville.x}
                y1={libreville.y}
                x2={country.x}
                y2={country.y}
                stroke={country.color}
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1={libreville.x}
                y1={libreville.y}
                x2={country.x}
                y2={country.y}
                stroke={country.color}
                strokeWidth="0.5"
                strokeDasharray="8,4"
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="12"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
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
                r="15"
                fill="none"
                stroke={country.color}
                strokeWidth="2"
              >
                <animate
                  attributeName="r"
                  from="8"
                  to="20"
                  dur={`${1.5 + (index % 3) * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur={`${1.5 + (index % 3) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>

              {/* Second pulse ring */}
              <circle
                cx={country.x}
                cy={country.y}
                r="10"
                fill="none"
                stroke={country.color}
                strokeWidth="1.5"
              >
                <animate
                  attributeName="r"
                  from="5"
                  to="15"
                  dur={`${1.2 + (index % 4) * 0.2}s`}
                  begin="0.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur={`${1.2 + (index % 4) * 0.2}s`}
                  begin="0.4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Main dot */}
              <circle
                cx={country.x}
                cy={country.y}
                r="6"
                fill={country.color}
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  values="5;7;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Inner bright core */}
              <circle
                cx={country.x}
                cy={country.y}
                r="2.5"
                fill="white"
                opacity="0.9"
              />
            </g>
          ))}

          {/* Libreville marker - Special */}
          <g>
            <circle cx={libreville.x} cy={libreville.y} r="30" fill="#fbbf24" opacity="0.15">
              <animate
                attributeName="r"
                from="20"
                to="40"
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
            <circle cx={libreville.x} cy={libreville.y} r="20" fill="#fbbf24" opacity="0.1">
              <animate
                attributeName="r"
                from="15"
                to="30"
                dur="2s"
                begin="0.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.25"
                to="0"
                dur="2s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={libreville.x} cy={libreville.y} r="10" fill="#fbbf24" filter="url(#glow)">
              <animate
                attributeName="r"
                values="8;12;8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={libreville.x} cy={libreville.y} r="4" fill="white" />

            {/* Libreville label */}
            <text
              x={libreville.x}
              y={libreville.y + 35}
              textAnchor="middle"
              fill="#fbbf24"
              fontSize="12"
              fontWeight="bold"
            >
              LIBREVILLE
            </text>
          </g>
        </svg>

        {/* Hover tooltip */}
        {hoveredCountry && (
          <div
            className="absolute bg-slate-900/95 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-500 pointer-events-none z-20 backdrop-blur-sm"
            style={{
              left: `${(hoveredCountry.x / 1000) * 100}%`,
              top: `${(hoveredCountry.y / 500) * 100 - 5}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{hoveredCountry.flag}</span>
              <div>
                <div className="font-bold text-base">{hoveredCountry.name}</div>
                <div
                  className="text-xs font-medium"
                  style={{ color: hoveredCountry.color }}
                >
                  {hoveredCountry.continent}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-green-400">Afrique</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="text-blue-400">Europe</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-red-400">Amérique</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
          <span className="text-yellow-400">Libreville (Hôte)</span>
        </div>
      </div>

      {/* Country Lists */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Afrique */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all ${
          selectedContinent === 'afrique' ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-white/10'
        }`}>
          <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Afrique ({stats.afrique} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.afrique.countries.map((c, i) => (
              <span key={i} className="bg-green-900/30 text-green-300 px-2 py-1 rounded text-sm flex items-center gap-1 hover:bg-green-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Europe */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all ${
          selectedContinent === 'europe' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-white/10'
        }`}>
          <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            Europe ({stats.europe} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.europe.countries.map((c, i) => (
              <span key={i} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded text-sm flex items-center gap-1 hover:bg-blue-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Amérique */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all ${
          selectedContinent === 'amerique' ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-white/10'
        }`}>
          <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            Amérique ({stats.amerique} pays)
          </h3>
          <div className="flex flex-wrap gap-2">
            {countries.amerique.countries.map((c, i) => (
              <span key={i} className="bg-red-900/30 text-red-300 px-2 py-1 rounded text-sm flex items-center gap-1 hover:bg-red-800/50 transition-colors cursor-default">
                {c.flag} {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
