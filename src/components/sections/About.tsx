'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, inView } = useReveal();

  return (
    <div ref={ref} id="about" className="h-full flex flex-col justify-between">
      {/* Top Header & Copy */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-2"
        >
          <span className="font-mono text-xs text-[var(--accent-primary)] tracking-[0.16em] uppercase">
            02
          </span>
          <span className="font-mono text-xs text-[var(--accent-secondary)] tracking-[0.16em] uppercase">
            ABOUT ME
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-heading text-[var(--text-highlight)] font-[800] leading-tight mb-4"
        >
          Turning ideas <br />
          <span>into real solutions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body font-[300] text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl"
        >
          I&apos;m a Computer Science student with a strong interest in frontend development and software engineering. I enjoy building modern web applications, solving complex problems and learning new technologies.
        </motion.p>

        {/* Pill Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-body font-medium py-2.5 px-6 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all duration-200"
          >
            <span>More About Me</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          </a>
        </motion.div>
      </div>

      {/* Developer at Dual Monitors Photographic Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-lg group"
      >
        <img
          src="/about-developer.jpg"
          alt="Developer working at desk"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/50 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}