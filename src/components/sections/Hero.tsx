'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';
import { ArrowRight, Code2, FileText, Github, Linkedin } from 'lucide-react';
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
    <section ref={ref} id="home" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center items-start bg-[var(--bg-primary)] px-[max(5vw,2rem)] py-20 lg:py-0">
      
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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
        >
          
          {/* A. EYEBROW LINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase border border-[var(--accent-cyan)]/25 px-3.5 py-1.5 rounded-full bg-[var(--accent-cyan)]/5">
              [ Software Engineer & Frontend Developer ]
            </span>
          </motion.div>

          {/* B. MAIN HEADING */}
          <div className="mb-6">
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

          {/* C. SUBHEADING & POSITIONING */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-3 mb-8 max-w-[560px]"
          >
            <p className="font-body font-[500] text-[clamp(1.05rem,2vw,1.25rem)] text-[var(--text-primary)] leading-snug">
              Software Engineer & Frontend Developer building scalable, interactive web applications.
            </p>
            <p className="font-body font-[300] text-[clamp(0.9rem,1.6vw,1rem)] text-[var(--text-secondary)] leading-relaxed">
              Specialized in React, Next.js, and TypeScript with real-world experience building interactive web applications and SaaS frontends. Backed by strong problem-solving fundamentals with 900+ LeetCode problems solved across an 863-day active streak.
            </p>
          </motion.div>

          {/* D. CTA ROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              data-cursor="pointer"
              className="bg-[var(--accent-primary)] text-white font-body font-[500] py-3 px-8 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_var(--accent-glow)] flex items-center gap-2 text-sm md:text-base"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="border border-white/20 text-[var(--text-primary)] font-body font-[500] py-3 px-7 rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/40 flex items-center gap-2 text-sm md:text-base"
            >
              <FileText className="w-4 h-4 text-[var(--accent-cyan)]" />
              Resume
            </a>
            <div className="flex items-center gap-2 pl-1">
              <a
                href="https://github.com/darknight08zz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-cursor="pointer"
                className="p-3 rounded-full border border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ujjwal-prajapati-34b44b285/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-cursor="pointer"
                className="p-3 rounded-full border border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/30 hover:bg-white/5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* E. STATS ROW */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-8 md:gap-10"
          >
            <Counter value={900} label="LeetCode Solved" suffix="+" />
            <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
            <Counter value={863} label="Active Streak" suffix="d" />
            <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
            <Counter value="9.16" label="CGPA (XIM)" />
            <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
            <Counter value={10} label="Projects Built" suffix="+" />
          </motion.div>
        </motion.div>

        {/* F. PROFILE IMAGE (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          {/* Decorative Rings */}
          <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-[8px] border-white/5 shadow-2xl">
            <img
              src="/Ujjwal_Profile_photo.jpeg"
              alt="Ujjwal Prajapati"
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
            />
            {/* Glassmorphism gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-primary)]/20 to-transparent opacity-40 mix-blend-overlay" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-cyan)]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Primary Stack</p>
              <p className="text-xs font-display font-bold text-[var(--text-primary)]">React • Next.js • TS</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* G. SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="hidden md:flex absolute bottom-8 left-[max(5vw,2rem)] items-center gap-4"
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