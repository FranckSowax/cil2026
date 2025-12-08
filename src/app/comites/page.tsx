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
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#00D9C5]/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-[#B0B0B0]">Équipe organisatrice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Comités du <span className="text-[#00D9C5]">Colloque</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto px-2">
              Découvrez les membres des comités d&apos;organisation et scientifique du CIL 2026
            </p>
          </div>
        </div>
      </section>

      {/* Coordination */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Coordination Générale</h2>
            <p className="text-[#B0B0B0] text-sm sm:text-base max-w-2xl mx-auto">
              L&apos;équipe de coordination du CIL 2026
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {coordination.map((member) => (
              <div 
                key={member.name}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10 hover:border-[#00D9C5]/30 transition-all group"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <User className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-white">{member.name}</h3>
                    <p className="text-[#00D9C5] font-medium text-sm">{member.role}</p>
                    <p className="text-[#B0B0B0] text-sm">{member.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Membres du comité d'organisation */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Membres du Comité d&apos;Organisation</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {organizingCommittee.map((member) => (
              <span 
                key={member}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[#B0B0B0] hover:bg-[#00D9C5] hover:text-black hover:border-[#00D9C5] transition-all"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comité scientifique */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title-cyan">Comité Scientifique</h2>
            <p className="text-[#B0B0B0] max-w-2xl mx-auto">
              Les experts internationaux en charge de l&apos;évaluation des communications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {scientificCommittee.map((member) => (
              <div 
                key={member.name}
                className={`bg-[#1A1A1A] rounded-2xl p-4 border transition-all hover:scale-105 ${member.role === 'Président' ? 'border-[#00D9C5] shadow-[0_0_20px_rgba(0,217,197,0.2)]' : 'border-white/10 hover:border-white/20'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${member.role === 'Président' ? 'bg-[#00D9C5]' : 'bg-gradient-to-br from-[#00D9C5] to-[#B8B5FF]'}`}>
                    <span className="text-black font-bold text-xs">
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{member.name}</h3>
                    <p className="text-xs text-[#B0B0B0]">{member.institution}</p>
                    {member.role === 'Président' && (
                      <span className="text-xs text-[#00D9C5] font-medium">Président</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00D9C5]/5 rounded-full filter blur-[80px]"></div>
            </div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contacter le Comité d&apos;Organisation
              </h2>
              <p className="text-[#B0B0B0] mb-6 max-w-2xl mx-auto">
                Pour toute question concernant le colloque, n&apos;hésitez pas à nous contacter
              </p>
              <a 
                href="mailto:larsigist@yahoo.fr"
                className="inline-flex items-center px-8 py-4 bg-[#00D9C5] text-black font-bold rounded-full hover:scale-105 transition-all"
                style={{ boxShadow: '0 0 30px rgba(0, 217, 197, 0.3)' }}
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
