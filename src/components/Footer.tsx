import { Linkedin, Twitter, Instagram, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const QUICK = [
  { label: 'About Us', id: 'about' },
  { label: 'Opportunities', id: 'opportunities' },
  { label: 'How It Works', id: 'process' },
  { label: 'Stories', id: 'stories' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Apply Now', id: 'apply' },
];

const LEGAL = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'];
const SOCIAL = [Linkedin, Twitter, Instagram];

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 rounded-full blur-[120px]" />

      <div className="ctn relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src="/Logo_hire_.png" alt="Hire Horizon Group" className="h-12 w-auto" />
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white tracking-tight">HIRE HORIZON GROUP</div>
                <div className="text-[10px] text-gold-400 font-medium tracking-wide">Unfolding New Horizons of Success</div>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm text-sm">
              India's specialist banking recruitment consultancy — connecting talented candidates with top banking employers across the country.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/60">
              <a href="tel:+919721759696" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-400" /> +91 97217 59696
              </a>
              <a href="mailto:connect@hirehorizongroup.com" className="flex items-center gap-2.5 hover:text-gold-400 transition-colors break-all">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" /> connect@hirehorizongroup.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Indradeep Complex, 117/N/47, Avon Market, Ambedkar Nagar, Navin Nagar, Kakadeo, Kanpur, Uttar Pradesh 208005</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.id)}
                    className="group inline-flex items-center text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {LEGAL.map((l) => (
                <li key={l}>
                  <a href="#" className="group inline-flex items-center text-sm text-white/60 hover:text-gold-400 transition-colors">
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              {SOCIAL.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
            <button onClick={() => go('apply')} className="btn-primary text-sm w-full">Apply Now</button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">
            © 2026 Hire Horizon Group. All rights reserved.<br />
            <span className="text-gold-400/80">Unfolding New Horizons of Success.</span>
          </p>
        
          <button
            onClick={toTop}
            className="group flex items-center gap-2 text-sm text-white/60 hover:text-gold-400 transition-colors"
          >
            Back to top
            <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold-400 group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );s
}
