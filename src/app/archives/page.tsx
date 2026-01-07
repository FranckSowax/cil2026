import { Calendar, MapPin, Users, FileText, ExternalLink } from "lucide-react";

// Historique des éditions du CIL
const editions = [
  {
    year: 2024,
    edition: "11ème",
    theme: "Économie numérique et transformation des organisations en Afrique",
    dates: "Mars 2024",
    lieu: "Libreville, Gabon",
    participants: "150+",
    communications: "80+",
  },
  {
    year: 2023,
    edition: "10ème",
    theme: "Développement durable et responsabilité sociétale des organisations",
    dates: "Mars 2023",
    lieu: "Libreville, Gabon",
    participants: "130+",
    communications: "70+",
  },
  {
    year: 2022,
    edition: "9ème",
    theme: "Innovation et entrepreneuriat en Afrique",
    dates: "Mars 2022",
    lieu: "En ligne (Covid-19)",
    participants: "100+",
    communications: "55+",
  },
  {
    year: 2021,
    edition: "8ème",
    theme: "Gestion de crise et résilience organisationnelle",
    dates: "Mars 2021",
    lieu: "En ligne (Covid-19)",
    participants: "90+",
    communications: "50+",
  },
  {
    year: 2019,
    edition: "7ème",
    theme: "Management et performance des organisations africaines",
    dates: "Mars 2019",
    lieu: "Libreville, Gabon",
    participants: "120+",
    communications: "65+",
  },
  {
    year: 2018,
    edition: "6ème",
    theme: "Gouvernance et développement des territoires",
    dates: "Mars 2018",
    lieu: "Libreville, Gabon",
    participants: "110+",
    communications: "60+",
  },
  {
    year: 2017,
    edition: "5ème",
    theme: "Ressources humaines et compétitivité des entreprises",
    dates: "Mars 2017",
    lieu: "Libreville, Gabon",
    participants: "100+",
    communications: "55+",
  },
  {
    year: 2016,
    edition: "4ème",
    theme: "Stratégies d'entreprises et développement économique",
    dates: "Mars 2016",
    lieu: "Libreville, Gabon",
    participants: "90+",
    communications: "50+",
  },
  {
    year: 2015,
    edition: "3ème",
    theme: "Finance et croissance économique en Afrique",
    dates: "Mars 2015",
    lieu: "Libreville, Gabon",
    participants: "85+",
    communications: "45+",
  },
  {
    year: 2014,
    edition: "2ème",
    theme: "Entrepreneuriat et développement local",
    dates: "Mars 2014",
    lieu: "Libreville, Gabon",
    participants: "70+",
    communications: "40+",
  },
  {
    year: 2013,
    edition: "1ère",
    theme: "Sciences de gestion et développement en Afrique",
    dates: "Mars 2013",
    lieu: "Libreville, Gabon",
    participants: "60+",
    communications: "35+",
  },
];

// Statistiques globales
const globalStats = [
  { value: "11", label: "Éditions réalisées" },
  { value: "1000+", label: "Participants cumulés" },
  { value: "600+", label: "Communications" },
  { value: "15+", label: "Pays représentés" },
];

export default function ArchivesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Image avec effet Parallax */}
        <div
          className="absolute inset-0 bg-parallax"
          style={{ backgroundImage: "url('/images/COVERSCILBACK.jpg')" }}
        ></div>
        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/75 via-[#0a1628]/65 to-[#0a1628]/80"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Archives du <span className="text-blue-200">CIL</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Découvrez l&apos;histoire du Colloque International de Libreville depuis sa création en 2013
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistiques globales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {globalStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg text-center hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#4169E1] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline des éditions */}
          <div className="space-y-6">
            {editions.map((edition, index) => (
              <div
                key={edition.year}
                className={`bg-white rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-xl ${
                  index === 0 
                    ? "border-[#4169E1] shadow-md ring-1 ring-[#4169E1]/20" 
                    : "border-gray-100 hover:border-[#4169E1]/30"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-[#4169E1] rounded-full text-sm font-bold">
                        {edition.edition} édition
                      </span>
                      <span className="text-[#D4AF37] font-bold text-lg">
                        {edition.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {edition.theme}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#4169E1]" />
                        {edition.dates}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#4169E1]" />
                        {edition.lieu}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 lg:gap-10 border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#4169E1]/10 rounded-full mb-2 mx-auto">
                        <Users className="w-5 h-5 text-[#4169E1]" />
                      </div>
                      <div className="text-gray-900 font-bold">{edition.participants}</div>
                      <div className="text-gray-500 text-xs font-medium">Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-[#4169E1]/10 rounded-full mb-2 mx-auto">
                        <FileText className="w-5 h-5 text-[#4169E1]" />
                      </div>
                      <div className="text-gray-900 font-bold">{edition.communications}</div>
                      <div className="text-gray-500 text-xs font-medium">Comms</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center">
            <p className="text-gray-600 text-sm">
              Pour accéder aux actes et publications des éditions précédentes, veuillez contacter :{" "}
              <a href="mailto:larsigist@yahoo.fr" className="text-[#4169E1] font-bold hover:underline">
                larsigist@yahoo.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
