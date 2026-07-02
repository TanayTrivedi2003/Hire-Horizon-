import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  x?: number;
  className?: string;
};

export default function FadeSide({ children, delay = 0, x = 40, className = '' }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
