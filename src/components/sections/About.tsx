'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function About() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="about" className="py-[var(--section-padding)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Visual Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Animated Gradient Border Overlay */}
              <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,var(--accent-primary),var(--accent-cyan),var(--accent-primary))] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-60 transition-opacity blur-[2px]" />
              
              {/* Card Content */}
              <div className="relative w-[340px] h-[420px] bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col items-center justify-between overflow-hidden">
                
                {/* Monogram */}
                <div className="flex-1 flex items-center justify-center">
                  <h2 className="font-display font-[800] text-[clamp(6rem,10vw,9rem)] gradient-text select-none">
                    U
                  </h2>
                </div>

                {/* Status Pill */}
                <div className="mb-8 flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                    Available for Internship / Full-time
                  </span>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6 pb-2">
                  <a href="https://github.com/darknight08zz" target="_blank" data-cursor="pointer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/ujjwal-prajapati" target="_blank" data-cursor="pointer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:prajapatiujjwal0802@gmail.com" data-cursor="pointer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4"
            >
              [About Me]
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display font-[700] text-4xl md:text-5xl text-[var(--text-primary)] mb-8 leading-tight"
            >
              Merging creativity with <br /> 
              <span className="text-[var(--accent-primary)]">engineering precision.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6 mb-10"
            >
              <p className="font-body font-[300] text-[var(--text-secondary)] text-lg leading-relaxed">
                I'm a B.Tech CSE student at XIM University (Sem VI, CGPA 9.18 | Merit Scholar) building full-stack web applications and AI/ML systems. My work spans React/Next.js frontends, Python-based ML pipelines, and neuroimaging research tools.
              </p>
              <p className="font-body font-[300] text-[var(--text-secondary)] text-lg leading-relaxed">
                I've competed in multiple national hackathons — 2nd Runner-Up at Technova Hackathon — and shipped projects ranging from real-time fraud detection to fMRI preprocessing pipelines. I thrive at the intersection of engineering rigor and product thinking.
              </p>
            </motion.div>

            {/* Highlights Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "9.18 CGPA",
                "Merit Scholar",
                "Technova 2nd Runner-Up",
                "CS50x Certified"
              ].map((chip) => (
                <span 
                  key={chip}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-[var(--text-secondary)]"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}