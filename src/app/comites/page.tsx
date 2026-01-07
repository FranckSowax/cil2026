import { Mail, User } from 'lucide-react';

const coordination = [
  {
    name: "Simon Joseph G. PETER",
    role: "Coordonnateur Général",
    institution: "LARSIG",
  },
  {
    name: "Agnès Urielle MENGUE BIYOGHO",
    role: "Coordonnateur Adjoint",
    institution: "LARSIG",
  },
  {
    name: "Doris Elvire MATAMBA",
    role: "Coordonnateur Infrastructure Digitale",
    institution: "LARSIG",
  },
  {
    name: "Chimène Jessica EKOME METEGHE",
    role: "Coordonnateur Administration et Certification",
    institution: "LARSIG",
  },
  {
    name: "Adriana MEKUI COUTINHO",
    role: "Coordonnateur des Ateliers",
    institution: "LARSIG",
  },
];

const organizingCommittee = [
  "Honorine ILLA",
  "Pierre Daniel INDJENDJE NDALA",
  "Jean Paul MAMBOUNDOU",
  "Agnès Urielle MENGUE BIYOGHO",
  "Chimène Jessica EKOME METEGHE",
  "Philémon NSI ELLA",
  "Fred Lionnel ABELOCKO LEKOULEMBISSA",
  "Doris Elvire MATAMBA",
  "Fabrice Arnaud GUETSOP SATEU",
  "Nasser HOURENATOU",
  "Marcellin NGOMO ONDO",
  "Trésor EKOM",
  "Jean René OVONO MENDAME",
  "Hugues MAGANGA",
  "Simplice MASSALA",
  "Alain-Denis EKOME TOUNG",
  "Adriana MEKUI COUTINHO",
  "Christiane WORA",
];

const scientificCommittee = [
  { name: "Jean MOUSSAVOU", role: "Président", institution: "Gabon" },
  { name: "Bruno AMANN", role: "Membre", institution: "France" },
  { name: "Mohamed BAYAD", role: "Membre", institution: "France" },
  { name: "Haoua BADINI KONE", role: "Membre", institution: "Burkina Faso" },
  { name: "Adda BENSLIMANE", role: "Membre", institution: "France" },
  { name: "Mathieu CABROL", role: "Membre", institution: "France" },
  { name: "Emmanuelle CARGNELLO-CHARLES", role: "Membre", institution: "France" },
  { name: "Jean Marie COURRENT", role: "Membre", institution: "France" },
  { name: "Alain DESREUMAUX", role: "Membre", institution: "France" },
  { name: "Honorine ILLA", role: "Membre", institution: "Gabon" },
  { name: "Pierre Daniel INDJENDJE NDALA", role: "Membre", institution: "Gabon" },
  { name: "Jacques JAUSSAUD", role: "Membre", institution: "France" },
  { name: "Pierre-André JULIEN", role: "Membre", institution: "Canada" },
  { name: "Emmanuel KAMDEM", role: "Membre", institution: "Cameroun" },
  { name: "Zino KHELFAOUI", role: "Membre", institution: "Algérie" },
  { name: "Jean Paul MAMBOUNDOU", role: "Membre", institution: "Gabon" },
  { name: "Alain Charles MARTINET", role: "Membre", institution: "France" },
  { name: "Bachir MAZOUZ", role: "Membre", institution: "Canada" },
  { name: "Sabine Patricia MOUNGOU MBENDA", role: "Membre", institution: "Cameroun" },
  { name: "Emmanuel MOUSSONE", role: "Membre", institution: "Gabon" },
  { name: "Joanna Grace OMBOUMA Ep. ONDO", role: "Membre", institution: "Gabon" },
  { name: "Gwenaëlle ORUEZABALA", role: "Membre", institution: "France" },
  { name: "Saïdou OUEDRAOGO", role: "Membre", institution: "Burkina Faso" },
  { name: "Simon J. G. PETER", role: "Membre", institution: "Gabon" },
  { name: "Yvon PESQUEUX", role: "Membre", institution: "France" },
  { name: "Catherine PEYROUX", role: "Membre", institution: "France" },
  { name: "Jean-Michel PLANE", role: "Membre", institution: "France" },
  { name: "Bertrand SOGBOSSI BOCCO", role: "Membre", institution: "Bénin" },
  { name: "Marie Thérèse UM NGOUEM", role: "Membre", institution: "Cameroun" },
];

export default function ComitesPage() {
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
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#4169E1]/20 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white font-medium">Équipe organisatrice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              Comités du <span className="text-blue-200">Colloque</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-3xl mx-auto px-2 font-light">
              Découvrez les membres des comités d&apos;organisation et scientifique du CIL 2026
            </p>
          </div>
        </div>
      </section>

      {/* Coordination */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Coordination Générale</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              L&apos;équipe de coordination du CIL 2026
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coordination.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4169E1]/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4169E1] transition-colors">
                    <User className="w-6 h-6 text-[#4169E1] group-hover:text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-[#4169E1] font-medium text-sm mb-1">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Membres du comité d'organisation */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Membres du Comité d&apos;Organisation</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {organizingCommittee.map((member) => (
              <span 
                key={member}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1] transition-all shadow-sm"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comité scientifique */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Comité Scientifique</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les experts internationaux en charge de l&apos;évaluation des communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {scientificCommittee.map((member) => (
              <div 
                key={member.name}
                className={`bg-white rounded-2xl p-5 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  member.role === 'Président' 
                    ? 'border-[#4169E1] shadow-md ring-1 ring-[#4169E1]/20' 
                    : 'border-gray-100 hover:border-[#4169E1]/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    member.role === 'Président' 
                      ? 'bg-[#4169E1] text-white' 
                      : 'bg-blue-50 text-[#4169E1]'
                  }`}>
                    <span className="font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{member.name}</h3>
                    <p className="text-xs text-gray-500">{member.institution}</p>
                    {member.role === 'Président' && (
                      <span className="inline-block mt-1 text-[10px] bg-[#4169E1]/10 text-[#4169E1] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Président
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#4169E1] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full filter blur-[100px]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contacter le Comité d&apos;Organisation
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Pour toute question concernant le colloque, n&apos;hésitez pas à nous contacter
              </p>
              <a 
                href="mailto:larsigist@yahoo.fr"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4169E1] font-bold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                larsigist@yahoo.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

