import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Users, Building2, Award, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Users, value: '5000+', label: 'Candidates Placed' },
  { icon: Building2, value: '50+', label: 'Banking Partners' },
  { icon: Award, value: '100+', label: 'Recruiters' },
  { icon: TrendingUp, value: '95%', label: 'Satisfaction' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      <motion.div style={{ scale, y }} className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-navy-950/30" />
      </motion.div>

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] z-0" />

      <motion.div style={{ opacity }} className="ctn relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs font-semibold text-white/90 tracking-wide">Corporate banking office</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              India's Banking Recruitment Specialists
            </span>
          </motion.div>

          <h1 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Your Gateway to a
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Successful <span className="text-gold-gradient italic">Banking Career</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Connecting talented professionals with top banking opportunities across India. From freshers to seasoned bankers — we open the right doors at the right banks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => go('apply')} className="btn-primary">
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => go('contact')} className="btn-secondary">
              <MessageCircle className="w-4 h-4" /> Talk to Our Team
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-8 text-sm text-white/55"
          >
            Trusted by graduates & professionals across India · PAN-India placements
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {STATS.map((s, i) => {
            const tx = mouse.x * (i % 2 === 0 ? 16 : -16);
            const ty = mouse.y * (i < 2 ? -12 : 12);
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                style={{ x: tx, y: ty }}
                className="card-glass p-5 group hover:bg-white/10 transition-colors"
              >
                <s.icon className="w-6 h-6 text-gold-400 mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-sm text-white/60 mt-1.5">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
