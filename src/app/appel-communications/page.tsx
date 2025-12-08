import Link from 'next/link';
import { Download, FileText, Calendar, CheckCircle, AlertCircle, ArrowRight, Send, BookOpen } from 'lucide-react';

const guidelines = [
  {
    title: "Résumé étendu",
    description: "1500 mots maximum, incluant problématique, méthodologie et résultats attendus",
    format: "PDF ou Word"
  },
  {
    title: "Papier court",
    description: "3000 mots, présentation complète de la recherche",
    format: "PDF ou Word"
  },
  {
    title: "Papier complet",
    description: "Article de recherche complet pour soumission à publication",
    format: "PDF ou Word"
  },
];

const submissionProcess = [
  {
    step: 1,
    title: "Téléchargez le template",
    description: "Utilisez notre modèle Word pour formater votre communication"
  },
  {
    step: 2,
    title: "Rédigez votre communication",
    description: "Suivez les consignes de rédaction et de mise en forme"
  },
  {
    step: 3,
    title: "Soumettez en ligne",
    description: "Utilisez notre formulaire de soumission sécurisé"
  },
  {
    step: 4,
    title: "Recevez confirmation",
    description: "Un email de confirmation vous sera envoyé automatiquement"
  },
];

const importantDates = [
  { date: "03 Déc 2025 - 18 Jan 2026", event: "Soumission des intentions de communication", active: true },
  { date: "19 - 30 Janvier 2026", event: "Évaluations et retours aux auteurs", active: false },
  { date: "1er Février 2026", event: "Ouverture des inscriptions", active: false },
  { date: "15 Mars 2026", event: "Clôture des inscriptions", active: false },
  { date: "25-27 Mars 2026", event: "Présentation des communications au colloque", active: false },
  { date: "31 Mai 2026", event: "Dépôt papier finalisé pour soumission à publication", active: false },
];

const publications = [
  "International Journal of Middle East Studies",
  "Revue Camerounaise de Gestion",
  "Revue de Gestion des Ressources Humaines",
  "Vie et Sciences de l'Entreprise (VSE)",
  "Global Action Research Review",
];

export default function AppelCommunicationsPage() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#B8B5FF]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-[#00D9C5]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <Send className="w-3 sm:w-4 h-3 sm:h-4 text-[#00D9C5] mr-2" />
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Soumissions ouvertes jusqu&apos;au 18 janvier 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Appel à <span className="text-[#00D9C5]">Communications</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Soumettez vos travaux de recherche sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link 
                href="/soumettre" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base"
                style={{ boxShadow: '0 0 30px rgba(0, 217, 197, 0.3)' }}
              >
                Soumettre maintenant
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <a 
                href="#templates" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-sm sm:text-base"
              >
                <Download className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                Télécharger les documents
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Téléchargements */}
      <section id="templates" className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Documents à Télécharger</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base">
              Téléchargez les documents nécessaires pour préparer votre soumission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* Appel à communications PDF */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 sm:w-7 h-5 sm:h-7 text-black" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Appel à Communications
                  </h3>
                  <p className="text-[#B0B0B0] text-xs sm:text-sm mb-3 sm:mb-4">
                    Document officiel présentant le thème, les axes et les modalités de soumission
                  </p>
                  <a 
                    href="/documents/appel-communications-cil2026.pdf" 
                    download
                    className="inline-flex items-center text-[#00D9C5] font-semibold hover:text-white transition-colors text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Template Word */}
            <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-[#B8B5FF] to-[#00D9C5] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 sm:w-7 h-5 sm:h-7 text-black" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Template de Soumission
                  </h3>
                  <p className="text-[#B0B0B0] text-xs sm:text-sm mb-3 sm:mb-4">
                    Modèle Word à utiliser pour rédiger et formater votre communication
                  </p>
                  <a 
                    href="/documents/template-cil2026.docx" 
                    download
                    className="inline-flex items-center text-[#00D9C5] font-semibold hover:text-white transition-colors text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger (Word)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de communications */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-cyan">Types de Communications</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base">
              Trois formats de soumission sont acceptés selon l&apos;avancement de vos travaux
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {guidelines.map((guide, index) => (
              <div 
                key={guide.title}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-black font-bold text-sm sm:text-base">{index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{guide.title}</h3>
                <p className="text-[#B0B0B0] text-sm mb-3 sm:mb-4">{guide.description}</p>
                <div className="flex items-center text-xs sm:text-sm text-[#B0B0B0]">
                  <FileText className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-[#00D9C5]" />
                  Format : {guide.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consignes de rédaction */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">Consignes de Rédaction</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#B0B0B0] text-sm sm:text-base">Police : <strong className="text-white">Times New Roman, taille 12</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#B0B0B0] text-sm sm:text-base">Interligne : <strong className="text-white">Simple</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#B0B0B0] text-sm sm:text-base">Marges : <strong className="text-white">2,5 cm</strong> de chaque côté</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#B0B0B0] text-sm sm:text-base">Titre de niveau 1 : <strong className="text-white">MAJUSCULES, Gras</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0 mt-0.5" />
                  <p className="text-[#B0B0B0] text-sm sm:text-base">Envoi à : <strong className="text-[#00D9C5]">larsigist@yahoo.fr</strong></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">Page de Titre (Obligatoire)</h2>
              <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <p className="text-[#B0B0B0] mb-3 sm:mb-4 text-sm sm:text-base">La page de titre doit contenir :</p>
                <ol className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0 font-bold">1</span>
                    <span className="text-[#B0B0B0] text-sm sm:text-base">Titre de la communication</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0 font-bold">2</span>
                    <span className="text-[#B0B0B0] text-sm sm:text-base">Nom de l&apos;auteur (ou des auteurs)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0 font-bold">3</span>
                    <span className="text-[#B0B0B0] text-sm sm:text-base">Institution de rattachement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0 font-bold">4</span>
                    <span className="text-[#B0B0B0] text-sm sm:text-base">Adresse, email et téléphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] text-black rounded-full flex items-center justify-center text-xs sm:text-sm flex-shrink-0 font-bold">5</span>
                    <span className="text-[#B0B0B0] text-sm sm:text-base"><strong className="text-white">5 mots-clés</strong></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de soumission */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Processus de Soumission</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base">Suivez ces étapes simples pour soumettre votre communication</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {submissionProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 text-center h-full hover:border-[#00D9C5]/30 transition-all">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-black font-bold text-sm sm:text-base">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-[#B0B0B0] text-xs sm:text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates importantes */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-cyan">Dates Importantes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {importantDates.map((item) => (
              <div 
                key={item.date}
                className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 last:mb-0"
              >
                <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.active 
                    ? 'bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF]' 
                    : 'bg-white/10'
                }`}>
                  <Calendar className={`w-5 sm:w-6 h-5 sm:h-6 ${item.active ? 'text-black' : 'text-[#B0B0B0]'}`} />
                </div>
                <div className={`flex-grow rounded-xl sm:rounded-2xl p-3 sm:p-4 border ${
                  item.active 
                    ? 'bg-[#00D9C5]/10 border-[#00D9C5]/30' 
                    : 'bg-[#1A1A1A] border-white/10'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className={`font-bold text-sm sm:text-base ${item.active ? 'text-[#00D9C5]' : 'text-white'}`}>{item.date}</span>
                    <span className="text-[#B0B0B0] text-xs sm:text-sm">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-[#00D9C5]/10 border border-[#00D9C5]/30 rounded-xl sm:rounded-2xl max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D9C5] flex-shrink-0" />
              <p className="text-[#B0B0B0] text-xs sm:text-sm">
                <strong className="text-white">Important :</strong> Les soumissions reçues après la date limite ne seront pas prises en compte. 
                Assurez-vous de soumettre votre intention de communication avant le <strong className="text-[#00D9C5]">18 janvier 2026</strong>.
              </p>
            </div>
          </div>

          {/* Opportunités de publication */}
          <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 text-center">Opportunités de Publication</h3>
            <p className="text-[#B0B0B0] text-center mb-3 sm:mb-4 text-sm sm:text-base">
              Les meilleurs articles seront proposés aux revues suivantes :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {publications.map((pub) => (
                <span key={pub} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[#B0B0B0] rounded-full text-xs sm:text-sm hover:border-[#00D9C5]/30 hover:text-[#00D9C5] transition-all">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00D9C5]/10 rounded-full filter blur-[100px] sm:blur-[150px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Prêt à soumettre votre communication ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#B0B0B0] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Utilisez notre formulaire en ligne pour soumettre votre travail de recherche
          </p>
          <Link 
            href="/soumettre" 
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all text-sm sm:text-base md:text-lg"
            style={{ boxShadow: '0 0 40px rgba(0, 217, 197, 0.4)' }}
          >
            Soumettre une communication
            <ArrowRight className="ml-2 sm:ml-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
