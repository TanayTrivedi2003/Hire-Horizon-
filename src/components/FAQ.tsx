import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const FAQS = [
  { q: 'Who can apply through Hire Horizon Group?', a: 'Anyone seeking a banking career — from fresh graduates to experienced bankers. We work with candidates across all experience levels and match them with roles that fit their profile, skills and ambitions.' },
  { q: 'Do freshers qualify for banking roles?', a: 'Absolutely. Many of our partner banks actively hire fresh graduates for entry-level roles like Customer Service Executive and Operations Executive. We also provide the coaching needed to clear those interviews.' },
  { q: 'Is placement assistance available end-to-end?', a: 'Yes. From the moment you submit your application to your first day at the bank, a dedicated recruiter supports you — resume polish, interview prep, scheduling, offer negotiation and onboarding.' },
  { q: 'What documents are required to apply?', a: 'Typically your resume, educational certificates and an ID proof. Specific roles may request additional documents, which your recruiter will guide you through during the process.' },
  { q: 'How long does the placement process take?', a: 'Most candidates are placed within 4–6 weeks. The exact timeline depends on the role, your readiness and the partner bank\'s interview cycle — but we move fast without compromising quality.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-navy-50/40 overflow-hidden">
      <div className="ctn">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="FAQ"
              title={<>Quick answers, <span className="text-gold-gradient italic">clear paths.</span></>}
            />
            <p className="mt-6 text-navy-700/70 leading-relaxed max-w-sm">
              Everything you need to know before starting your banking career journey with us.
            </p>
            <button
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline mt-8"
            >
              Start Your Application
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-gold-400/50 bg-white' : 'border-navy-100 bg-white hover:border-navy-200'}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-navy-950' : 'text-navy-900'}`}>
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-gold-500 text-navy-950' : 'bg-navy-100 text-navy-700'}`}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-navy-700/75 leading-relaxed">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
