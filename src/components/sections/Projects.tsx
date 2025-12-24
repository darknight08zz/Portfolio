'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Earthquake Data Analysis',
    description: 'Statistical modeling and pattern recognition of global seismic data.',
    tags: ['Python', 'Pandas', 'Data Science'],
    year: '2024',
    href: 'https://github.com/darknight08zz/Earthquake-Data-Analysis'
  },
  {
    title: 'Automated OMR System',
    description: 'Computer vision pipeline for automated grading of OMR sheets.',
    tags: ['OpenCV', 'Python', 'AI'],
    year: '2024',
    href: 'https://github.com/darknight08zz/Automated-OMR-Evaluation-Scoring-System'
  },
  {
    title: 'ASL Alphabet Recognition',
    description: 'Real-time sign language detection using CNNs.',
    tags: ['TensorFlow', 'Deep Learning'],
    year: '2023',
    href: 'https://github.com/darknight08zz/ASL_alphabet_recognition'
  },
  {
    title: 'DSA Visualizer',
    description: 'Interactive algorithm visualization platform.',
    tags: ['React', 'Algorithms'],
    year: '2023',
    href: 'https://github.com/darknight08zz/DSA-Visualizer'
  },
  {
    title: 'XIMConnect',
    description: 'Campus networking and collaboration platform.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    year: '2023',
    href: 'https://github.com/darknight08zz/Web-_Tech_Project_XIMConnect'
  }
];

export function Projects() {
  return (
    <section className="py-24 border-t border-border" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Label */}
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-muted tracking-widest uppercase sticky top-24">
            (03) Selected Work
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group py-8 border-b border-border first:border-t flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-muted mt-2 max-w-md">{project.description}</p>
                </div>

                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex gap-2">
                    {project.tags.map((tag, t) => (
                      <span key={t} className="text-xs font-mono text-muted uppercase tracking-wider">
                        [{tag}]
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-muted">{project.year}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/projects" className="text-sm font-mono uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
              View All Projects ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}