'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';

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
    if (!cardRef.current || (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)) return;
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

  // Subtle monochrome spotlight
  const background = useTransform(
    [mouseX, mouseY],
    ([xVal, yVal]) => `radial-gradient(circle at ${((xVal as number) + 0.5) * 100}% ${((yVal as number) + 0.5) * 100}%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`
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

        {/* Engineering Stats Tag if present */}
        {project.stats && (
          <div className="absolute top-2.5 right-2.5 z-10">
            <Badge variant="mono" className="bg-[var(--bg-primary)]/85 backdrop-blur-md">
              {project.stats}
            </Badge>
          </div>
        )}
      </div>

      {/* 2. Title & Action Row */}
      <div 
        className="flex items-center justify-between gap-3 mb-2.5 relative z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        <h3 className="font-display font-[700] text-xl text-[var(--text-highlight)] group-hover:text-white transition-colors">
          {project.title}
        </h3>
        
        <a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="w-8 h-8 rounded-full border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--bg-primary)] flex items-center justify-center text-[var(--text-secondary)] transition-all duration-200"
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

      {/* 4. Tech Stack Pills (shadcn Badge) */}
      <div 
        className="mt-auto pt-2 flex flex-wrap gap-1.5 relative z-10"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="tag">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
