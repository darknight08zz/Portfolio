'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[var(--accent-tertiary)] via-[var(--accent-primary)] to-[var(--accent-secondary)] z-[9998] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
