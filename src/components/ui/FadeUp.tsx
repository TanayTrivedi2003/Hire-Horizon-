import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function FadeUp({ children, delay = 0, y = 28, className = '', once = true }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-70px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
