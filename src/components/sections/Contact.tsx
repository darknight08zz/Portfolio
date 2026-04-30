'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export function Contact() {
  const { ref, inView } = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-[18px] h-[18px] text-[var(--accent-secondary)]" />,
      label: 'prajapatiujjwal0802@gmail.com',
      href: 'mailto:prajapatiujjwal0802@gmail.com',
    },
    {
      icon: <Github className="w-[18px] h-[18px] text-[var(--accent-secondary)]" />,
      label: 'github.com/darknight08zz',
      href: 'https://github.com/darknight08zz',
    },
    {
      icon: <Linkedin className="w-[18px] h-[18px] text-[var(--accent-secondary)]" />,
      label: 'linkedin.com/in/ujjwal-prajapati',
      href: 'https://linkedin.com/in/ujjwal-prajapati',
    },
    {
      icon: <MapPin className="w-[18px] h-[18px] text-[var(--accent-secondary)]" />,
      label: 'Bhubaneswar, Odisha, India',
      href: null,
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-[var(--section-padding)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="font-mono text-[0.75rem] text-[var(--accent-cyan)] tracking-[0.15em] uppercase mb-4 block"
          >
            [Get In Touch]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-heading text-[var(--text-primary)] max-w-2xl"
          >
            Let's build something extraordinary.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          
          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl py-3 px-4 text-[var(--text-primary)] font-body font-[300] focus:outline-none focus:border-[var(--accent-primary)]/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl py-3 px-4 text-[var(--text-primary)] font-body font-[300] focus:outline-none focus:border-[var(--accent-primary)]/50 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Project Inquiry / Internship / Collaboration"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl py-3 px-4 text-[var(--text-primary)] font-body font-[300] focus:outline-none focus:border-[var(--accent-primary)]/50 transition-colors"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl py-3 px-4 text-[var(--text-primary)] font-body font-[300] focus:outline-none focus:border-[var(--accent-primary)]/50 transition-colors resize-none"
              />
              <button
                type="submit"
                data-cursor="pointer"
                className="w-full bg-[var(--accent-primary)] text-white font-display font-[500] py-3 rounded-xl hover:shadow-[0_0_20px_var(--accent-glow)] transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* RIGHT: Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Content = (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-4 flex items-center gap-3 hover:border-[var(--accent-primary)]/40 transition-colors"
                >
                  {info.icon}
                  <span className="font-body font-[300] text-[var(--text-secondary)] text-sm">
                    {info.label}
                  </span>
                </motion.div>
              );

              return info.href ? (
                <a 
                  key={idx} 
                  href={info.href} 
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  className="block"
                >
                  {Content}
                </a>
              ) : (
                <div key={idx}>{Content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}