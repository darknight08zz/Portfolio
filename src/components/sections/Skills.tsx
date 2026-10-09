'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '@/hooks/useReveal';
import { Badge } from '@/components/ui/badge';
import { 
  GitBranch, 
  Binary, 
  Boxes, 
  CheckCircle2, 
  Flame, 
  Layers, 
  Database, 
  Server, 
  Cpu,
  Coffee,
  Terminal,
  Send
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const skillTiers: { number: string; title: string; items: TechItem[] }[] = [
  {
    number: '01',
    title: 'Core Engineering',
    items: [
      {
        name: 'DSA',
        icon: <Binary className="w-3.5 h-3.5 text-[var(--accent-primary)]" />,
      },
      {
        name: 'OOP',
        icon: <Boxes className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />,
      },
      {
        name: 'Problem Solving',
        icon: <Flame className="w-3.5 h-3.5 text-amber-500" />,
      },
      {
        name: 'Git/GitHub',
        icon: <GitBranch className="w-3.5 h-3.5 text-[#F05032]" />,
      },
      {
        name: 'Testing',
        icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />,
      },
    ],
  },
  {
    number: '02',
    title: 'Frontend',
    items: [
      {
        name: 'React',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#58C4DC]" viewBox="0 0 24 24" fill="currentColor">
            <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        icon: (
          <div className="w-3.5 h-3.5 rounded-full bg-white text-black flex items-center justify-center font-bold text-[8px] leading-none">
            N
          </div>
        ),
      },
      {
        name: 'TypeScript',
        icon: (
          <div className="w-3.5 h-3.5 rounded bg-[#3178C6] text-white flex items-center justify-center font-bold text-[8px] leading-none">
            TS
          </div>
        ),
      },
      {
        name: 'JavaScript',
        icon: (
          <div className="w-3.5 h-3.5 rounded bg-[#F7DF1E] text-black flex items-center justify-center font-bold text-[8px] leading-none">
            JS
          </div>
        ),
      },
      {
        name: 'HTML',
        icon: (
          <div className="w-3.5 h-3.5 rounded bg-[#E34F26] text-white flex items-center justify-center font-bold text-[7px] leading-none">
            5
          </div>
        ),
      },
      {
        name: 'CSS',
        icon: (
          <div className="w-3.5 h-3.5 rounded bg-[#1572B6] text-white flex items-center justify-center font-bold text-[7px] leading-none">
            #
          </div>
        ),
      },
      {
        name: 'Tailwind CSS',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.05.26 1.79 1.02 2.62 1.87C14.47 11.75 16.08 13.4 20 13.4c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.05-.26-1.79-1.02-2.62-1.87C17.53 7.65 15.92 6 12 6zm-8 7.4c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5 1.05.26 1.79 1.02 2.62 1.87C6.47 19.15 8.08 20.8 12 20.8c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-1.05-.26-1.79-1.02-2.62-1.87C11.53 15.05 9.92 13.4 6 13.4z" />
          </svg>
        ),
      },
      {
        name: 'Framer Motion',
        icon: (
          <svg className="w-3.5 h-3.5 text-[var(--accent-primary)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
          </svg>
        ),
      },
    ],
  },
  {
    number: '03',
    title: 'Backend & APIs',
    items: [
      {
        name: 'Node.js',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
          </svg>
        ),
      },
      {
        name: 'FastAPI',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 13h7l-1 9 9-11h-7l1-9z" />
          </svg>
        ),
      },
      {
        name: 'REST APIs',
        icon: <Server className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />,
      },
    ],
  },
  {
    number: '04',
    title: 'Data',
    items: [
      {
        name: 'PostgreSQL',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l4 2.5-4 2.5z" />
          </svg>
        ),
      },
      {
        name: 'MongoDB',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.5C12 1.5 6 7.5 6 13.5c0 3.3 2.7 6 6 9 3.3-3 6-5.7 6-9 0-6-6-12-6-12zm0 18.5c-2.2-2.2-4-4.5-4-6.5 0-4 4-8.5 4-8.5s4 4.5 4 8.5c0 2-1.8 4.3-4 6.5z" />
          </svg>
        ),
      },
      {
        name: 'MySQL',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="2" />
          </svg>
        ),
      },
      {
        name: 'SQLite',
        icon: <Database className="w-3.5 h-3.5 text-[#003B57]" />,
      },
      {
        name: 'Supabase',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 2L3 14.5h8.5L10.5 22 21 9.5h-8.5L13.5 2z" />
          </svg>
        ),
      },
    ],
  },
  {
    number: '05',
    title: 'Languages & Tools',
    items: [
      {
        name: 'Java',
        icon: <Coffee className="w-3.5 h-3.5 text-[#E76F00]" />,
      },
      {
        name: 'C++',
        icon: <Cpu className="w-3.5 h-3.5 text-[#00599C]" />,
      },
      {
        name: 'Python',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9 2c-4 0-3.8 1.7-3.8 1.7l0 1.8h3.9v.6H6.1s-2.6.3-2.6 3.8 2.3 3.7 2.3 3.7h1.4v-1.8s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2.1V4.2S15.6 2 11.9 2zm-1.1 1.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12.1 22c4 0 3.8-1.7 3.8-1.7l0-1.8H12v-.6h5.9s2.6-.3 2.6-3.8-2.3-3.7-2.3-3.7h-1.4v1.8s.1 2.2-2.2 2.2H10.8s-2.1 0-2.1 2.1v3.3s-.3 2.2 3.4 2.2zm1.1-1.2c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
          </svg>
        ),
      },
      {
        name: 'Docker',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 13.5c0 4.5 4 8 10 8s10-3.5 10-8H2zm4-6h2.5v2.5H6V7.5zm3.5 0H12v2.5H9.5V7.5zm3.5 0h2.5v2.5H13V7.5zm-7 3.5h2.5v2.5H6V11zm3.5 0H12v2.5H9.5V11zm3.5 0h2.5v2.5H13V11zm3.5 0h2.5v2.5H16.5V11z" />
          </svg>
        ),
      },
      {
        name: 'Vite',
        icon: (
          <svg className="w-3.5 h-3.5 text-[#646CFF]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5 3.5L12.5 22 10 13l-6-2.5 17.5-7z" />
          </svg>
        ),
      },
      {
        name: 'Vercel',
        icon: (
          <svg className="w-3 h-3 text-[var(--text-highlight)] fill-current" viewBox="0 0 24 24">
            <path d="M12 1L24 22H0L12 1Z" />
          </svg>
        ),
      },
      {
        name: 'Postman',
        icon: <Send className="w-3.5 h-3.5 text-[#FF6C37]" />,
      },
    ],
  },
];

export function Skills() {
  const { ref, inView } = useReveal();

  return (
    <div ref={ref} id="skills" className="h-full flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-2 mb-3"
        >
          <span className="font-mono text-xs text-[var(--text-muted)] tracking-[0.16em] uppercase">
            [03] //
          </span>
          <span className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.16em] uppercase font-medium">
            SKILLS &amp; CAPABILITIES
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-heading text-[var(--text-highlight)] font-[800] leading-tight mb-6 tracking-tight"
        >
          Technical competencies.
        </motion.h2>
      </div>

      {/* 5 Grouped Rows: Core Engineering, Frontend, Backend & APIs, Data, Languages & Tools */}
      <div className="space-y-3 my-auto">
        {skillTiers.map((tier, idx) => (
          <motion.div
            key={tier.title}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.07 + 0.12 }}
            className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-3 p-3.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-200"
          >
            {/* Category Pill Tag */}
            <div className="w-full sm:w-36 shrink-0 pt-1">
              <span className="text-[11px] font-mono text-[var(--text-secondary)] uppercase tracking-wider font-medium flex items-center gap-1.5">
                <span className="text-[10px] text-[var(--text-muted)] font-bold">{tier.number}</span>
                <span className="text-[var(--border-subtle)]">//</span>
                <span>{tier.title}</span>
              </span>
            </div>

            {/* Tech Item Pills in Row (shadcn Badge) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {tier.items.map((item) => (
                <Badge
                  key={item.name}
                  variant="tag"
                  className="gap-1.5 py-1 px-3 bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)]"
                >
                  <span className="shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-xs font-body font-medium text-[var(--text-primary)]">
                    {item.name}
                  </span>
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}