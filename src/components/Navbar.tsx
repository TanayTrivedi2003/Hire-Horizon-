import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'opportunities', label: 'Opportunities' },
  { id: 'process', label: 'Process' },
  { id: 'stories', label: 'Stories' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const PHONE = '+91 97217 59696';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-navy-950/30'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="ctn flex items-center justify-between">
        <button onClick={() => go('hero')} className="flex items-center gap-3 group shrink-0">
          <img src="/Logo_hire_.png" alt="Hire Horizon Group" className="h-11 w-auto transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-bold text-white tracking-tight">HIRE HORIZON GROUP</div>
            <div className="text-[10px] text-gold-400 font-medium tracking-wide">Unfolding New Horizons of Success</div>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? 'text-gold-400' : 'text-white/75 hover:text-white'
                }`}
              >
                {n.label}
                {active === n.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold-400"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-gold-400 transition-colors">
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
          <button onClick={() => go('apply')} className="btn-primary">
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="ctn py-6 flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active === n.id ? 'text-gold-400 bg-white/5' : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    {n.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 px-4 py-3 text-white/80">
                  <Phone className="w-4 h-4 text-gold-400" /> {PHONE}
                </a>
              </li>
              <li>
                <button onClick={() => go('apply')} className="btn-primary w-full mt-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
