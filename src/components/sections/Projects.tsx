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

  // Top 3 for Grayscale signature showcase
  const featuredLead = projects.find((p) => p.id === 'crowdshield') || projects[0];
  const alternatingOne = projects.find((p) => p.id === 'netsentinel') || projects[1];
  const alternatingTwo = projects.find((p) => p.id === 'vtrace') || projects[2];

  // Filter projects by category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} id="projects" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
              <span className="font-mono text-xs text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold">
                FEATURED PORTFOLIO
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="pillOutline"
              size="pill"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 text-[11px] font-mono tracking-[0.14em] uppercase hover:border-[var(--accent-grayscale-teal)]"
            >
              <span>{showAll ? 'Show Featured Spotlight' : 'View Full Catalog (9+)'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </Button>
          </motion.div>
        </div>

        {/* 1. GRAYSCALE SIGNATURE SHOWCASE (Visible when on 'all' and not expanded to full grid) */}
        {!showAll && activeCategory === 'all' && (
          <div className="space-y-12 md:space-y-16 mb-16">
            
            {/* A. Featured Lead Showcase (Wide Split with Grayscale Signature Teal Accent Bar) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-4 sm:p-6 lg:p-8"
            >
              {/* Media Preview (7 Cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)] group">
                {featuredLead.image ? (
                  <img
                    src={featuredLead.image}
                    alt={featuredLead.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--bg-card)] flex items-center justify-center font-mono text-sm text-[var(--text-muted)]">
                    {featuredLead.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/70 via-transparent to-transparent pointer-events-none" />
                {featuredLead.stats && (
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="font-mono text-[10px] uppercase tracking-wider py-1 px-2.5 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-md text-[var(--text-highlight)] border border-[var(--border-subtle)] font-medium">
                      {featuredLead.stats}
                    </span>
                  </div>
                )}
              </div>

              {/* Grayscale Featured Text Column with Accent Left Border (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center lg:border-l-4 lg:border-[var(--accent-grayscale-teal)] lg:pl-8 py-2">
                <span className="font-mono text-[10px] text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold mb-2">
                  FLAGSHIP ARCHITECTURE · {featuredLead.year}
                </span>
                <h3 className="font-display font-[800] text-2xl sm:text-3xl text-[var(--text-highlight)] tracking-tight mb-3">
                  {featuredLead.title}
                </h3>
                <p className="font-body font-[300] text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {featuredLead.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredLead.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] py-0.5 px-2.5 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div>
                  <a
                    href={featuredLead.links.github || featuredLead.links.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase py-2.5 px-6 rounded-full bg-[var(--accent-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-grayscale-teal)] hover:text-white transition-all font-semibold shadow-sm"
                  >
                    <span>Inspect Code</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* B. Grayscale Alternating Split Row 1 (Image Left, Card Right) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]"
            >
              {/* Left: Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden group bg-[var(--bg-secondary)]">
                {alternatingOne.image && (
                  <img
                    src={alternatingOne.image}
                    alt={alternatingOne.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right: Architectural Dark Card */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[var(--bg-secondary)]/60">
                <span className="font-mono text-[10px] text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold mb-2">
                  SECURITY &amp; DISTRIBUTED SYSTEMS · {alternatingOne.year}
                </span>
                <h4 className="font-display font-[800] text-xl sm:text-2xl text-[var(--text-highlight)] tracking-tight mb-3">
                  {alternatingOne.title}
                </h4>
                <p className="font-body font-[300] text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {alternatingOne.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {alternatingOne.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] py-0.5 px-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={alternatingOne.links.github || alternatingOne.links.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-highlight)] hover:text-[var(--accent-grayscale-teal)] transition-colors"
                  >
                    <span>View Repository</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* C. Grayscale Alternating Split Row 2 (Card Left, Image Right) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)]"
            >
              {/* Left on desktop, order-2 on mobile: Architectural Dark Card */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[var(--bg-secondary)]/60 order-2 lg:order-1">
                <span className="font-mono text-[10px] text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold mb-2">
                  ALGORITHMIC VISUALIZATION · {alternatingTwo.year}
                </span>
                <h4 className="font-display font-[800] text-xl sm:text-2xl text-[var(--text-highlight)] tracking-tight mb-3">
                  {alternatingTwo.title}
                </h4>
                <p className="font-body font-[300] text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {alternatingTwo.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {alternatingTwo.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] py-0.5 px-2 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <a
                    href={alternatingTwo.links.github || alternatingTwo.links.live || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-[var(--text-highlight)] hover:text-[var(--accent-grayscale-teal)] transition-colors"
                  >
                    <span>Explore VTRACE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right on desktop, order-1 on mobile: Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden group bg-[var(--bg-secondary)] order-1 lg:order-2">
                {alternatingTwo.image && (
                  <img
                    src={alternatingTwo.image}
                    alt={alternatingTwo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        )}

        {/* 2. FULL CATALOG FILTER TABS (Always visible when expanded or filtering) */}
        <div className="pt-6 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-[0.18em] uppercase">
              PROJECT CATALOGUE &amp; CASE STUDIES
            </span>

            {/* Category Filter Tabs */}
            <div className="overflow-x-auto pb-1 scrollbar-none">
              <Tabs value={activeCategory} onValueChange={(val) => setActiveCategory(val)}>
                <TabsList className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-1">
                  <TabsTrigger value="all" className="font-mono text-[11px] tracking-wider">ALL ({projects.length})</TabsTrigger>
                  <TabsTrigger value="ai" className="font-mono text-[11px] tracking-wider">AI &amp; ML (4)</TabsTrigger>
                  <TabsTrigger value="systems" className="font-mono text-[11px] tracking-wider">SYSTEMS &amp; VISION (2)</TabsTrigger>
                  <TabsTrigger value="fullstack" className="font-mono text-[11px] tracking-wider">FULLSTACK (2)</TabsTrigger>
                  <TabsTrigger value="research" className="font-mono text-[11px] tracking-wider">RESEARCH (1)</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* 3-Column Projects Grid for Full Directory or Active Filter */}
          {(showAll || activeCategory !== 'all') && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}