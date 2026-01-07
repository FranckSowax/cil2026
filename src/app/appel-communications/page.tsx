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
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#1e3a8a]"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-white/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-white/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <Send className="w-3 sm:w-4 h-3 sm:h-4 text-white mr-2" />
              <span className="text-xs sm:text-sm text-white font-medium">Soumissions ouvertes jusqu&apos;au 18 janvier 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Appel à <span className="text-blue-200">Communications</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto mb-8 px-2 font-light">
              Soumettez vos travaux de recherche sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link 
                href="/soumettre" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4169E1] font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Soumettre maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="#templates" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                <Download className="mr-2 w-5 h-5" />
                Télécharger les documents
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Téléchargements */}
      <section id="templates" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Documents à Télécharger</h2>
            <p className="text-gray-600 text-lg">
              Téléchargez les documents nécessaires pour préparer votre soumission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Appel à communications PDF */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-lg transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-[#4169E1]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Appel à Communications
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Document officiel présentant le thème, les axes et les modalités de soumission
                  </p>
                  <a 
                    href="/documents/appel-communications-cil2026.pdf" 
                    download
                    className="inline-flex items-center text-[#4169E1] font-semibold hover:text-[#3154b3] transition-colors text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Template Word */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-lg transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 text-[#4169E1]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Template de Soumission
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Modèle Word à utiliser pour rédiger et formater votre communication
                  </p>
                  <a 
                    href="/documents/template-cil2026.docx" 
                    download
                    className="inline-flex items-center text-[#4169E1] font-semibold hover:text-[#3154b3] transition-colors text-sm"
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Types de Communications</h2>
            <p className="text-gray-600 text-lg">
              Trois formats de soumission sont acceptés selon l&apos;avancement de vos travaux
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guide, index) => (
              <div 
                key={guide.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-[#4169E1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-[#4169E1]">
                  <span className="text-[#4169E1] group-hover:text-white font-bold text-lg transition-colors">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center text-sm text-gray-500 font-medium bg-gray-50 p-2 rounded-lg inline-block">
                  <FileText className="w-4 h-4 mr-2 text-[#4169E1]" />
                  Format : {guide.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consignes de rédaction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Consignes de Rédaction</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Police : <strong className="text-gray-900">Times New Roman, taille 12</strong></p>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Interligne : <strong className="text-gray-900">Simple</strong></p>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Marges : <strong className="text-gray-900">2,5 cm</strong> de chaque côté</p>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Titre de niveau 1 : <strong className="text-gray-900">MAJUSCULES, Gras</strong></p>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Envoi à : <strong className="text-[#4169E1]">larsigist@yahoo.fr</strong></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Page de Titre (Obligatoire)</h2>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <p className="text-gray-600 mb-6 font-medium">La page de titre doit contenir :</p>
                <ol className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <span className="w-6 h-6 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">1</span>
                    <span className="text-gray-700">Titre de la communication</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="w-6 h-6 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">2</span>
                    <span className="text-gray-700">Nom de l&apos;auteur (ou des auteurs)</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="w-6 h-6 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">3</span>
                    <span className="text-gray-700">Institution de rattachement</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="w-6 h-6 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">4</span>
                    <span className="text-gray-700">Adresse, email et téléphone</span>
                  </li>
                  <li className="flex items-start space-x-4">
                    <span className="w-6 h-6 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">5</span>
                    <span className="text-gray-700"><strong className="text-gray-900">5 mots-clés</strong></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de soumission */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Processus de Soumission</h2>
            <p className="text-gray-600 text-lg">Suivez ces étapes simples pour soumettre votre communication</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {submissionProcess.map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center h-full hover:shadow-xl hover:border-[#4169E1]/30 transition-all">
                  <div className="w-12 h-12 bg-blue-50 text-[#4169E1] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:bg-[#4169E1] group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates importantes */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Dates Importantes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {importantDates.map((item) => (
              <div 
                key={item.date}
                className="flex items-center space-x-4 mb-4 last:mb-0 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                  item.active 
                    ? 'bg-[#4169E1] text-white' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <Calendar className="w-6 h-6" />
                </div>
                <div className={`flex-grow rounded-2xl p-5 border transition-all ${
                  item.active 
                    ? 'bg-blue-50 border-blue-100 shadow-md transform scale-[1.02]' 
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className={`font-bold text-lg ${item.active ? 'text-[#4169E1]' : 'text-gray-900'}`}>{item.date}</span>
                    <span className="text-gray-600 font-medium">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl max-w-3xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-[#4169E1] flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-gray-900">Important :</strong> Les soumissions reçues après la date limite ne seront pas prises en compte. 
                Assurez-vous de soumettre votre intention de communication avant le <strong className="text-[#4169E1]">18 janvier 2026</strong>.
              </p>
            </div>
          </div>

          {/* Opportunités de publication */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Opportunités de Publication</h3>
            <p className="text-gray-600 text-center mb-8">
              Les meilleurs articles seront proposés aux revues suivantes :
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {publications.map((pub) => (
                <span key={pub} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm hover:border-[#4169E1] hover:text-[#4169E1] transition-all cursor-default">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden bg-[#4169E1]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-[150px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
            Prêt à soumettre votre communication ?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Utilisez notre formulaire en ligne pour soumettre votre travail de recherche
          </p>
          <Link 
            href="/soumettre" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#4169E1] font-bold rounded-full hover:scale-105 transition-all text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Soumettre une communication
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
