'use client';

import { motion } from 'framer-motion';

export function Skills() {
  const stack = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
    'AI / Data': ['TensorFlow', 'OpenCV', 'Pandas', 'NumPy', 'Scikit-Learn'],
    'Tools': ['Git', 'Docker', 'Linux', 'VS Code', 'Figma']
  };

  return (
    <section className="py-24 border-t border-border" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-muted tracking-widest uppercase sticky top-24">
            (04) Tech Stack
          </span>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {Object.entries(stack).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="text-muted hover:text-foreground transition-colors font-mono text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}