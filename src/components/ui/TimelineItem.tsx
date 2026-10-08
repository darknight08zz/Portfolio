'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  year: string;
  description?: string;
  link?: { url: string; label: string };
  isLast?: boolean;
}

export const TimelineItem = ({ title, subtitle, year, description, link, isLast }: TimelineItemProps) => {
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

        {link && (
          <div className="mt-4 pt-3 border-t border-white/5">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-cyan)] hover:text-white transition-colors"
            >
              <span>{link.label}</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};
