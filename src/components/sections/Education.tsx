'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

const educationData = [
  {
    title: 'XIM University',
    subtitle: 'B.Tech Computer Science & Engineering (Final Year)',
    year: '2023–2027',
    description: 'Current CGPA: 9.16 | Merit Scholarship Recipient for Academic Excellence.',
  },
  {
    title: 'LeetCode',
    subtitle: 'Data Structures & Algorithms',
    year: 'Active Streak',
    description: '900+ LeetCode problems solved with an 800+ days active streak.',
  },
  {
    title: 'Harvard CS50x',
    subtitle: 'Computer Science Certificate',
    year: '2024',
    description: 'Comprehensive introduction to computer science and programming fundamentals.',
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
    description: 'Developed a real-time fraud detection platform with high precision scoring.',
  },
];

export function Education() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="education" className="py-[var(--section-padding)] bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Editorial Section Header */}
        <div className="mb-14 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-[11px] text-[var(--accent-secondary)] tracking-[0.16em] uppercase mb-3 block"
          >
            [ 05 / ACADEMIC CREDENTIALS & ACHIEVEMENTS ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-heading text-[var(--text-highlight)]"
          >
            Education & Milestones
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