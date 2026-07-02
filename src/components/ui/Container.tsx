import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: Props) {
  return <div className={`ctn ${className}`}>{children}</div>;
}
