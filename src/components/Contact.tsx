import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const CHANNELS = [
  { icon: Phone, label: 'Phone', value: '+91 97217 59696', action: 'Call now →', href: 'tel:+919721759696' },
  { icon: Mail, label: 'Email', value: 'connect@hirehorizongroup.com', action: 'Send email →', href: 'mailto:connect@hirehorizongroup.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', action: 'Open WhatsApp →', href: 'https://wa.me/919721759696' },
  { icon: MapPin, label: 'Office', value: 'Kanpur, Uttar Pradesh', action: 'View address →', href: '#address' },
];

const HOURS = [
  { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const ADDRESS = `Indradeep Complex, 117/N/47, Avon Market,
Ambedkar Nagar,
Navin Nagar,
Kakadeo,
Kanpur,
Uttar Pradesh 208005,
India`;

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="ctn">
        <SectionTitle
          eyebrow="Contact"
          title={<>Let's talk about your <span className="text-gold-gradient italic">banking career.</span></>}
          description="Reach out via phone, email or WhatsApp — or visit our Kanpur office. We typically respond within a few hours."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Channels */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {CHANNELS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl bg-navy-50/50 border border-navy-100 hover:border-gold-400/40 hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-500">
                  <c.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-500" />
                </div>
                <div className="text-xs uppercase tracking-widest text-navy-500 font-semibold mb-1">{c.label}</div>
                <div className="font-semibold text-navy-950 mb-3 break-words">{c.value}</div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 group-hover:gap-3 transition-all">
                  {c.action} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Office hours + address */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-navy-950 text-white"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm pb-3 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-white/70">{h.day}</span>
                    <span className={`font-semibold ${h.time === 'Closed' ? 'text-red-400' : 'text-gold-400'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="address"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-navy-50/50 border border-navy-100"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <MapPin className="w-5 h-5 text-gold-600" />
                <h3 className="font-display text-lg font-bold text-navy-950">Office Address</h3>
              </div>
              <p className="text-sm text-navy-700/75 leading-relaxed whitespace-pre-line">{ADDRESS}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
