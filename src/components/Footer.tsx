'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] py-12 px-[5vw]">
      <div className="max-w-7xl mx-auto space-y-10 text-center flex flex-col items-center">
        
        {/* Row 1: Logo & Nav */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-display font-[800] text-2xl tracking-tighter text-[var(--text-primary)]">
            UP
          </Link>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[0.7rem] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors tracking-widest"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Description */}
        <div className="text-[var(--text-muted)] text-sm font-body font-[300]">
          Designed & built by Ujjwal Prajapati — XIM University B.Tech CSE '27
        </div>

        {/* Row 3: Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/darknight08zz" 
            target="_blank" 
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/ujjwal-prajapati" 
            target="_blank" 
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:prajapatiujjwal0802@gmail.com" 
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
