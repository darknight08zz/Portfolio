'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

const experienceData = [
  {
    title: 'PixScripti Technologies',
    subtitle: 'Software Development Intern',
    year: 'May 2026 – June 2026',
    description: 'Contributed to SaaS application development and modular feature engineering. Built responsive user interfaces, integrated RESTful APIs, and implemented client-side state management to deliver scalable product workflows.',
    link: { url: '/PixScripti_Ujjwal_Internship_Completion_Certificate.pdf', label: 'Completion Certificate' },
  },
  {
    title: 'IEEE XIM CS Student Branch',
    subtitle: 'Webmaster & Treasurer',
    year: '2024–2025',
    description: 'Engineered and maintained web platforms for the student branch while directing digital infrastructure and event operations across university tech fests, contributing to chapter recognition as Best Student Chapter.',
  },
];

export function Experience() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="experience" className="py-[var(--section-padding)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4 block"
          >
            [Work Experience]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-heading text-[var(--text-primary)]"
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineItem 
              key={item.title} 
              {...item} 
              isLast={index === experienceData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
