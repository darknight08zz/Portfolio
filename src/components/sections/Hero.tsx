'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const Counter = ({ value, label, suffix = "" }: { value: number | string, label: string, suffix?: string }) => {
  const { ref, inView } = useReveal();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const isFloat = typeof value === 'string' ? value.includes('.') : false;

  useEffect(() => {
    if (inView) {
      animate(motionValue, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [inView, motionValue, numericValue]);

  const displayValue = useTransform(springValue, (latest) => {
    if (isFloat) return latest.toFixed(2).toString();
    return Math.floor(latest).toString();
  });

  return (
    <div ref={ref} className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <motion.span className="font-display font-[700] text-3xl md:text-4xl text-[var(--text-primary)]">
          {displayValue}
        </motion.span>
        <span className="font-display font-[700] text-xl md:text-2xl text-[var(--text-primary)]">{suffix}</span>
      </div>
      <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
};

export function Hero() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="home" className="relative h-[100svh] w-full overflow-hidden flex flex-col justify-center items-start bg-[var(--bg-primary)] px-[max(5vw,2rem)]">
      
      {/* LAYER 1: Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* LAYER 2: Gradient Orbs */}
      <div 
        className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 blur-[120px] animate-float"
        style={{ background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', opacity: 0.15 }}
      />
      <div 
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[100px] animate-float"
        style={{ background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)', opacity: 0.08, animationDelay: '2s' }}
      />

      {/* LAYER 3: Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl flex flex-col items-center md:items-start text-center md:text-left"
      >
        
        {/* A. EYEBROW LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase border border-[var(--accent-cyan)]/20 px-3 py-1 rounded-sm">
            [Frontend Developer & AI Engineer]
          </span>
        </motion.div>

        {/* B. MAIN HEADING */}
        <div className="mb-8">
          <motion.h1 
            className="text-display text-[var(--text-primary)]"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            UJJWAL
          </motion.h1>
          <motion.h1 
            className="text-display gradient-text"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={inView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            PRAJAPATI
          </motion.h1>
        </div>

        {/* C. SUBHEADING */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body font-[300] text-[clamp(1rem,2vw,1.25rem)] text-[var(--text-secondary)] max-w-[520px] mb-10 leading-relaxed"
        >
          Building intelligent, scalable applications. B.Tech CSE @ XIM University — CGPA 9.18 | Merit Scholar
        </motion.p>

        {/* D. CTA ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            data-cursor="pointer"
            className="bg-[var(--accent-primary)] text-white font-body font-[500] py-3 px-8 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_var(--accent-glow)] flex items-center gap-2"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            data-cursor="pointer"
            className="border border-white/20 text-[var(--text-primary)] font-body font-[500] py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/40"
          >
            Download Resume
          </a>
        </motion.div>

        {/* E. STATS ROW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-8 md:gap-12"
        >
          <Counter value="9.18" label="GPA" />
          <div className="w-[1px] h-10 bg-white/10" />
          <Counter value={200} label="DSA Solved" suffix="+" />
          <div className="w-[1px] h-10 bg-white/10" />
          <Counter value={10} label="Projects Built" suffix="+" />
        </motion.div>
      </motion.div>

      {/* F. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-[max(5vw,2rem)] md:translate-x-0 flex items-center gap-4"
      >
        <div className="relative flex flex-col items-center">
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest rotate-[-90deg] translate-x-[-20px] mb-4">
            scroll
          </span>
          <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 60] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-[-1.5px] w-[4px] h-[4px] bg-[var(--accent-primary)] rounded-full shadow-[0_0_8px_var(--accent-primary)]"
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
}