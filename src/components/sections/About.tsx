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
          <span className="font-mono text-xs text-[var(--text-muted)] tracking-[0.16em] uppercase">
            [02] //
          </span>
          <span className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.16em] uppercase font-medium">
            ENGINEERING PROFILE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-heading text-[var(--text-highlight)] font-[800] leading-tight mb-4 tracking-tight"
        >
          Principled engineering, <br />
          <span className="text-[var(--text-secondary)]">from algorithms to UI.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body font-[300] text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl"
        >
          I approach frontend and software development with an emphasis on deterministic state, render efficiency, and strict type safety. Rather than treating frontend as mere visuals, I bridge rigorous algorithmic problem-solving with high-caliber user experience.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Button asChild variant="pillOutline" size="pill" className="gap-2">
            <a href="#experience">
              <span>View Background &amp; Milestones</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Handcrafted Engineering Spec Artifact (Replaces generic stock photo) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            <span className="font-mono text-[11px] text-[var(--text-muted)] ml-2">
              engineer_spec.ts
            </span>
          </div>
          <Badge variant="active">ACTIVE VERIFIED</Badge>
        </div>

        {/* Spec Content */}
        <div className="p-4 sm:p-5 font-mono text-xs space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0">
              <BookOpen className="w-3.5 h-3.5" />
              <span>ACADEMICS</span>
            </div>
            <div className="sm:text-right text-[var(--text-primary)]">
              <span className="font-semibold">XIM University</span> (CGPA 9.16 · Merit Scholar)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0">
              <Activity className="w-3.5 h-3.5" />
              <span>DSA RIGOR</span>
            </div>
            <div className="sm:text-right text-[var(--text-primary)]">
              <span className="font-semibold">900+ LeetCode</span> (800+ Days Active Daily Streak)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 pb-3 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0">
              <Award className="w-3.5 h-3.5" />
              <span>COMMUNITY</span>
            </div>
            <div className="sm:text-right text-[var(--text-primary)]">
              IEEE XIM CS Student Branch (Treasurer &amp; Webmaster)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 pt-1">
            <div className="flex items-center gap-2 text-[var(--text-muted)] shrink-0">
              <Terminal className="w-3.5 h-3.5" />
              <span>CORE SPECIALTY</span>
            </div>
            <div className="sm:text-right text-[var(--text-secondary)]">
              React 19 · Next.js · TypeScript · Systems
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}