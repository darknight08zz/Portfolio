'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref, inView } = useReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.location.href = `mailto:prajapatiu0802@gmail.com?subject=Contact from Portfolio&body=Hello Ujjwal, my email is ${encodeURIComponent(email)}`;
    setTimeout(() => setSubmitted(false), 4000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer ref={ref} id="contact" className="relative pt-24 pb-12 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-hidden">
      
      {/* Background Curved Horizon Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-luminosity">
        <img
          src="/contact-horizon.jpg"
          alt="Curved Horizon"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
          
          {/* LEFT: Editorial Heading & Input */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-2"
            >
              <span className="font-mono text-xs text-[var(--accent-primary)] tracking-[0.16em] uppercase">
                05
              </span>
              <span className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.16em] uppercase font-medium">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-heading text-[var(--text-highlight)] font-[800] leading-tight mb-4"
            >
              Let&apos;s build something useful.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-body font-[300] text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-8"
            >
              Currently open to full-time software engineering and frontend development opportunities, as well as relevant internships.
            </motion.p>

            {/* Interactive Email Pill + Social Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Email Pill Input */}
              <form 
                onSubmit={handleSubmit}
                className="relative flex items-center bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] focus-within:border-[var(--border-hover)] rounded-full p-1.5 shadow-sm transition-all duration-200 w-full sm:w-[360px]"
              >
                <div className="pl-3.5 pr-2 text-[var(--text-muted)]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="w-9 h-9 rounded-full bg-[var(--accent-primary)] text-[var(--bg-primary)] flex items-center justify-center shrink-0 hover:bg-white transition-colors"
                >
                  {submitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/darknight08zz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--border-hover)] flex items-center justify-center transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ujjwal-prajapati-34b44b285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--border-hover)] flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--border-hover)] flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Floating Cursive Script Accent */}
          <div className="hidden lg:flex items-center justify-center pr-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif italic text-3xl xl:text-4xl text-[var(--text-secondary)] opacity-80 select-none tracking-wide text-right"
            >
              Open <br />
              <span className="pl-6">for new</span> <br />
              <span className="pl-12 text-[var(--text-highlight)]">opportunities.</span>
            </motion.div>
          </div>
        </div>

        {/* Minimal Bottom Editorial Footer */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="bebas-neue-regular text-lg tracking-[0.06em] text-[var(--text-highlight)] uppercase">
              Ujjwal Prajapati
            </span>
            <span className="hidden sm:inline text-[var(--border-subtle)]">•</span>
            <a
              href="mailto:prajapatiu0802@gmail.com"
              className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-highlight)] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>prajapatiu0802@gmail.com</span>
            </a>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-body text-[var(--text-muted)] hover:text-[var(--text-highlight)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            © 2026 Ujjwal Prajapati. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}