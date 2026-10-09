'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const startTime = Date.now();
    const duration = 850; // Smooth 850ms load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 180);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] pointer-events-none select-none px-6"
        >
          <div className="w-full max-w-sm flex flex-col items-center space-y-6">
            {/* Minimal Caret / Chevron Logo */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[var(--accent-primary)] text-xl font-mono"
            >
              ^
            </motion.div>

            {/* Editorial Name */}
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="font-display font-[700] text-xl md:text-2xl tracking-tight text-[var(--text-highlight)]"
            >
              Ujjwal Prajapati
            </motion.h2>

            {/* Minimal Progress Line & Number */}
            <div className="w-full pt-4 space-y-2">
              <div className="h-[1.5px] w-full bg-[var(--border-subtle)] relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-[var(--accent-primary)] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-end text-[10px] font-mono text-[var(--text-muted)] tracking-wider tabular-nums">
                {progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
