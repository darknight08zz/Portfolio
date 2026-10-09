'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

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
    if (!visualRef.current) return;
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
    { value: '900+', label: 'LeetCode Problems' },
    { value: '863 Days', label: 'Active Streak' },
    { value: '9.16', label: 'CGPA (Merit Scholar)' },
    { value: '10+', label: 'Projects Completed' },
  ];

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center items-start bg-[var(--bg-primary)] px-6 md:px-12 lg:px-16 pt-36 pb-16 lg:pt-24 lg:pb-12"
    >
      {/* Subtle Warm Atmospheric Glows */}
      <div 
        className="absolute top-[12%] right-[10%] w-[550px] h-[550px] rounded-full pointer-events-none z-0 blur-[150px] opacity-25"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[8%] left-[5%] w-[450px] h-[450px] rounded-full pointer-events-none z-0 blur-[130px] opacity-15"
        style={{ background: 'radial-gradient(circle, var(--border-hover) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 my-auto">
        
        {/* LEFT COLUMN: Personal Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left w-full lg:max-w-[620px]"
        >
          {/* Eyebrow Label: Role & Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2 mb-6"
          >
            <span className="font-mono text-[11px] md:text-xs text-[var(--text-muted)] tracking-[0.18em] uppercase font-medium">
              SOFTWARE ENGINEER · FRONTEND DEVELOPER
            </span>
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="font-mono text-[10px] md:text-[11px] text-[var(--accent-secondary)] tracking-[0.16em] uppercase font-medium">
                OPEN TO FULL-TIME &amp; INTERNSHIP OPPORTUNITIES
              </span>
            </div>
          </motion.div>

          {/* Large Personal Intro Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <h1 className="text-display text-[var(--text-highlight)] leading-[1.08] font-[800]">
              Hi, I&apos;m <span className="text-[var(--accent-secondary)]">Ujjwal Prajapati.</span>
            </h1>
            <p className="font-display font-[700] text-[clamp(1.4rem,2.4vw,2.1rem)] text-[var(--text-primary)] mt-2 tracking-tight leading-tight">
              Building scalable, high-performance web products.
            </p>
          </motion.div>

          {/* Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body font-[300] text-[clamp(1rem,1.3vw,1.125rem)] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[540px]"
          >
            Final-year Computer Science student at XIM University (CGPA 9.16) specializing in React, Next.js, and TypeScript. Backed by solid algorithmic problem-solving with 900+ LeetCode problems solved across an 863-day active streak.
          </motion.p>

          {/* Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            {/* Primary Filled Pill Button */}
            <a
              href="#projects"
              className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-[#0B0D0E] font-body font-[600] py-3 px-7 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm flex items-center gap-2 text-sm"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Outlined Pill Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--border-subtle)] hover:border-[var(--border-hover)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:text-[var(--text-highlight)] font-body font-[500] py-3 px-6 rounded-full transition-all duration-200 flex items-center gap-2 text-sm shadow-sm"
            >
              <Download className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* 4 Stats Evidence Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-4 w-full border-t border-[var(--border-subtle)]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display font-[700] text-2xl md:text-3xl text-[var(--text-highlight)] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-[var(--text-muted)] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Authentic Photo with 3D Depth, Frame & Cursive Script */}
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
          className="w-full sm:w-[380px] md:w-[430px] lg:w-[460px] aspect-[4/5] relative rounded-3xl p-3 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] shadow-2xl group transition-colors duration-300"
        >
          {/* Main Photo Frame */}
          <div 
            className="w-full h-full relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-inner"
            style={{ transform: "translateZ(20px)" }}
          >
            <img
              src="/Ujjwal_Profile_photo.jpeg"
              alt="Ujjwal Prajapati — Software Engineer & Frontend Developer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle Editorial Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent pointer-events-none" />

            {/* Warm Ambient Flare */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle,rgba(215,185,138,0.2)_0%,transparent_70%)] pointer-events-none" />
          </div>

          {/* Floating Availability Pill (Front layer) */}
          <div 
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-subtle)] shadow-xl"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-[11px] font-mono text-[var(--text-primary)] font-medium">
                Full-Time &amp; Internships
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--accent-secondary)]">
              XIM &apos;27
            </span>
          </div>

          {/* Elegant Script Overlay: Code Design Build Repeat */}
          <div 
            className="absolute -top-3 -right-3 pointer-events-none z-20 select-none hidden sm:block"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-hover)] shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span className="font-mono text-[10px] text-[var(--accent-secondary)] uppercase tracking-wider font-semibold">
                Frontend & SDE
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
        className="w-full flex justify-center mt-10 lg:mt-6"
      >
        <a 
          href="#projects" 
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className="w-5 h-8 rounded-full border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)]/60 flex items-start justify-center p-1 transition-colors">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[var(--accent-primary)]"
            />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] uppercase tracking-wider transition-colors">
            Scroll to explore
          </span>
        </a>
      </motion.div>
    </section>
  );
}