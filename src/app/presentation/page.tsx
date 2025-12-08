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
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00D9C5]/10 rounded-full filter blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-sm text-[#B0B0B0]">À propos du CIL 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Présentation & <span className="text-[#00D9C5]">Contexte</span>
            </h1>
            <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
              Découvrez le 12ème Colloque International de Libreville et son thème central : 
              l&apos;Intelligence Artificielle et les Dynamiques des Organisations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Le Colloque International de Libreville</h2>
              <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                L&apos;intelligence artificielle (IA) s&apos;impose aujourd&apos;hui comme un moteur majeur des transformations 
                contemporaines, aussi bien dans les secteurs publics que privés. L&apos;ampleur des innovations 
                technologiques récentes reconfigure les modes de production, les pratiques décisionnelles, 
                la gestion des organisations et, plus largement, les dynamiques sociales, économiques et culturelles.
              </p>
              <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                Le <strong className="text-[#00D9C5]">12ème Colloque International de Libreville (CIL2026)</strong> s&apos;inscrit 
                dans la continuité d&apos;une tradition scientifique visant à questionner les mutations profondes des 
                organisations et des sociétés, à l&apos;aune des avancées technologiques et des impératifs de durabilité.
              </p>
              <p className="text-[#B0B0B0] leading-relaxed">
                En Afrique, ces transformations prennent une dimension particulière. Les défis structurels 
                (fragilité institutionnelle, infrastructures numériques limitées) complexifient l&apos;intégration 
                des technologies intelligentes. Simultanément, le continent se distingue par une 
                <strong className="text-[#00D9C5]"> remarquable créativité sociale</strong>, des innovations endogènes 
                et une volonté croissante de reconquête de la souveraineté numérique.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-[#00D9C5]">12ème</div>
                    <div className="text-[#B0B0B0] text-sm mt-1">Édition</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-[#00D9C5]">5</div>
                    <div className="text-[#B0B0B0] text-sm mt-1">Jours</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-[#B8B5FF]">4</div>
                    <div className="text-[#B0B0B0] text-sm mt-1">Axes thématiques</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-[#B8B5FF]">15+</div>
                    <div className="text-[#B0B0B0] text-sm mt-1">Pays représentés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Objectifs du Colloque</h2>
            <p className="text-[#B0B0B0] max-w-2xl mx-auto">
              Le CIL 2026 poursuit plusieurs objectifs ambitieux pour contribuer au développement 
              des connaissances et des pratiques en matière d&apos;IA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective) => (
              <div 
                key={objective.title}
                className="bg-[#1A1A1A] rounded-3xl p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <objective.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{objective.title}</h3>
                <p className="text-[#B0B0B0] text-sm">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Axes thématiques */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-cyan">Axes Thématiques</h2>
            <p className="text-[#B0B0B0] max-w-2xl mx-auto">
              Le colloque s&apos;articule autour de quatre axes thématiques majeurs qui couvrent 
              les différentes dimensions de l&apos;IA dans les organisations.
            </p>
          </div>

          <div className="space-y-8">
            {thematicAxes.map((axis) => (
              <div 
                key={axis.number}
                className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/10 hover:border-[#00D9C5]/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">{axis.number}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">
                      Axe {axis.number} : <span className="text-[#00D9C5]">{axis.title}</span>
                    </h3>
                    <p className="text-[#B0B0B0] mb-4">{axis.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {axis.topics.map((topic) => (
                        <span 
                          key={topic}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#B0B0B0] border border-white/10 hover:border-[#00D9C5]/30 hover:text-[#00D9C5] transition-colors"
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
      <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D9C5]/5 rounded-full filter blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-[#00D9C5]" />
            <h2 className="text-3xl font-bold text-white mb-6">Message du Président du Comité Scientifique</h2>
            <blockquote className="text-xl text-[#B0B0B0] italic mb-8 leading-relaxed">
              &quot;L&apos;intelligence artificielle représente une révolution majeure pour nos organisations. 
              Le CIL 2026 sera l&apos;occasion de réfléchir ensemble aux opportunités et aux défis 
              que cette technologie pose, en particulier dans le contexte africain. 
              Nous vous invitons à contribuer à cette réflexion collective par vos travaux de recherche 
              et vos retours d&apos;expérience.&quot;
            </blockquote>
            <p className="font-semibold text-[#00D9C5]">Professeur Jean Moussavou</p>
            <p className="text-[#B0B0B0]">Président du Comité Scientifique - CIL 2026</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à participer au <span className="text-[#00D9C5]">CIL 2026</span> ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appel-communications" className="btn-primary">
              Consulter l&apos;appel à communications
            </Link>
            <Link href="/inscription" className="btn-secondary">
              S&apos;inscrire au colloque
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
