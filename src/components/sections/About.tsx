'use client';

import { motion } from 'framer-motion';
import { Code, Database, Brain, Target } from 'lucide-react';

export function About() {
  const highlights = [
    { label: 'DSA Solved', value: '200+', icon: Brain },
    { label: 'Projects', value: '15+', icon: Code },
    { label: 'Tech Stack', value: '10+', icon: Database },
    { label: 'Experience', value: '2+ yrs', icon: Target },
  ];

  return (
    <section className="py-24 border-t border-border" id="about">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Section Label */}
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-muted tracking-widest uppercase sticky top-24">
            (02) About Me
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Merging creativity with<br />
              engineering precision.
            </h2>

            <div className="space-y-6 text-lg text-muted leading-relaxed max-w-2xl mb-12">
              <p>
                My journey in technology began with a curiosity for how things work under the hood.
                What started as simple script edits has evolved into a passion for building complex,
                scalable web applications and exploring the frontiers of Artificial Intelligence.
              </p>
              <p>
                Currently in my pre-final year at <strong className="text-foreground">ABES Engineering College</strong>,
                I specialize in full-stack development using the MERN stack and Next.js, while simultaneously
                deepening my understanding of Data Structures and Algorithms. I believe that great software
                is not just about writing code—it's about solving real-world problems with elegance and efficiency.
              </p>
              <p>
                When I'm not coding, you can find me solving problems on LeetCode, exploring new AI models,
                or participating in hackathons to challenge my limits. I thrive in environments that value
                innovation, continuous learning, and clean, maintainable architecture.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {highlights.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}