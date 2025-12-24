'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Earthquake Data Analysis',
    description: 'Analyzed global seismic data to identify patterns and high-risk zones using statistical models and interactive visualizations.',
    github: 'https://github.com/darknight08zz/Earthquake-Data-Analysis',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Science'],
  },
  {
    title: 'Automated OMR Evaluation System',
    description: 'AI-powered system to scan and grade OMR sheets using OpenCV and image processing techniques.',
    github: 'https://github.com/darknight08zz/Automated-OMR-Evaluation-Scoring-System',
    tags: ['Python', 'OpenCV', 'AI', 'Computer Vision'],
  },
  {
    title: 'ASL Alphabet Recognition',
    description: 'Real-time American Sign Language recognition using CNN and webcam input for accessibility.',
    github: 'https://github.com/darknight08zz/ASL_alphabet_recognition',
    tags: ['TensorFlow', 'Keras', 'OpenCV', 'Deep Learning'],
  },
  {
    title: 'DSA Visualizer',
    description: 'Interactive web app to visualize algorithms like BFS, DFS, and sorting with smooth animations.',
    github: 'https://github.com/darknight08zz/DSA-Visualizer',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Algorithms'],
  },
  {
    title: 'Unauth Billboard',
    description: 'Anonymous social billboard for campus expression—like a digital suggestion box with real-time updates.',
    github: 'https://github.com/darknight08zz/unauth-biilboard',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'XIMConnect',
    description: 'Campus networking platform for students to connect, collaborate, and share resources.',
    github: 'https://github.com/darknight08zz/Web-_Tech_Project_XIMConnect',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
  },
];

export function ProjectsList() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills in full-stack development, AI, and data analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-blue-500/10">
                {/* Icon section */}
                <div className="h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
                  <span className="relative group-hover:scale-110 transition-transform duration-300">💻</span>
                </div>

                {/* Content section */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}