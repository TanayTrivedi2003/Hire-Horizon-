import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, MapPin, Link2, GraduationCap, Zap, UserCheck } from 'lucide-react';
import FadeUp from './ui/FadeUp';

const FEATURES = [
  { icon: Award, title: 'Trusted Banking Experts', text: 'Years of recruitment expertise dedicated exclusively to India\'s banking sector.' },
  { icon: MapPin, title: 'PAN India Opportunities', text: 'From metro hubs to growing cities — placements across all major Indian banks.' },
  { icon: Link2, title: 'Direct Industry Connections', text: 'Tier-1 relationships with hiring managers at 50+ banking partners.' },
  { icon: GraduationCap, title: 'Career Guidance & Coaching', text: 'Resume polish, interview prep and industry know-how that lands offers.' },
  { icon: Zap, title: 'Fast Placement Process', text: 'Streamlined screening to offer — most candidates placed within 4–6 weeks.' },
  { icon: UserCheck, title: 'Dedicated Assistance', text: 'A personal recruiter walks with you from application to your first paycheque.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="ctn">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image composition */}
          <div className="lg:col-span-5 relative">
            <FadeUp>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Hire Horizon Group team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-10 -right-6 w-44 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
                >
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-6 -left-6 bg-navy-950 text-white rounded-2xl p-5 shadow-2xl border border-gold-500/30 animate-float"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-gold-400" />
                    <div>
                      <div className="font-display text-3xl font-bold text-gold-400 leading-none">14+</div>
                      <div className="text-xs text-white/70 mt-1">Years of banking<br />recruitment experience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="eyebrow mb-4">
                <span className="w-7 h-px bg-gold-500" />
                About Hire Horizon Group
              </div>
              <h2 className="h-display text-3xl sm:text-4xl md:text-5xl text-navy-950">
                Building careers that<br />
                <span className="text-gold-gradient italic">move banks forward.</span>
              </h2>
              <p className="mt-6 text-lg text-navy-700/80 leading-relaxed">
                Hire Horizon Group is committed to helping graduates and professionals build successful careers in the banking sector. Our expert recruitment team works closely with leading banks to match candidates with the right opportunities — combining deep industry knowledge with a personal, high-touch placement process.
              </p>
            </FadeUp>

            <div ref={ref} className="mt-10 grid sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`group p-5 rounded-2xl border border-navy-100 hover:border-gold-400/50 hover:bg-navy-50/50 transition-all duration-300 ${i % 2 === 0 ? 'sm:mt-0' : 'sm:mt-8'}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center mb-3 group-hover:bg-gold-500 transition-colors duration-500">
                    <f.icon className="w-5 h-5 text-gold-400 group-hover:text-navy-950 transition-colors duration-500" />
                  </div>
                  <div className="font-semibold text-navy-950">{f.title}</div>
                  <div className="text-sm text-navy-700/70 mt-1.5 leading-relaxed">{f.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
