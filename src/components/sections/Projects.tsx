'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useReveal } from '@/hooks/useReveal';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export function Projects() {
  const { ref, inView } = useReveal();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  // Filter projects by category first
  const categoryProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // If in 'all' category and not showAll, slice to top 3 featured; otherwise show all matches
  const displayedProjects = activeCategory === 'all' && !showAll
    ? categoryProjects.slice(0, 3)
    : categoryProjects;

  return (
    <section ref={ref} id="projects" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-3"
            >
              <span className="font-mono text-xs text-[var(--text-muted)] tracking-[0.16em] uppercase">
                [01] //
              </span>
              <span className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.16em] uppercase font-medium">
                FEATURED WORK
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-heading text-[var(--text-highlight)] font-[800] tracking-tight"
            >
              Selected software &amp; systems.
            </motion.h2>
          </div>

          {/* Toggle All vs Featured */}
          {activeCategory === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="pillOutline"
                size="pill"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 text-xs"
              >
                <span>{showAll ? 'Show Featured Only' : 'View All Projects'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </Button>
            </motion.div>
          )}
        </div>

        {/* shadcn Tabs Filter Row */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <Tabs value={activeCategory} onValueChange={(val) => setActiveCategory(val)}>
            <TabsList className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-1">
              <TabsTrigger value="all">ALL ({projects.length})</TabsTrigger>
              <TabsTrigger value="ai">AI &amp; ML (4)</TabsTrigger>
              <TabsTrigger value="systems">SYSTEMS &amp; VISION (2)</TabsTrigger>
              <TabsTrigger value="fullstack">FULLSTACK (2)</TabsTrigger>
              <TabsTrigger value="research">RESEARCH (1)</TabsTrigger>
            </TabsList>
          </Tabs>
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
                transition={{ duration: 0.4, delay: idx * 0.08 }}
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