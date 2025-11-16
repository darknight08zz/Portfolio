'use client';

import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = {
    'Frontend Development': [
      { name: 'React', exp: '2+ years', level: 95 },
      { name: 'TypeScript', exp: '1+ year', level: 85 },
      { name: 'Tailwind CSS', exp: '2+ years', level: 90 },
      { name: 'Framer Motion', exp: '1+ year', level: 80 },
      { name: 'Next.js', exp: '1+ year', level: 85 },
    ],
    'Backend Development': [
      { name: 'Node.js', exp: '2+ years', level: 90 },
      { name: 'Express.js', exp: '2+ years', level: 90 },
      { name: 'MongoDB', exp: '2+ years', level: 85 },
      { name: 'PostgreSQL', exp: '1+ year', level: 80 },
      { name: 'Python', exp: '2+ years', level: 88 },
    ],
    'AI & Data': [
      { name: 'TensorFlow', exp: '1+ year', level: 75 },
      { name: 'OpenCV', exp: '1+ year', level: 80 },
      { name: 'Pandas / NumPy', exp: '2+ years', level: 85 },
      { name: 'Machine Learning', exp: '1+ year', level: 78 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:via-purple-900/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build modern, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category}</h3>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{skill.name}</h4>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{skill.exp}</p>

                      {/* Progress bar */}
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}