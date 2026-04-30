'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  year: string;
  description?: string;
  isLast?: boolean;
}

const TimelineItem = ({ title, subtitle, year, description, isLast }: TimelineItemProps) => {
  const { ref, inView } = useReveal();
  
  return (
    <div ref={ref} className="relative pl-12 pb-12 last:pb-0">
      {/* Vertical Line */}
      {!isLast && (
        <motion.div 
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-primary)] to-transparent" 
        />
      )}
      
      {/* Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-primary)]" 
      />
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-6 hover:border-[var(--accent-primary)]/40 transition-colors"
      >
        <span className="absolute top-6 right-6 font-mono text-[11px] text-[var(--accent-warm)]">
          {year}
        </span>
        
        <h3 className="font-display font-[600] text-lg text-[var(--text-primary)] mb-1 pr-16">
          {title}
        </h3>
        <p className="font-body font-[400] text-[var(--accent-cyan)] text-sm mb-3">
          {subtitle}
        </p>
        
        {description && (
          <p className="font-body font-[300] text-[var(--text-secondary)] text-sm leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
};

const educationData = [
  {
    title: 'XIM University',
    subtitle: 'B.Tech Computer Science & Engineering',
    year: '2023–2027',
    description: 'Current CGPA: 9.18 | Merit Scholarship Recipient for Academic Excellence.',
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
    <section ref={ref} id="education" className="py-[var(--section-padding)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4 block"
          >
            [Journey]
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