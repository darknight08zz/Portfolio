'use client';

import { useLenis } from '@/lib/lenis';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}
