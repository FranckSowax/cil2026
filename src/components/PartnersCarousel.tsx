'use client';

import { useEffect, useRef } from 'react';

const partners = [
  { name: 'LARSIG', logo: '/partners/larsig.png', type: 'organisateur' },
  { name: 'EXCELIA', logo: '/partners/excelia.png', type: 'partenaire' },
  { name: 'Université de Pau et des Pays de l\'Adour', logo: '/partners/uppa.png', type: 'partenaire' },
  { name: 'NIL Business School', logo: '/partners/nil.png', type: 'partenaire' },
  { name: 'AGRH', logo: '/partners/agrh.png', type: 'soutien' },
  { name: 'Vie & Sciences de l\'Entreprise', logo: '/partners/vse.png', type: 'soutien' },
  { name: 'Revue Camerounaise de Gestion', logo: '/partners/rcg.png', type: 'soutien' },
  { name: 'IJEMS', logo: '/partners/ijems.png', type: 'soutien' },
  { name: 'CORHIS', logo: '/partners/corhis.png', type: 'soutien' },
];

export default function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
          Nos Partenaires
        </h3>
        
        <div 
          ref={scrollRef}
          className="flex overflow-hidden space-x-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double les partenaires pour un défilement infini */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow"
            >
              {/* Placeholder pour les logos - à remplacer par de vraies images */}
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#006400] to-[#1E90FF] rounded-full flex items-center justify-center mb-1">
                  <span className="text-white text-xs font-bold">
                    {partner.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                  </span>
                </div>
                <span className="text-xs text-gray-500 line-clamp-1">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
