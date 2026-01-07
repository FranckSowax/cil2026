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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Image avec effet Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/COVERSCILBACK.jpg')" }}
        ></div>
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/75 via-[#0a1628]/65 to-[#0a1628]/80"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white font-medium">Contact & Infos</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Informations <span className="text-blue-200">Pratiques</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Tout ce que vous devez savoir pour préparer votre venue au CIL 2026
            </p>
          </div>
        </div>
      </section>

      {/* Lieu du colloque */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Lieu du Colloque</h2>
            <p className="text-gray-600 text-lg">Université Omar Bongo, Libreville, Gabon</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Carte Google Maps */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] border border-gray-200 shadow-lg">
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
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:border-[#4169E1]/30 transition-all">
                <h3 className="font-bold text-xl text-[#4169E1] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Adresse
                </h3>
                <div className="pl-7">
                  <p className="text-gray-900 font-semibold text-lg">Université Omar Bongo</p>
                  <p className="text-gray-600">Boulevard Léon Mba</p>
                  <p className="text-gray-600">BP 13131, Libreville</p>
                  <p className="text-gray-600">Gabon</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:border-[#4169E1]/30 transition-all">
                <h3 className="font-bold text-xl text-[#4169E1] mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> Contact
                </h3>
                <div className="space-y-4 pl-7">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a href="mailto:larsigist@yahoo.fr" className="text-gray-700 hover:text-[#4169E1] transition-colors font-medium">
                      larsigist@yahoo.fr
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">+241 XX XX XX XX</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#4169E1] text-white rounded-3xl p-8 shadow-xl">
                <h3 className="font-bold text-xl mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" /> Dates du Colloque
                </h3>
                <p className="text-white/90 text-lg font-medium mb-4">23 - 27 Mars 2026</p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span> 23-24 Mars : Ateliers pré-colloque</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span> 25-27 Mars : Colloque principal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Préparer Votre Voyage</h2>
            <p className="text-gray-600 text-lg">Conseils utiles pour votre séjour à Libreville</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {practicalInfo.map((info) => (
              <div key={info.title} className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-xl transition-all group">
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4169E1] transition-colors">
                    <info.icon className="w-7 h-7 text-[#4169E1] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{info.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hébergement */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hébergement</h2>
            <p className="text-gray-600 text-lg">Hôtels recommandés à proximité du lieu du colloque</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37]">★</span>
                  ))}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#4169E1] transition-colors">{hotel.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {hotel.distance}
                  </p>
                  <p className="font-semibold text-[#4169E1] flex items-center">
                    <Hotel className="w-4 h-4 mr-2" />
                    {hotel.price}
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    {hotel.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 italic">
            Des tarifs préférentiels peuvent être négociés pour les participants du colloque. 
            Contactez-nous pour plus d&apos;informations.
          </p>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nous Contacter</h2>
            <p className="text-gray-600 text-lg">Une question ? N&apos;hésitez pas à nous écrire</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message envoyé !</h3>
              <p className="text-gray-600 text-lg">
                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none appearance-none"
                  >
                    <option value="">-- Sélectionnez un sujet --</option>
                    <option value="inscription">Question sur l&apos;inscription</option>
                    <option value="soumission">Question sur la soumission</option>
                    <option value="hebergement">Hébergement</option>
                    <option value="visa">Lettre d&apos;invitation / Visa</option>
                    <option value="autre">Autre</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#4169E1]/20 focus:border-[#4169E1] transition-all outline-none resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center text-lg ${
                  isSubmitting 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-[#4169E1] hover:bg-[#3154b3] shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
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
