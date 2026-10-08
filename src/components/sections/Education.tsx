'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

const educationData = [
  {
    title: 'XIM University',
    subtitle: 'B.Tech Computer Science & Engineering',
    year: '2023–2027',
    description: 'Current CGPA: 9.16 | Merit Scholarship Recipient for Academic Excellence.',
  },
  {
    title: 'LeetCode',
    subtitle: 'Data Structures & Algorithms',
    year: 'Active Streak',
    description: '900+ LeetCode problems solved with an 863-day active streak.',
  },
  {
    title: 'Harvard CS50x',
    subtitle: 'Computer Science Certificate',
    year: '2024',
    description: 'Comprehensive introduction to the intellectual enterprises of computer science and the art of programming.',
  },
  {
    title: 'Technova Hackathon',
    subtitle: '2nd Runner-Up',
    year: '2025',
    description: 'Built MarketMind AI — AI market intelligence platform for Indian retail investors.',
  },
  {
    title: 'AI Automate Hackathon',
    subtitle: 'FraudShield AI Project',
    year: '2026',
    description: 'Developed a real-time fraud detection system with high precision scoring.',
  },
];

export function Education() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="education" className="py-[var(--section-padding)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4 block"
          >
            [Academics & Milestones]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-heading text-[var(--text-primary)]"
          >
            Education & Achievements
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {educationData.map((item, index) => (
            <TimelineItem 
              key={item.title} 
              {...item} 
              isLast={index === educationData.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}