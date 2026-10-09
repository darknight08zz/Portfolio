'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for subtle 3D physical tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 140, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 140, damping: 20 });

  // Restrained physical tilt: -5deg to +5deg
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    x.set(mouseXPos / rect.width - 0.5);
    y.set(mouseYPos / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Warm champagne spotlight
  const background = useTransform(
    [mouseX, mouseY],
    ([xVal, yVal]) => `radial-gradient(circle at ${((xVal as number) + 0.5) * 100}% ${((yVal as number) + 0.5) * 100}%, rgba(215, 185, 138, 0.08) 0%, transparent 70%)`
  );

  const targetLink = project.links.live || project.links.github || '#';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-2xl p-4 md:p-5 transition-all duration-300 hover:shadow-2xl flex flex-col h-full overflow-hidden"
    >
      {/* Animated Subtle Cursor Spotlight */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      {/* 1. Large 16:9 Media Preview */}
      <div 
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-elevated)] flex items-center justify-center font-mono text-xs text-[var(--text-muted)]">
            {project.title}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Title & Action Row */}
      <div 
        className="flex items-center justify-between gap-3 mb-2.5 relative z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        <h3 className="font-display font-[700] text-xl text-[var(--text-highlight)] group-hover:text-[var(--accent-secondary)] transition-colors">
          {project.title}
        </h3>
        
        <a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="w-8 h-8 rounded-full border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-[#0B0D0E] flex items-center justify-center text-[var(--text-secondary)] transition-all duration-200"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* 3. Concrete Technical Description */}
      <p 
        className="font-body font-[300] text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3 relative z-10"
        style={{ transform: "translateZ(10px)" }}
      >
        {project.description}
      </p>

      {/* 4. Tech Stack Pills (Monochrome & Neutral with clean border) */}
      <div 
        className="mt-auto pt-2 flex flex-wrap gap-2 relative z-10"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:border-[var(--border-hover)] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
