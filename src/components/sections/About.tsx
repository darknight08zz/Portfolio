'use client';

import { motion } from 'framer-motion';
import { Code, Database, Brain, Target } from 'lucide-react';

export function About() {
  const highlights = [
    { label: 'Projects', value: '15+', icon: Code },
    { label: 'Technologies', value: '10+', icon: Database },
    { label: 'Experience', value: '2+ yrs', icon: Target },
    { label: 'DSA Solved', value: '200+', icon: Brain },
  ];

  return (
    <section className="section bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Full-stack developer passionate about creating beautiful, functional solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with a keen eye for clean code and user-centric design. 
              My journey spans across modern JavaScript frameworks, backend optimization, and cutting-edge AI technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Currently in my pre-final year at <span className="font-semibold text-blue-600 dark:text-blue-400">ABES Engineering College</span>, 
              I blend analytical thinking with creative problem-solving to build impactful solutions—from AI-powered computer vision systems 
              to real-time campus networking platforms.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
                Full-Stack Development
              </div>
              <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium">
                AI & ML
              </div>
              <div className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-700 dark:text-pink-300 text-sm font-medium">
                Data Science
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}