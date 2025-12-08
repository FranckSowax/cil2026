'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Présentation', href: '/presentation' },
  { name: 'Programme', href: '/programme' },
  { name: 'Inscription', href: '/inscription' },
  { name: 'Comités', href: '/comites' },
  { name: 'Contact', href: '/infos-pratiques' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-bold text-xs sm:text-sm">CIL</span>
            </div>
            <div className="hidden xs:block sm:block">
              <span className="font-bold text-white text-sm sm:text-lg">CIL 2026</span>
              <span className="hidden sm:block text-xs text-[#B0B0B0]">Libreville • 23-27 Mars</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[#B0B0B0] hover:text-[#00D9C5] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#00D9C5] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/appel-communications" 
              className="px-5 py-2.5 text-sm font-medium text-[#00D9C5] border border-[#00D9C5]/30 rounded-full hover:bg-[#00D9C5]/10 transition-all"
            >
              Appel à papiers
            </Link>
            <Link 
              href="/inscription" 
              className="px-5 py-2.5 text-sm font-semibold text-black bg-[#00D9C5] rounded-full hover:scale-105 transition-all"
              style={{ boxShadow: '0 0 20px rgba(0, 217, 197, 0.3)' }}
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-lg absolute left-0 right-0 top-full">
            <div className="flex flex-col space-y-0.5 sm:space-y-1 px-3 sm:px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#B0B0B0] hover:text-[#00D9C5] hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/appel-communications"
                  className="py-2.5 sm:py-3 text-center text-sm sm:text-base text-[#00D9C5] border border-[#00D9C5]/30 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Appel à papiers
                </Link>
                <Link
                  href="/inscription"
                  className="py-2.5 sm:py-3 text-center text-sm sm:text-base text-black bg-[#00D9C5] rounded-full font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
