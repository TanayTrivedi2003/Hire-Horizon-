import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export default function Parallax({ children, className = '', speed = 0.25 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
