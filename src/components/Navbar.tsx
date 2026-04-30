'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, Variants } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/darknight08zz', icon: 'GH' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ujjwal-prajapati', icon: 'LI' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const logoVariants: Variants = {
    hover: (i: number) => ({
      y: [0, -4, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[var(--z-nav)] transition-all duration-300 ${
        isScrolled 
          ? 'h-[60px] backdrop-blur-xl border-b border-[var(--border-subtle)]' 
          : 'h-[80px] bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group flex items-center gap-1">
          <motion.div className="flex font-display font-[800] text-2xl tracking-tighter text-[var(--text-primary)]">
            {['U', 'P'].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                whileHover="hover"
                variants={logoVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-mono text-[0.75rem] tracking-[0.1em] transition-colors"
              >
                <span className={`${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
                  {link.name.toUpperCase()}
                </span>
                
                {/* Active/Hover Dot */}
                <AnimatePresence>
                  {(isActive || isActive === false) && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isActive ? 1 : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent-primary)] rounded-full"
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/resume.pdf"
            className="text-mono text-[0.75rem] py-1.5 px-4 border border-[var(--accent-primary)] text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_var(--accent-glow)] rounded-sm"
          >
            RESUME ↗
          </Link>
        </div>

        {/* Mobile Toggle Group */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 z-[101]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full origin-center"
            />
            <motion.div
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full"
            />
            <motion.div
              animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-[var(--text-primary)] rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[var(--bg-secondary)] z-[100] flex flex-col p-12 justify-center"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display font-[700] text-[clamp(2rem,6vw,4rem)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Icons row */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 flex gap-8"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="text-mono text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {social.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
