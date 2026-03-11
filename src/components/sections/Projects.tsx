'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Study Companion',
    description: 'AI-powered study assistant for personalized learning and resource management.',
    tags: ['AI', 'Python', 'Education'],
    year: '2024',
    href: 'https://github.com/darknight08zz/AI-Study-Companion'
  },
  /*{
    title: 'fMRI Preprocessing',
    description: 'Comprehensive preprocessing pipeline for functional MRI data analysis.',
    tags: ['Python', 'Neuroscience', 'Imaging'],
    year: '2024',
    href: 'https://github.com/darknight08zz/fmri_preproc'
  },*/
  {
    title: 'FinPath',
    description: 'Financial tracking application for personal finance management.',
    tags: ['Finance', 'Web'],
    year: '2024',
    href: 'https://github.com/darknight08zz/FinPath'
  },
  {
    title: 'AlgoVisu',
    description: 'Interactive algorithm visualization platform for educational purposes.',
    tags: ['React', 'Algorithms', 'Visualization'],
    year: '2024',
    href: 'https://github.com/darknight08zz/AlgoVisu'
  },
  /*{
    title: 'Agent AI Loan Chatbot',
    description: 'Intelligent chatbot system designed to assist with loan inquiries and processing.',
    tags: ['AI', 'NLP', 'Python'],
    year: '2024',
    href: 'https://github.com/darknight08zz/Agent-AI-loan-chatbot'
  },*/
  {
    title: 'Duplicate File Cleaner',
    description: 'Efficient utility tool for identifying and removing duplicate files to save storage.',
    tags: ['Python', 'Automation', 'CLI'],
    year: '2024',
    href: 'https://github.com/darknight08zz/duplicate-file-cleaner'
  },
  /*{
    title: 'CodeWeave',
    description: 'Collaborative coding environment and development tool.',
    tags: ['Web', 'Developer Tools'],
    year: '2024',
    href: 'https://github.com/darknight08zz/CodeWeave'
  },*/
  {
    title: 'History Sync Visualizer',
    description: 'Tool to visualize and manage browser history synchronization across devices.',
    tags: ['Visualization', 'Web', 'Data'],
    year: '2024',
    href: 'https://github.com/darknight08zz/History-Sync-Visualizer'
  },
  {
    title: 'SafeFollow',
    description: 'Safety-focused application for real-time location tracking and alerts.',
    tags: ['Mobile', 'Safety', 'GPS'],
    year: '2024',
    href: 'https://github.com/darknight08zz/SafeFollow'
  },
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
    href: 'https://github.com/darknight08zz/OMR'
  },
  /*{
    title: 'ASL Alphabet Recognition',
    description: 'Real-time sign language detection using CNNs.',
    tags: ['TensorFlow', 'Deep Learning'],
    year: '2023',
    href: 'https://github.com/darknight08zz/ASL_alphabet_recognition'
  }*/
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