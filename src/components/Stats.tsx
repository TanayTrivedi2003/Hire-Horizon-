import { motion } from 'framer-motion';
import { Users, Building2, UserCheck, Smile } from 'lucide-react';
import Counter from './ui/Counter';
import SectionTitle from './ui/SectionTitle';

const STATS = [
  { icon: Users, value: 250, suffix: '+', label: 'Candidates Placed' },
  { icon: Building2, value: 12, suffix: '+', label: 'Banking Partners' },
  { icon: UserCheck, value: 99, suffix: '+', label: 'Active Recruiters' },
  { icon: Smile, value: 95, suffix: '%', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24 bg-navy-950 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="ctn relative">
        <SectionTitle
          eyebrow="By The Numbers"
          title={<>A track record built on <span className="text-gold-gradient italic">real placements.</span></>}
          dark
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative text-center lg:text-left"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-white/5 border border-white/10 items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors duration-500">
                <s.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-500" />
              </div>
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-semibold text-white text-sm md:text-base">{s.label}</div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute top-2 -right-2 h-20 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
