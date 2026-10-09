'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-[68px] h-[34px] rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)]" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className="relative flex items-center bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] p-1 rounded-full transition-colors cursor-pointer select-none"
    >
      {/* Sun Button */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
          !isDark ? 'text-[var(--text-highlight)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      {/* Moon Button */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
          isDark ? 'text-[var(--text-highlight)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </button>

      {/* Sliding Active Indicator Thumb */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        className="absolute top-1 bottom-1 w-7 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hover)] shadow-sm pointer-events-none"
        style={{
          left: isDark ? 'calc(100% - 32px)' : '4px',
        }}
      />
    </div>
  );
}
