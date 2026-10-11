'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

const journeyItems = [
  {
    icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />,
    title: 'Software Engineering Intern',
    subtitle: 'PixScript Technologies',
    date: 'May 2026 – Jun 2026',
    bullets: [
      'Architected high-throughput API communication layers and unified application state across distributed modules.',
      'Optimized core rendering pipelines, eliminating layout shifts and accelerating page interaction times.',
      'Collaborated in rapid agile engineering cycles with Git workflows, code reviews, and automated testing.',
    ],
    link: {
      url: '/PixScripti_Ujjwal_Internship_Completion_Certificate.pdf',
      label: 'Internship Certificate',
    },
  },
  {
    icon: <Code className="w-4 h-4 md:w-5 md:h-5" />,
    title: 'Frontend Developer (Freelance)',
    subtitle: 'Independent Engineering',
    date: 'Jan 2024 – Present',
    bullets: [
      'Engineered custom, production-grade web applications with Next.js, React, and TypeScript for diverse clients.',
      'Crafted design-first, accessible component systems with responsive fluid typography and micro-interactions.',
      'Managed full project lifecycles from architecture design and state models to production deployment.',
    ],
  },
  {
    icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />,
    title: 'B.Tech in Computer Science',
    subtitle: 'XIM University, Bhubaneswar',
    date: '2023 – 2027',
    bullets: [
      'Current CGPA: 9.16 (Four-year Academic Merit Scholarship recipient for top academic standing).',
      'Elected Webmaster & Treasurer of IEEE XIM Computer Society Student Branch, leading technical events.',
    ],
  },
];

export function Experience() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="experience" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
        
        {/* Editorial Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
            <span className="font-mono text-xs text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold">
              CAREER &amp; EDUCATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-heading text-[var(--text-highlight)] font-[800] tracking-tight"
          >
            Experience &amp; milestones.
          </motion.h2>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative mt-8">
          {journeyItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              isLast={index === journeyItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
