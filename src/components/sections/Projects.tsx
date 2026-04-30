'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useReveal } from '@/hooks/useReveal';

const filters = [
  { name: 'All', value: 'all' },
  { name: 'AI / ML', value: 'ai' },
  { name: 'Full Stack', value: 'fullstack' },
  { name: 'Research', value: 'research' },
  { name: 'Systems', value: 'systems' },
];

export function Projects() {
  const { ref, inView } = useReveal();
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="py-[var(--section-padding)] bg-[var(--bg-primary)]">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col items-center md:items-start">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4"
          >
            [Selected Work]
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="relative"
          >
            <h2 className="text-heading text-[var(--text-primary)]">Projects</h2>
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-violet-600 rounded-full" />
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-12 flex flex-wrap gap-3 justify-center md:justify-start"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-[var(--accent-primary)] text-white shadow-[0_0_15px_var(--accent-glow)]'
                  : 'border border-white/10 text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text-primary)]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 3 && !showAll && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Show All Projects
              <span className="w-8 h-[1px] bg-white/20 transition-all group-hover:w-12 group-hover:bg-[var(--accent-primary)]" />
              →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}