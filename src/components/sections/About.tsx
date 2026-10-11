'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Award, BookOpen, Activity } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function About() {
  const { ref, inView } = useReveal();

  return (
    <div ref={ref} id="about" className="h-full flex flex-col justify-between">
      {/* Top Header & Copy */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
          <span className="font-mono text-xs text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold">
            ABOUT ME
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-heading text-[var(--text-highlight)] font-[800] leading-tight mb-4 tracking-tight"
        >
          Crafting digital products with <br />
          <span className="text-[var(--text-secondary)]">precision, scale &amp; purpose.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body font-[300] text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl"
        >
          I bridge deep algorithmic discipline with modern frontend craftsmanship. From architecting distributed systems and real-time monitoring tools to polishing fluid interfaces with React and TypeScript, I build software designed to perform reliably at scale while feeling effortlessly intuitive.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Button asChild variant="pillOutline" size="pill" className="gap-2 font-mono text-[11px] tracking-[0.14em] uppercase hover:border-[var(--accent-grayscale-teal)]">
            <a href="#experience">
              <span>View Background &amp; Milestones</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Architectural Engineering Credentials & Foundations Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-5 sm:p-6 flex flex-col justify-between"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-grayscale-teal)]" />
            <h3 className="font-display font-[700] text-xs sm:text-sm tracking-wide text-[var(--text-highlight)] uppercase">
              Engineering Credentials &amp; Rigor
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
            XIM &apos;27
          </span>
        </div>

        {/* Credential Rows */}
        <div className="space-y-3">
          {/* Row 1: Academics */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors hover:border-[var(--border-hover)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-grayscale-teal)] shrink-0 border border-[var(--border-subtle)]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-body text-[var(--text-muted)] font-medium">Academics &amp; Merit</p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-highlight)] truncate">B.Tech Computer Science (CGPA 9.16)</p>
              </div>
            </div>
            <span className="text-[11px] font-body font-medium text-[var(--accent-grayscale-teal)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] shrink-0">
              Merit Scholar
            </span>
          </div>

          {/* Row 2: DSA */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors hover:border-[var(--border-hover)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-grayscale-teal)] shrink-0 border border-[var(--border-subtle)]">
                <Activity className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-body text-[var(--text-muted)] font-medium">Algorithmic Practice</p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-highlight)] truncate">LeetCode Problem Solving</p>
              </div>
            </div>
            <span className="text-[11px] font-body font-medium text-[var(--accent-grayscale-teal)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] shrink-0">
              900+ · 800+ Streak
            </span>
          </div>

          {/* Row 3: Leadership */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors hover:border-[var(--border-hover)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-grayscale-teal)] shrink-0 border border-[var(--border-subtle)]">
                <Award className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-body text-[var(--text-muted)] font-medium">Leadership</p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-highlight)] truncate">IEEE CS Student Branch</p>
              </div>
            </div>
            <span className="text-[11px] font-body text-[var(--text-secondary)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] shrink-0">
              Treasurer &amp; Webmaster
            </span>
          </div>

          {/* Row 4: Core Specialty */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors hover:border-[var(--border-hover)]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-grayscale-teal)] shrink-0 border border-[var(--border-subtle)]">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-body text-[var(--text-muted)] font-medium">Primary Focus</p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--text-highlight)] truncate">Frontend Systems &amp; Distributed Web</p>
              </div>
            </div>
            <span className="text-[11px] font-body text-[var(--text-secondary)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)] shrink-0">
              React · Next.js · TS
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}