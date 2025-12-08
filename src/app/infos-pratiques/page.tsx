'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Plane, Hotel, Car, Clock, Globe, Send, CheckCircle } from 'lucide-react';

const hotels = [
  {
    name: "Radisson Blu Okoumé Palace",
    stars: 5,
    distance: "5 km du campus",
    price: "À partir de 150 000 FCFA/nuit",
    phone: "+241 01 79 31 00"
  },
  {
    name: "Hôtel Boulevard",
    stars: 4,
    distance: "3 km du campus",
    price: "À partir de 80 000 FCFA/nuit",
    phone: "+241 01 76 20 00"
  },
  {
    name: "Hôtel Hibiscus",
    stars: 3,
    distance: "2 km du campus",
    price: "À partir de 45 000 FCFA/nuit",
    phone: "+241 01 72 15 00"
  },
  {
    name: "Résidence Hôtelière Le Nomad",
    stars: 3,
    distance: "4 km du campus",
    price: "À partir de 35 000 FCFA/nuit",
    phone: "+241 01 44 55 66"
  },
];

const practicalInfo = [
  {
    icon: Plane,
    title: "Accès Aérien",
    content: "L'aéroport international Léon Mba de Libreville est desservi par plusieurs compagnies aériennes internationales (Air France, Ethiopian Airlines, Royal Air Maroc, etc.). Des navettes et taxis sont disponibles à l'aéroport."
  },
  {
    icon: Clock,
    title: "Fuseau Horaire",
    content: "Libreville est sur le fuseau horaire UTC+1 (West Africa Time). Pas de changement d'heure été/hiver."
  },
  {
    icon: Globe,
    title: "Visa",
    content: "Les ressortissants de nombreux pays ont besoin d'un visa pour entrer au Gabon. Nous vous recommandons de vérifier les exigences auprès de l'ambassade du Gabon de votre pays. Des lettres d'invitation peuvent être fournies sur demande."
  },
  {
    icon: Car,
    title: "Transport Local",
    content: "Des taxis sont disponibles dans toute la ville. Nous organiserons des navettes entre les hôtels partenaires et le lieu du colloque."
  },
];

export default function InfosPratiquesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#00D9C5]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Contact & Infos</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Informations <span className="text-[#00D9C5]">Pratiques</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto px-2">
              Tout ce que vous devez savoir pour préparer votre venue au CIL 2026
            </p>
          </div>
        </div>
      </section>

      {/* Lieu du colloque */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Lieu du Colloque</h2>
            <p className="text-[#B0B0B0]">Université Omar Bongo, Libreville, Gabon</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Carte Google Maps */}
            <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden h-[400px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.815089744!2d9.4544!3d0.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8a5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sUniversit%C3%A9%20Omar%20Bongo!5e0!3m2!1sfr!2sga!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Université Omar Bongo"
              ></iframe>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/10">
                <h3 className="font-bold text-lg text-[#00D9C5] mb-4">Adresse</h3>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#00D9C5] flex-shrink-0" />
                  <div>
                    <p className="text-white">Université Omar Bongo</p>
                    <p className="text-[#B0B0B0]">Boulevard Léon Mba</p>
                    <p className="text-[#B0B0B0]">BP 13131, Libreville</p>
                    <p className="text-[#B0B0B0]">Gabon</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/10">
                <h3 className="font-bold text-lg text-[#00D9C5] mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#00D9C5]" />
                    <a href="mailto:larsigist@yahoo.fr" className="text-white hover:text-[#00D9C5] transition-colors">
                      larsigist@yahoo.fr
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#00D9C5]" />
                    <span className="text-white">+241 XX XX XX XX</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-3xl p-6">
                <h3 className="font-bold text-lg mb-2">Dates du Colloque</h3>
                <p className="text-black/80">23 - 27 Mars 2026</p>
                <ul className="mt-3 space-y-1 text-sm text-black/70">
                  <li>• 23-24 Mars : Ateliers pré-colloque</li>
                  <li>• 25-27 Mars : Colloque principal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-cyan">Préparer Votre Voyage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practicalInfo.map((info) => (
              <div key={info.title} className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-[#B0B0B0] text-sm">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hébergement */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Hébergement</h2>
            <p className="text-[#B0B0B0]">Hôtels recommandés à proximité du lieu du colloque</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <span key={i} className="text-[#00D9C5]">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-white mb-2">{hotel.name}</h3>
                <div className="space-y-1 text-sm text-[#B0B0B0]">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-[#B0B0B0]" />
                    {hotel.distance}
                  </p>
                  <p className="font-medium text-[#00D9C5]">{hotel.price}</p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-1 text-[#B0B0B0]" />
                    {hotel.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#B0B0B0] text-sm mt-8">
            Des tarifs préférentiels peuvent être négociés pour les participants du colloque. 
            Contactez-nous pour plus d&apos;informations.
          </p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-cyan">Nous Contacter</h2>
            <p className="text-[#B0B0B0]">Une question ? N&apos;hésitez pas à nous écrire</p>
          </div>

          {submitted ? (
            <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-[#00D9C5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#00D9C5]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
              <p className="text-[#B0B0B0]">
                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Nom complet <span className="text-[#00D9C5]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D9C5] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email <span className="text-[#00D9C5]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D9C5] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-white mb-2">
                  Sujet <span className="text-[#00D9C5]">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D9C5] transition-colors"
                >
                  <option value="" className="bg-[#1A1A1A]">-- Sélectionnez un sujet --</option>
                  <option value="inscription" className="bg-[#1A1A1A]">Question sur l&apos;inscription</option>
                  <option value="soumission" className="bg-[#1A1A1A]">Question sur la soumission</option>
                  <option value="hebergement" className="bg-[#1A1A1A]">Hébergement</option>
                  <option value="visa" className="bg-[#1A1A1A]">Lettre d&apos;invitation / Visa</option>
                  <option value="autre" className="bg-[#1A1A1A]">Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Message <span className="text-[#00D9C5]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D9C5] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center ${
                  isSubmitting ? 'bg-white/20 text-white/50' : 'bg-[#00D9C5] text-black hover:scale-105'
                }`}
                style={!isSubmitting ? { boxShadow: '0 0 30px rgba(0, 217, 197, 0.3)' } : {}}
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
