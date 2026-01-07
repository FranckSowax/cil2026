import { Globe, Target, Users, Lightbulb, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

const thematicAxes = [
  {
    number: 1,
    title: "Gouvernance, institutions, régulation et souveraineté numérique",
    description: "Comment les États africains peuvent-ils développer des stratégies de gouvernance algorithmique adaptées à leurs réalités ? Quels cadres de régulation pour une IA éthique et transparente ?",
    topics: [
      "Gouvernance algorithmique et transformation des pratiques administratives",
      "Souveraineté numérique et stratégies nationales d'adoption de l'IA",
      "Transparence, reddition des comptes et éthique des systèmes algorithmiques",
      "Justice algorithmique, données personnelles et droits fondamentaux",
      "IA, droit coutumier et savoirs autochtones",
      "Collectivités territoriales et gouvernance numérique"
    ]
  },
  {
    number: 2,
    title: "Management, travail, performance économique et transformation organisationnelle",
    description: "Comment l'IA transforme-t-elle les pratiques managériales et les dynamiques de travail ? Quelles stratégies digitales pour les entreprises africaines ?",
    topics: [
      "Automatisation, mutation des emplois et nouvelles compétences",
      "Leadership algorithmique et transformation managériale",
      "Stratégies digitales des entreprises africaines",
      "Fintechs, inclusion financière et IA",
      "Comptabilité intelligente, audit prédictif et traçabilité",
      "IA et éthique des affaires"
    ]
  },
  {
    number: 3,
    title: "Agriculture, ressources naturelles, santé et durabilité environnementale",
    description: "Comment l'IA peut-elle contribuer à la sécurité alimentaire, à la santé et à la transition écologique en Afrique ?",
    topics: [
      "Agriculture de précision, sécurité alimentaire et résilience",
      "IA et gestion durable des forêts, ressources halieutiques et systèmes miniers",
      "IA et modélisation des risques climatiques",
      "IA en santé : diagnostic, télémédecine et performance hospitalière",
      "IA et pharmacopée africaine",
      "RSE, IA et transition écologique"
    ]
  },
  {
    number: 4,
    title: "Sociétés, cultures, éducation, identités et dynamiques sociales",
    description: "Comment l'IA impacte-t-elle l'éducation, les industries culturelles et les dynamiques sociales en Afrique ? Quels modèles pour une appropriation souveraine ?",
    topics: [
      "Enseignement supérieur intelligent et pédagogies augmentées",
      "IA, patrimoines, industries culturelles et créativité",
      "Genre, inclusion numérique et discriminations algorithmiques",
      "IA, modèles technologiques décoloniaux et contextualisation",
      "Spiritualités, valeurs africaines et IA",
      "Identités numériques, générations futures et durabilité"
    ]
  },
];

const objectives = [
  {
    icon: Target,
    title: "Partager les connaissances",
    description: "Favoriser l'échange de savoirs entre chercheurs, praticiens et décideurs sur les enjeux de l'IA"
  },
  {
    icon: Users,
    title: "Créer des réseaux",
    description: "Développer des collaborations internationales et interdisciplinaires autour de l'IA"
  },
  {
    icon: Lightbulb,
    title: "Promouvoir l'innovation",
    description: "Encourager les initiatives innovantes adaptées aux réalités africaines"
  },
  {
    icon: BookOpen,
    title: "Former et sensibiliser",
    description: "Contribuer à la formation des acteurs sur les opportunités et défis de l'IA"
  },
];

export default function PresentationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#1e3a8a]"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-white/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white font-medium">À propos du CIL 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Présentation & <span className="text-blue-200">Contexte</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Découvrez le 12ème Colloque International de Libreville et son thème central : 
              l&apos;Intelligence Artificielle et les Dynamiques des Organisations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">À propos du colloque</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                L&apos;intelligence artificielle (IA) s&apos;impose aujourd&apos;hui comme un moteur majeur des transformations 
                contemporaines, aussi bien dans les secteurs publics que privés. L&apos;ampleur des innovations 
                technologiques récentes reconfigure les modes de production, les pratiques décisionnelles, 
                la gestion des organisations et, plus largement, les dynamiques sociales, économiques et culturelles.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Le <strong className="text-[#4169E1]">12ème Colloque International de Libreville (CIL2026)</strong> s&apos;inscrit 
                dans la continuité d&apos;une tradition scientifique visant à questionner les mutations profondes des 
                organisations et des sociétés, à l&apos;aune des avancées technologiques et des impératifs de durabilité.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                En Afrique, ces transformations prennent une dimension particulière. Les défis structurels 
                (fragilité institutionnelle, infrastructures numériques limitées) complexifient l&apos;intégration 
                des technologies intelligentes. Simultanément, le continent se distingue par une 
                <strong className="text-[#4169E1]"> remarquable créativité sociale</strong>, des innovations endogènes 
                et une volonté croissante de reconquête de la souveraineté numérique.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-[#4169E1]">12ème</div>
                    <div className="text-gray-500 text-sm mt-1 font-medium">Édition</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-[#4169E1]">5</div>
                    <div className="text-gray-500 text-sm mt-1 font-medium">Jours de travaux</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-[#D4AF37]">4</div>
                    <div className="text-gray-500 text-sm mt-1 font-medium">Axes thématiques</div>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl font-bold text-[#D4AF37]">15+</div>
                    <div className="text-gray-500 text-sm mt-1 font-medium">Pays représentés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Objectifs du Colloque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Le CIL 2026 poursuit plusieurs objectifs ambitieux pour contribuer au développement 
              des connaissances et des pratiques en matière d&apos;IA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective) => (
              <div 
                key={objective.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-[#4169E1]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-[#4169E1]">
                  <objective.icon className="w-7 h-7 text-[#4169E1] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Axes thématiques */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Axes Thématiques</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Le colloque s&apos;articule autour de quatre axes thématiques majeurs qui couvrent 
              les différentes dimensions de l&apos;IA dans les organisations.
            </p>
          </div>

          <div className="space-y-8">
            {thematicAxes.map((axis) => (
              <div 
                key={axis.number}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                      <span className="text-3xl font-bold text-[#4169E1]">{axis.number}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Axe {axis.number} : <span className="text-[#4169E1]">{axis.title}</span>
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">{axis.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {axis.topics.map((topic) => (
                        <span 
                          key={topic}
                          className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:border-[#4169E1] hover:text-[#4169E1] transition-all shadow-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message du Président */}
      <section className="py-20 relative overflow-hidden bg-[#4169E1]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-[150px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl font-bold mb-8">Message du Président du Comité Scientifique</h2>
            <blockquote className="text-xl md:text-2xl text-white/90 italic mb-10 leading-relaxed font-light">
              &quot;L&apos;intelligence artificielle représente une révolution majeure pour nos organisations. 
              Le CIL 2026 sera l&apos;occasion de réfléchir ensemble aux opportunités et aux défis 
              que cette technologie pose, en particulier dans le contexte africain. 
              Nous vous invitons à contribuer à cette réflexion collective par vos travaux de recherche 
              et vos retours d&apos;expérience.&quot;
            </blockquote>
            <p className="font-bold text-lg">Professeur Jean Moussavou</p>
            <p className="text-white/80">Président du Comité Scientifique - CIL 2026</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Prêt à participer au <span className="text-[#4169E1]">CIL 2026</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/appel-communications" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#4169E1] text-white font-bold rounded-full hover:bg-[#3154b3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Consulter l&apos;appel à communications
            </Link>
            <Link 
              href="/inscription" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4169E1] font-bold rounded-full border-2 border-[#4169E1] hover:bg-blue-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              S&apos;inscrire au colloque
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
