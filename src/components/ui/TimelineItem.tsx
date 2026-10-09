'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { FileText, Circle } from 'lucide-react';

export interface TimelineItemProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  date?: string;
  year?: string;
  description?: string;
  bullets?: string[];
  link?: { url: string; label: string };
  isLast?: boolean;
}

export const TimelineItem = ({
  icon,
  title,
  subtitle,
  date,
  year,
  description,
  bullets = [],
  link,
  isLast = false,
}: TimelineItemProps) => {
  const { ref, inView } = useReveal();
  const displayDate = date || year || '';

  // Combine single description into bullets if bullets is empty
  const bulletItems = bullets.length > 0 
    ? bullets 
    : description 
      ? [description] 
      : [];

  return (
    <div ref={ref} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
      {/* Vertical Spine Line */}
      {!isLast && (
        <div className="absolute left-[17px] md:left-[21px] top-6 bottom-0 w-[1px] bg-[var(--border-subtle)]" />
      )}

      {/* Golden Circular Node with Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.35, ease: 'backOut' }}
        className="absolute left-0 top-1 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-primary)]/80 flex items-center justify-center text-[var(--accent-primary)] shadow-md z-10"
      >
        {icon || <Circle className="w-3.5 h-3.5 fill-[var(--accent-primary)]" />}
      </motion.div>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="flex flex-col"
      >
        {/* Title & Date Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
          <h3 className="font-display font-[700] text-lg md:text-xl text-[var(--text-highlight)]">
            {title}
          </h3>
          <span className="font-mono text-xs text-[var(--accent-secondary)] tracking-wider">
            {displayDate}
          </span>
        </div>

        {/* Company / Subtitle */}
        <p className="font-body font-[500] text-sm text-[var(--text-secondary)] mb-3">
          {subtitle}
        </p>

        {/* Bullet Points */}
        {bulletItems.length > 0 && (
          <ul className="space-y-1.5 font-body font-[300] text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
            {bulletItems.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--accent-primary)] mt-1.5 w-1 h-1 rounded-full bg-[var(--accent-primary)] shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Optional Completion Link / Certificate */}
        {link && (
          <div className="mt-3">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{link.label}</span>
              <span>↗</span>
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
};
