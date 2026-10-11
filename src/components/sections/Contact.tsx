'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code, Mail, Check, MapPin, Briefcase, Loader2, AlertCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref, inView } = useReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const accessKey =
        process.env.WEB3FORMS_ACCESS_KEY ||
        '56253944-d975-41b8-9a44-6b0479653532';

      const formData = new FormData();
      formData.append('access_key', accessKey);
      formData.append('email', email);
      formData.append('subject', `Portfolio Contact from ${email}`);
      formData.append(
        'message',
        `Hello Ujjwal,\n\nA visitor has reached out via your portfolio contact form:\nEmail: ${email}\n\nYou can reply directly to this email to connect with them.`
      );
      formData.append('from_name', 'Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage("Message sent! I'll get back to you shortly.");
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      }
    } catch {
      setStatus('error');
      setMessage('Failed to send. Please email prajapatiu0802@gmail.com directly.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
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
              className="flex items-center gap-2.5 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-grayscale-teal)]" />
              <span className="font-mono text-xs text-[var(--accent-grayscale-teal)] tracking-[0.2em] uppercase font-semibold">
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
              {/* Email Pill Input Container with Inline Feedback */}
              <div className="flex flex-col gap-2 w-full sm:w-[360px]">
                <form 
                  onSubmit={handleSubmit}
                  className="relative flex items-center bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-grayscale-teal)] focus-within:border-[var(--accent-grayscale-teal)] rounded-full p-1.5 shadow-sm transition-all duration-200 w-full"
                >
                  <div className="pl-3.5 pr-2 text-[var(--text-muted)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    disabled={status === 'loading'}
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    aria-label="Submit email"
                    data-cursor-label="Send"
                    className="w-9 h-9 rounded-full bg-[var(--accent-primary)] text-[var(--bg-primary)] flex items-center justify-center shrink-0 hover:bg-[var(--accent-grayscale-teal)] hover:text-white transition-colors disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : status === 'success' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : status === 'error' ? (
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </form>

                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-[11px] font-mono tracking-wide px-3 ${
                      status === 'success' ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {message}
                  </motion.p>
                )}
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/darknight08zz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-grayscale-teal)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ujjwal-prajapati-34b44b285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-grayscale-teal)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://leetcode.com/u/TheUjjwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="w-10 h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-grayscale-teal)] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-200"
                >
                  <Code className="w-4 h-4" />
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

        {/* Grayscale 3-Card Architecture Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16"
        >
          {/* Card 1: Location */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] border-b-4 border-b-[var(--accent-grayscale-teal)] rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mb-3 text-[var(--accent-grayscale-teal)]">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs text-[var(--text-highlight)] uppercase tracking-[0.18em] font-semibold">
              Location
            </h4>
            <div className="w-10 h-0.5 bg-[var(--accent-grayscale-teal)] my-3 opacity-80" />
            <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Bhubaneswar, India <br />
              <span className="font-mono text-[11px] text-[var(--text-muted)]">XIM University </span>
            </p>
          </div>

          {/* Card 2: Direct Email */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] border-b-4 border-b-[var(--accent-grayscale-teal)] rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mb-3 text-[var(--accent-grayscale-teal)]">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs text-[var(--text-highlight)] uppercase tracking-[0.18em] font-semibold">
              Direct Contact
            </h4>
            <div className="w-10 h-0.5 bg-[var(--accent-grayscale-teal)] my-3 opacity-80" />
            <a 
              href="mailto:prajapatiu0802@gmail.com"
              className="font-mono text-xs sm:text-sm text-[var(--text-primary)] hover:text-[var(--accent-grayscale-teal)] transition-colors"
            >
              prajapatiu0802@gmail.com
            </a>
          </div>

          {/* Card 3: Opportunities */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] border-b-4 border-b-[var(--accent-grayscale-teal)] rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mb-3 text-[var(--accent-grayscale-teal)]">
              <Briefcase className="w-4 h-4" />
            </div>
            <h4 className="font-mono text-xs text-[var(--text-highlight)] uppercase tracking-[0.18em] font-semibold">
              Status
            </h4>
            <div className="w-10 h-0.5 bg-[var(--accent-grayscale-teal)] my-3 opacity-80" />
            <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Open to SDE &amp; Frontend Roles <br />
              <span className="text-xs font-body text-[var(--accent-grayscale-teal)] font-medium">Full-Time &amp; Select Internships</span>
            </p>
          </div>
        </motion.div>

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