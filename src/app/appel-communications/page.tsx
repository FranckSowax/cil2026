import Link from 'next/link';
import { Download, FileText, Calendar, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

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
  { date: "03 Déc 2025 - 18 Jan 2026", event: "Soumission des intentions de communication" },
  { date: "19 - 30 Janvier 2026", event: "Évaluations et retours aux auteurs" },
  { date: "1er Février 2026", event: "Ouverture des inscriptions" },
  { date: "15 Mars 2026", event: "Clôture des inscriptions" },
  { date: "25-27 Mars 2026", event: "Présentation des communications au colloque" },
  { date: "31 Mai 2026", event: "Dépôt papier finalisé pour soumission à publication" },
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
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006400] to-[#004d00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Appel à Communications
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Soumettez vos travaux de recherche sur l&apos;Intelligence Artificielle 
              et les Dynamiques des Organisations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/soumettre" 
                className="inline-flex items-center px-6 py-3 bg-[#1E90FF] hover:bg-[#1a7de0] text-white font-bold rounded-lg transition-all"
              >
                Soumettre maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Téléchargements */}
      <section id="templates" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Documents à Télécharger</h2>
            <p className="text-gray-600">
              Téléchargez les documents nécessaires pour préparer votre soumission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Appel à communications PDF */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-red-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-[#006400] mb-2">
                    Appel à Communications
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Document officiel présentant le thème, les axes et les modalités de soumission
                  </p>
                  <a 
                    href="/documents/appel-communications-cil2026.pdf" 
                    download
                    className="inline-flex items-center text-[#006400] font-semibold hover:text-[#1E90FF] transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Template Word */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-[#006400] mb-2">
                    Template de Soumission
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Modèle Word à utiliser pour rédiger et formater votre communication
                  </p>
                  <a 
                    href="/documents/template-cil2026.docx" 
                    download
                    className="inline-flex items-center text-[#006400] font-semibold hover:text-[#1E90FF] transition-colors"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Types de Communications</h2>
            <p className="text-gray-600">
              Trois formats de soumission sont acceptés selon l&apos;avancement de vos travaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guidelines.map((guide, index) => (
              <div 
                key={guide.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#006400]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#006400] to-[#1E90FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#006400] mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  Format : {guide.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consignes de rédaction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Consignes de Rédaction</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#006400] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Police : <strong>Times New Roman, taille 12</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#006400] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Interligne : <strong>Simple</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#006400] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Marges : <strong>2,5 cm</strong> de chaque côté</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#006400] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Titre de niveau 1 : <strong>MAJUSCULES, Gras</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#006400] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">Envoi à : <strong>larsigist@yahoo.fr</strong></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">Page de Titre (Obligatoire)</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-4">La page de titre doit contenir :</p>
                <ol className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <span className="text-gray-600">Titre de la communication</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <span className="text-gray-600">Nom de l&apos;auteur (ou des auteurs)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <span className="text-gray-600">Institution de rattachement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                    <span className="text-gray-600">Adresse, email et téléphone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#006400] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                    <span className="text-gray-600"><strong>5 mots-clés</strong></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de soumission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Processus de Soumission</h2>
            <p className="text-gray-600">Suivez ces étapes simples pour soumettre votre communication</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {submissionProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#006400] to-[#1E90FF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-[#006400] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#006400]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates importantes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Dates Importantes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {importantDates.map((item, index) => (
              <div 
                key={item.date}
                className="flex items-center space-x-4 mb-4 last:mb-0"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#006400] to-[#1E90FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-grow bg-gray-50 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="font-bold text-[#006400]">{item.date}</span>
                    <span className="text-gray-600">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              <p className="text-yellow-800 text-sm">
                <strong>Important :</strong> Les soumissions reçues après la date limite ne seront pas prises en compte. 
                Assurez-vous de soumettre votre intention de communication avant le <strong>18 janvier 2026</strong>.
              </p>
            </div>
          </div>

          {/* Opportunités de publication */}
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-[#006400] mb-4 text-center">Opportunités de Publication</h3>
            <p className="text-gray-600 text-center mb-4">
              Les meilleurs articles seront proposés aux revues suivantes :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {publications.map((pub) => (
                <span key={pub} className="px-3 py-1 bg-[#006400]/10 text-[#006400] rounded-full text-sm">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#006400] to-[#004d00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à soumettre votre communication ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Utilisez notre formulaire en ligne pour soumettre votre travail de recherche
          </p>
          <Link 
            href="/soumettre" 
            className="inline-flex items-center px-8 py-4 bg-[#1E90FF] hover:bg-[#1a7de0] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Soumettre une communication
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
