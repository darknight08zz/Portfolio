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
      'Optimized API integrations and global state management.',
      'Improved performance and fixed UI/UX issues.',
      'Collaborated in agile sprints using Git/GitHub.',
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
      'Building modern web applications for clients worldwide.',
      'Working with Next.js, React, and modern tools.',
      'Focused on performance and user experience.',
    ],
  },
  {
    icon: <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />,
    title: 'B.Tech in Computer Science',
    subtitle: 'XIM University, Bhubaneswar',
    date: '2023 – 2027',
    bullets: [
      'Current CGPA: 9.16 (Merit Scholarship Recipient).',
      'Actively involved in IEEE XIM CS Student Branch as Webmaster & Treasurer.',
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
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-xs text-[var(--text-muted)] tracking-[0.16em] uppercase">
              [04] //
            </span>
            <span className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.16em] uppercase font-medium">
              BACKGROUND &amp; MILESTONES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-heading text-[var(--text-highlight)] font-[800] tracking-tight"
          >
            Engineering journey &amp; education.
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
