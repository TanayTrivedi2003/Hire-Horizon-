import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Users, Building2, Handshake, Cog, Headphones } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const ROLES = [
  {
    n: '01', level: 'Senior', title: 'Branch Manager',
    desc: 'Lead branch operations, drive growth and manage teams at India\'s leading banks.',
    icon: Building2, span: 'lg:col-span-2 lg:row-span-2',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  { n: '02', level: 'Mid', title: 'Assistant Manager', desc: 'Step into management with cross-functional banking responsibilities and visibility.', icon: Briefcase, span: '' },
  { n: '03', level: 'Mid–Senior', title: 'Deputy Manager', desc: 'Own portfolios and partner with leadership on strategic branch initiatives.', icon: Users, span: '' },
  {
    n: '04', level: 'Mid', title: 'Relationship Manager',
    desc: 'Build long-term client relationships across retail, SME and wealth segments.',
    icon: Handshake, span: 'lg:col-span-2',
  },
  { n: '05', level: 'Entry–Mid', title: 'Operations Executive', desc: 'Execute the operational backbone — settlements, compliance and process control.', icon: Cog, span: '' },
  { n: '06', level: 'Entry', title: 'Customer Service Executive', desc: 'Front-line client service across branches, call centres and digital channels.', icon: Headphones, span: '' },
];

const levelColor: Record<string, string> = {
  'Senior': 'bg-gold-500/15 text-gold-700 border-gold-500/30',
  'Mid': 'bg-blue-50 text-blue-700 border-blue-200',
  'Mid–Senior': 'bg-navy-50 text-navy-700 border-navy-200',
  'Entry–Mid': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Entry': 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function Opportunities() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="opportunities" className="relative py-24 md:py-32 bg-navy-50/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px]" />
      <div className="ctn relative">
        <SectionTitle
          eyebrow="Job Opportunities"
          title={<>Roles we place <span className="text-gold-gradient italic">candidates into.</span></>}
          description="From front-desk to leadership — every banking role you'd want, sourced from our partner banks across India."
        />
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-6">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border ${r.span} ${
                r.img ? 'bg-navy-950 border-navy-800' : 'bg-white border-slate-100 hover:border-gold-400/40'
              } transition-colors duration-500 shadow-sm hover:shadow-2xl hover:shadow-navy-900/10`}
            >
              {r.img && (
                <>
                  <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-25 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
                </>
              )}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${r.img ? 'bg-white/10 backdrop-blur' : 'bg-navy-950'} group-hover:bg-gold-500 transition-colors duration-500`}>
                    <r.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-500" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${r.img ? 'bg-white/10 text-gold-300 border-gold-500/30' : levelColor[r.level]}`}>
                    {r.level}
                  </span>
                </div>
                <div>
                  <div className={`font-mono text-xs mb-1.5 ${r.img ? 'text-gold-400' : 'text-gold-600'}`}>ROLE {r.n}</div>
                  <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 ${r.img ? 'text-white' : 'text-navy-950'}`}>{r.title}</h3>
                  <p className={`text-sm leading-relaxed mb-4 ${r.img ? 'text-white/70' : 'text-navy-700/70'}`}>{r.desc}</p>
                  <button
                    onClick={() => go('apply')}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${r.img ? 'text-gold-400' : 'text-gold-700'} group-hover:gap-3 transition-all`}
                  >
                    Apply for this role <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
