import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const STORIES = [
  {
    quote: 'Hire Horizon\'s interview coaching was incredible. From a B.Com graduate to Branch Manager in under 3 years — couldn\'t have done it without their guidance.',
    name: 'Rohan Mehta',
    role: 'Branch Manager · Leading Private Bank',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    quote: 'They understood exactly what I wanted in my next role. Got placed in 3 weeks with a 40% hike. The team is professional, fast and genuinely cares.',
    name: 'Karthik Iyer',
    role: 'Relationship Manager · Top-Tier Public Bank',
    avatar: 'https://i.pravatar.cc/120?img=33',
  },
  {
    quote: 'What stood out was the dedicated recruiter assigned to me. Mock interviews, profile feedback and finally a great offer letter. Truly world-class.',
    name: 'Aditya Sharma',
    role: 'Assistant Manager · Private Banking Group',
    avatar: 'https://i.pravatar.cc/120?img=15',
  },
];

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="ctn">
        <SectionTitle
          eyebrow="Success Stories"
          title={<>Real bankers. <span className="text-gold-gradient italic">Real placements.</span></>}
          description="Thousands of professionals have found their next role with Hire Horizon Group. Here's what a few of them say."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {STORIES.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative bg-navy-50/50 rounded-3xl p-7 border border-navy-100 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <Quote className="w-10 h-10 text-gold-500/40 group-hover:text-gold-500 transition-colors" />
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
              <blockquote className="font-display text-lg leading-snug text-navy-900 mb-6">
                "{s.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-navy-100">
                <img src={s.avatar} alt={s.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/40 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-semibold text-navy-950">{s.name}</div>
                  <div className="text-sm text-navy-700/60">{s.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
