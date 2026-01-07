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
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-[#4169E1] mb-8 uppercase tracking-wider">
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
              className="flex-shrink-0 w-32 h-20 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center p-4 hover:border-[#4169E1]/30 transition-all"
            >
              {/* Placeholder pour les logos - à remplacer par de vraies images */}
              <div className="text-center">
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#4169E1] to-[#B8B5FF] rounded-lg flex items-center justify-center mb-1">
                  <span className="text-white text-[10px] font-bold">
                    {partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 line-clamp-1 font-medium">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
