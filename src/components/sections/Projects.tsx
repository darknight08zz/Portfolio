'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useReveal } from '@/hooks/useReveal';

export function Projects() {
  const { ref, inView } = useReveal();
  const [showAll, setShowAll] = useState(false);

  // Reference order: CrowdShield (id: 1), NetSentinel (id: 2), VTRACE (id: 3)
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Editorial Section Header Matching Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-2"
            >
              <span className="font-mono text-xs text-[var(--accent-primary)] tracking-[0.16em] uppercase">
                01
              </span>
              <span className="font-mono text-xs text-[var(--accent-secondary)] tracking-[0.16em] uppercase">
                FEATURED PROJECTS
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-heading text-[var(--text-highlight)] font-[800]"
            >
              Projects I&apos;m proud of
            </motion.h2>
          </div>

          {/* View All Projects Pill Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-xs font-body font-medium py-2.5 px-5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-highlight)] transition-all duration-200"
            >
              <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </button>
          </motion.div>
        </div>

        {/* 3-Column Projects Grid with Large Media Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}