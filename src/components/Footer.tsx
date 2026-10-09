'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] py-14 px-6">
      <div className="max-w-7xl mx-auto space-y-10 flex flex-col items-center">
        
        {/* Row 1: Brand & Nav Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <Link href="#home" className="font-display font-[700] text-lg tracking-tight text-[var(--text-highlight)] hover:text-[var(--accent-secondary)] transition-colors">
            UJJWAL PRAJAPATI
          </Link>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--text-highlight)] transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Editorial Attribution & Social Channels */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            Built with Next.js, TypeScript & Framer Motion — XIM University CSE '27
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/darknight08zz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[var(--text-highlight)] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ujjwal-prajapati-34b44b285/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[var(--text-highlight)] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:prajapatiu0802@gmail.com" 
              aria-label="Send Email"
              className="hover:text-[var(--text-highlight)] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
