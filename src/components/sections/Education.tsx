'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Code, Trophy } from 'lucide-react';

export function Education() {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Computer Science',
      subtitle: 'ABES Engineering College',
      year: 'Pre-final year',
      description: 'Specializing in Web Development, Data Structures, and AI/ML with focus on building scalable applications.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Problem Solving Champion',
      subtitle: 'LeetCode • GeeksforGeeks • HackerRank',
      year: '200+ Problems Solved',
      description: 'Demonstrated strong algorithmic thinking and consistency in competitive programming across multiple platforms.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Trophy,
      title: 'Hackathon Winner',
      subtitle: 'Shiv Nadar University Hackathon',
      year: '3rd Place',
      description: 'Secured 3rd place by building an innovative web application with a team in 36 hours under time pressure.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Tech Excellence',
      subtitle: 'Full-Stack Development',
      year: '15+ Projects',
      description: 'Created diverse projects spanning AI, backend optimization, and modern frontend frameworks.',
      color: 'from-orange-500 to-red-500',
    },
  ];

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
    <section className="section bg-gradient-to-b from-transparent via-green-50/20 to-transparent dark:via-green-900/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            My journey through education, problem-solving, and professional accomplishments.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 p-6 flex flex-col">
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
                    {item.year}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}