'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-start">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm md:text-base font-mono text-muted mb-6 block tracking-widest uppercase">
            Full Stack Developer (01)
          </span>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-foreground">
            UJJWAL<br />
            PRAJAPATI
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed font-light">
            Building intelligent, scalable applications with modern technologies.
            Focused on performance, user experience, and engineering precision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex items-center gap-4 group cursor-pointer"
        >
          <div className="p-3 border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
          <span className="text-sm font-mono uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
            Scroll to Explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}