'use client';

import { motion } from 'framer-motion';
import { FloatingSkillsCloud } from '@/components/ui/FloatingSkillsCloud';

export function Skills() {
  const stack = {
    'Frontend': [
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
      { name: 'Framer Motion', icon: 'https://skillicons.dev/icons?i=motion' },
    ],
    'Backend': [
      { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
      { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
      { name: 'Python', icon: 'https://skillicons.dev/icons?i=py' },
      { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
      { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongo' },
    ],
    'AI / Data': [
      { name: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow' },
      { name: 'OpenCV', icon: 'https://skillicons.dev/icons?i=opencv' },
      { name: 'Pandas', icon: 'https://skillicons.dev/icons?i=pandas' },
      { name: 'NumPy', icon: 'https://skillicons.dev/icons?i=numpy' },
      { name: 'Scikit-Learn', icon: 'https://skillicons.dev/icons?i=sklearn' },
    ],
    'Tools': [
      { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux' },
      { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode' },
      { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    ]
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
          {Object.entries(stack).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                {category}
              </h3>

              <FloatingSkillsCloud skills={items} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}