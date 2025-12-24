'use client';

import { motion } from 'framer-motion';

export function Education() {
  const history = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'XIM University',
      period: '2023 - 2027',
      description: 'Major in Computer Science. Specialized in AI/ML and Data Structures.',
    },
    {
      title: 'Problem Solving Champion',
      institution: 'LeetCode / GFG',
      period: 'Ongoing',
      description: 'Solved 200+ problems across various platforms. 3-star rating on CodeChef.',
    },
    {
      title: 'Hackathon Achievements',
      institution: 'Various',
      period: '2023 - 2024',
      description: 'Won 3rd place at Shiv Nadar University Hackathon. Finalist in Smart India Hackathon internal rounds.',
    }
  ];

  return (
    <section className="py-24 border-t border-border" id="education">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-muted tracking-widest uppercase sticky top-24">
            (05) Education
          </span>
        </div>

        <div className="md:col-span-3 space-y-12">
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-baseline"
            >
              <span className="text-sm font-mono text-muted w-32 shrink-0">{item.period}</span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted text-sm mb-2">{item.institution}</p>
                <p className="text-muted text-sm max-w-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}