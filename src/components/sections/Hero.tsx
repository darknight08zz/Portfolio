'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
  const { ref, inView } = useReveal();
  const visualRef = useRef<HTMLDivElement>(null);

  // Subtle 3D mouse tracking for the portrait visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current || (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)) return;
    const rect = visualRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const stats = [
    { value: '900+', label: 'LeetCode Solved' },
    { value: '800+ Days', label: 'Active Streak' },
    { value: '9.16', label: 'CGPA (Merit Scholar)' },
    { value: '10+', label: 'Projects Built' },
  ];

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center items-start bg-[var(--bg-primary)] px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-10"
    >
      {/* Grayscale Masthead Background Image with Atmospheric Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg-masthead.jpg"
          alt="Atmospheric Masthead"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-25 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/40 via-[var(--bg-primary)]/75 to-[var(--bg-primary)]" />
        <div className="absolute inset-0 grayscale-vignette opacity-70" />
      </div>
      
      {/* Minimal Architectural Backdrop Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border-subtle) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div 
        className="absolute top-[12%] right-[12%] w-[520px] h-[520px] rounded-full pointer-events-none z-0 blur-[150px] opacity-15"
        style={{ background: 'radial-gradient(circle, var(--accent-grayscale-teal) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto">
        
        {/* LEFT COLUMN: Personal Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full lg:max-w-[640px]"
        >
          {/* Availability Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="text-xs font-body font-medium text-[var(--text-primary)]">
                Available for Full-Time Roles &amp; Internships
              </span>
            </div>
            <span className="text-xs font-body text-[var(--text-muted)] hidden sm:inline">
              · Software Engineer &amp; Frontend
            </span>
          </motion.div>

          {/* Large Personal Intro Headline with Grayscale Signature Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-5"
          >
            <h1 className="bebas-neue-regular grayscale-title-gradient text-[clamp(2.5rem,6.4vw,5.6rem)] leading-[0.95] tracking-[0.08em] sm:tracking-[0.14em] uppercase sm:whitespace-nowrap">
              Ujjwal Prajapati
            </h1>
            <p className="font-display font-[700] text-[clamp(1.1rem,1.8vw,1.65rem)] text-[var(--text-primary)] mt-2 sm:mt-2.5 tracking-tight leading-snug">
              Building typed, low-latency web interfaces &amp; distributed software.
            </p>
          </motion.div>

          {/* Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body font-[300] text-sm md:text-[0.98rem] text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-[560px]"
          >
            Final-year Computer Science student at XIM University (CGPA 9.16) crafting production web systems with React, Next.js, and TypeScript. Backed by disciplined algorithmic foundations—900+ LeetCode problems solved across an active 800+ days streak.
          </motion.p>

          {/* Grayscale Styled Button CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-9"
          >
            <Button asChild variant="pill" size="pill" className="gap-2 font-mono text-[11px] tracking-[0.15em] uppercase hover:bg-[var(--accent-grayscale-teal)] hover:text-white transition-all shadow-md">
              <a href="#projects" data-cursor-label="Projects">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <Button asChild variant="pillOutline" size="pill" className="gap-2 font-mono text-[11px] tracking-[0.15em] uppercase hover:border-[var(--accent-grayscale-teal)] transition-all">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor-label="Resume">
                <Download className="w-4 h-4 text-[var(--text-secondary)]" />
                <span>Resume PDF</span>
              </a>
            </Button>
          </motion.div>

          {/* 4 Stats Evidence Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-5 sm:pt-6 w-full border-t border-[var(--border-subtle)]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-mono font-[700] text-xl sm:text-2xl lg:text-[1.65rem] text-[var(--text-highlight)] tracking-tight tabular-nums whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-[var(--text-muted)] tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Authentic Photo with Professional Engineering Bezel */}
        <motion.div
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[365px] xl:max-w-[380px] aspect-[3/3.9] relative rounded-2xl p-2.5 sm:p-3 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] shadow-2xl group transition-all duration-300 mx-auto lg:mx-0 mt-6 lg:mt-0"
        >
          {/* Subtle Outer Hairline Precision Halo */}
          <div 
            className="absolute -inset-2 rounded-[20px] border border-[var(--border-subtle)] pointer-events-none opacity-60 group-hover:opacity-100 group-hover:border-[var(--border-hover)] transition-all duration-300" 
            style={{ transform: "translateZ(-10px)" }}
          />

          {/* Minimal Precision Corner Ticks */}
          <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-[var(--text-muted)]/40 pointer-events-none" />
          <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-[var(--text-muted)]/40 pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-[var(--text-muted)]/40 pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-[var(--text-muted)]/40 pointer-events-none" />

          {/* Main Photo Frame */}
          <div 
            className="w-full h-full relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-inner"
            style={{ transform: "translateZ(20px)" }}
          >
            <img
              src="/Ujjwal_Profile_photo.jpeg"
              alt="Ujjwal Prajapati — Software Engineer & Frontend Developer"
              className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle Vignette Overlay for Bottom Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Professional Status Bar (Bottom Integrated) */}
          <div 
            className="absolute bottom-3.5 left-3 right-3 sm:bottom-4 sm:left-3.5 sm:right-3.5 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
              <span className="text-xs font-body text-[var(--text-primary)] font-medium">
                Full-Time &amp; Internships
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
              XIM &apos;27
            </span>
          </div>

          {/* Clean Micro Badge */}
          <div 
            className="absolute -top-3 -right-2 pointer-events-none z-20 select-none hidden sm:block"
            style={{ transform: "translateZ(45px)" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
              <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
                Frontend &amp; SDE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-full hidden sm:flex justify-center mt-6 lg:mt-4"
      >
        <a 
          href="#projects" 
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-5 h-8 rounded-full border border-[var(--border-subtle)] group-hover:border-white/60 flex items-start justify-center p-1 transition-colors">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-white"
            />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-highlight)] uppercase tracking-[0.16em] transition-colors">
            Scroll to explore
          </span>
        </a>
      </motion.div>
    </section>
  );
}