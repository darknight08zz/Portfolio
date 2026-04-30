'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'XGBoost', 'SHAP', 'GSAP'],
  },
  {
    title: 'Systems',
    skills: ['Python', 'C/C++', 'Git', 'Docker', 'Linux', 'Kafka'],
  },
];

export function Skills() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} id="skills" className="py-[var(--section-padding)] bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4 block"
          >
            [Expertise]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-heading text-[var(--text-primary)]"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        {/* Skills Cloud / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-mono text-[0.7rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, borderColor: 'rgba(124, 58, 237, 0.6)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="px-4 py-1.5 bg-white/5 border border-[var(--border-subtle)] rounded-full text-[0.75rem] font-mono text-[var(--text-secondary)] hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}