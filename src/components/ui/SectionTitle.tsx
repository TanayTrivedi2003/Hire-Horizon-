import { ReactNode } from 'react';
import FadeUp from './FadeUp';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: Props) {
  const center = align === 'center';
  return (
    <FadeUp className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      <div className={`flex items-center gap-2.5 mb-4 ${center ? 'justify-center' : ''}`}>
        <span className={`w-7 h-px ${dark ? 'bg-gold-400' : 'bg-gold-500'}`} />
        <span className={`text-[11px] font-bold uppercase tracking-[0.22em] ${dark ? 'text-gold-400' : 'text-blue-600'}`}>
          {eyebrow}
        </span>
        {center && <span className={`w-7 h-px ${dark ? 'bg-gold-400' : 'bg-gold-500'}`} />}
      </div>
      <h2 className={`h-display text-3xl sm:text-4xl md:text-5xl ${dark ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-navy-700/75'} ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </FadeUp>
  );
}
