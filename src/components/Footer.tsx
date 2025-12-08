'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send, Twitter, Linkedin, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Présentation', href: '/presentation' },
  { name: 'Programme', href: '/programme' },
  { name: 'Inscription', href: '/inscription' },
];

const importantLinks = [
  { name: 'Appel à Communications', href: '/appel-communications' },
  { name: 'Soumettre', href: '/soumettre' },
  { name: 'Comités', href: '/comites' },
  { name: 'Contact', href: '/infos-pratiques' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">CIL</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">CIL 2026</h3>
                <p className="text-xs text-[#B0B0B0]">Libreville, Gabon</p>
              </div>
            </div>
            <p className="text-[#B0B0B0] text-sm leading-relaxed mb-4">
              12ème Colloque International de Libreville sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations.
            </p>
            <div className="flex items-center space-x-2 text-[#00D9C5]">
              <span className="w-2 h-2 bg-[#00D9C5] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">23-27 Mars 2026</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[#B0B0B0] hover:text-[#00D9C5] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens importants */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Ressources</h4>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-[#B0B0B0] hover:text-[#00D9C5] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-[#B0B0B0] text-sm mb-4">
              Recevez les dernières actualités du colloque.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-l-full text-white text-sm focus:outline-none focus:border-[#00D9C5]"
              />
              <button className="px-4 py-3 bg-[#00D9C5] text-black rounded-r-full hover:brightness-110 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-[#B0B0B0] text-sm">
                <Mail className="w-4 h-4 text-[#00D9C5]" />
                <a href="mailto:larsigist@yahoo.fr" className="hover:text-[#00D9C5] transition-colors">
                  larsigist@yahoo.fr
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#B0B0B0] text-sm">
                <MapPin className="w-4 h-4 text-[#00D9C5]" />
                <span>Université Omar Bongo, Libreville</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#B0B0B0] hover:text-[#00D9C5] hover:border-[#00D9C5]/30 hover:rotate-6 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#B0B0B0] text-sm text-center md:text-left">
              <p>© 2026 CIL - Colloque International de Libreville</p>
              <p className="text-xs mt-1">12 CECT / 12 ECTS • Programme doctoral : 4 CECT / 4 ECTS</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/infos-pratiques" className="text-[#B0B0B0] hover:text-[#00D9C5] transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
