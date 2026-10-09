'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[var(--z-nav)] transition-all duration-300 ${
        isScrolled 
          ? 'h-[68px] backdrop-blur-xl border-b border-[var(--border-subtle)] bg-[var(--nav-bg)]' 
          : 'h-[80px] bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#home" className="group flex items-center gap-2">
          <span className="bebas-neue-regular text-xl sm:text-2xl md:text-3xl tracking-[0.06em] text-[var(--text-highlight)] group-hover:text-[var(--accent-secondary)] transition-colors uppercase whitespace-nowrap">
            Ujjwal Prajapati
          </span>
        </Link>

        {/* Desktop Nav Links in Editorial Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-secondary)]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--border-subtle)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-body font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[var(--text-highlight)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Controls: Resume & ThemeToggle */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-medium py-2 px-5 border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 bg-[var(--bg-card)] text-[var(--text-primary)] hover:text-[var(--accent-secondary)] transition-all duration-200 rounded-full"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-card)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1 w-5">
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[1.5px] bg-[var(--text-primary)] rounded-full origin-center"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-[1.5px] bg-[var(--text-primary)] rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[1.5px] bg-[var(--text-primary)] rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[68px] bg-[var(--bg-primary)] z-[100] flex flex-col p-6 justify-between border-t border-[var(--border-subtle)]"
          >
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-[700] text-xl text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors border-b border-[var(--border-subtle)] pb-3"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full font-body text-sm font-semibold py-3 border border-[var(--accent-primary)] bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-full shadow-sm"
              >
                Download Resume ↓
              </a>
              <div className="flex justify-center gap-6 pt-2 font-mono text-xs text-[var(--text-muted)]">
                <a href="https://github.com/darknight08zz" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/ujjwal-prajapati-34b44b285/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
