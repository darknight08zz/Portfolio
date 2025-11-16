'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

interface NavLink {
  href?: string;
  label: string;
  subLinks?: SubLink[];
}

interface SubLink {
  href: string;
  label: string;
}

interface DropdownProps {
  item: NavLink;
  currentPath: string;
  closeMobileMenu?: () => void;
}

// --- Reusable Dropdown Component ---
function Dropdown({ item, currentPath, closeMobileMenu }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isParentActive = item.subLinks?.some(sub => sub.href === currentPath);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center w-full text-left rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
          isParentActive
            ? 'text-white bg-blue-600'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {item.label}
        <svg 
          className={`w-4 h-4 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="md:absolute md:right-0 mt-2 w-full md:w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20">
          {item.subLinks?.map((subLink) => (
            <Link
              key={subLink.label}
              href={subLink.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                currentPath === subLink.href
                  ? 'text-white bg-blue-500'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white'
              }`}
              onClick={handleLinkClick}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Dark Mode Toggle Button ---
function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      )}
    </button>
  );
}

// --- Main Header Component ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) =>
              link.subLinks ? (
                <Dropdown key={link.label} item={link} currentPath={currentPath} />
              ) : (
                <Link
                  key={link.label}
                  href={link.href || '/'}
                  className={`font-medium transition-colors duration-200 ${
                    currentPath === link.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <ThemeToggleButton />
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile Navigation">
            {navLinks.map((link) =>
              link.subLinks ? (
                <Dropdown 
                  key={link.label} 
                  item={link} 
                  currentPath={currentPath} 
                  closeMobileMenu={() => setIsMenuOpen(false)} 
                />
              ) : (
                <Link
                  key={link.label}
                  href={link.href || '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPath === link.href
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
