import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, GraduationCap, Calendar, Trophy } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const STEPS = [
  { n: '01', icon: FileText, title: 'Submit Application', text: 'Share your details & preferred role in under 2 minutes.' },
  { n: '02', icon: Search, title: 'Resume Screening', text: 'Our recruiters review and shortlist your profile.' },
  { n: '03', icon: GraduationCap, title: 'Interview Preparation', text: '1:1 coaching, mock interviews & banking domain prep.' },
  { n: '04', icon: Calendar, title: 'Bank Interview', text: 'We schedule interviews with our banking partners.' },
  { n: '05', icon: Trophy, title: 'Job Placement', text: 'Offer in hand. Onboarding support until day one.' },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-[140px]" />
      <div className="ctn relative">
        <SectionTitle
          eyebrow="How It Works"
          title={<>Five steps from application to your <span className="text-gold-gradient italic">banking offer.</span></>}
          dark
          align="center"
        />

        {/* Desktop horizontal */}
        <div ref={ref} className="hidden lg:block relative mt-16">
          <div className="absolute top-[68px] left-0 right-0 h-px bg-white/10" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute top-[68px] left-0 right-0 h-px bg-gradient-to-r from-gold-400 to-gold-600 origin-left"
          />
          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center relative z-10 group hover:bg-gold-500 transition-colors duration-500">
                    <s.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-500" />
                  </div>
                </div>
                <div className="font-mono text-xs text-gold-500 mb-2">STEP {s.n}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed px-2">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative pl-8 mt-12">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400 to-gold-600 origin-top"
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-9 last:pb-0"
            >
              <div className="absolute -left-[22px] top-1 w-6 h-6 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
              </div>
              <div className="font-mono text-xs text-gold-500 mb-1">STEP {s.n}</div>
              <h3 className="font-display text-lg font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
