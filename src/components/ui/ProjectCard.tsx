'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/data/projects';
import { Github, ExternalLink, Star } from 'lucide-react';

const categoryColors = {
  ai: 'text-violet-400 bg-violet-400/10',
  fullstack: 'text-cyan-400 bg-cyan-400/10',
  systems: 'text-amber-400 bg-amber-400/10',
  research: 'text-teal-400 bg-teal-400/10',
};

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the motion
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation values
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(124,58,237,0.08) 0%, transparent 80%)`
  );

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all duration-500 hover:border-[var(--accent-primary)]/40 hover:shadow-[0_0_30px_var(--accent-glow)] flex flex-col h-full overflow-hidden"
    >
      {/* Animated Mouse Following Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* TOP ROW: Category & Year */}
      <div className="flex justify-between items-center mb-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${categoryColors[project.category]}`}>
          {project.category}
        </span>
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          {project.year}
        </span>
      </div>

      {/* MIDDLE: Title */}
      <div className="mb-3 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-display font-[600] text-xl text-[var(--text-primary)] flex items-center gap-2">
          {project.highlight && <Star className="w-4 h-4 text-[var(--accent-warm)] fill-[var(--accent-warm)]" />}
          {project.title}
        </h3>
      </div>

      {/* BODY: Description */}
      <div className="mb-4 flex-grow relative z-10" style={{ transform: "translateZ(15px)" }}>
        <p className="font-body font-[300] text-[var(--text-secondary)] text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Links */}
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-[var(--border-subtle)] relative z-10" style={{ transform: "translateZ(40px)" }}>
        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
          {project.year}
        </span>
        
        <div className="flex items-center gap-4">
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              data-cursor="pointer"
              className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              CODE
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live}
              target="_blank"
              data-cursor="pointer"
              className="flex items-center gap-2 text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              LIVE
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
