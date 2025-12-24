'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "prajapatiujjwal0802@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 border-t border-border" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <span className="text-sm font-mono text-muted tracking-widest uppercase sticky top-24">
            (06) Contact
          </span>
        </div>

        <div className="md:col-span-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="overflow-hidden mb-8">
              <motion.h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                viewport={{ once: true }}
              >
                Let's build something<br />
                extraordinary.
              </motion.h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted max-w-xl mb-12"
            >
              I'm currently available for freelance work and open to full-time opportunities.
              If you have a project in mind or just want to chat, feel free to reach out.
            </motion.p>

            <motion.div variants={containerVariants} className="flex flex-col gap-6">

              {/* Email with Copy Interaction */}
              <motion.div variants={itemVariants} className="group relative">
                <div className="flex items-center justify-between border-b border-border pb-4 hover:border-foreground transition-colors">
                  <Link
                    href={`mailto:${email}`}
                    className="flex-1 flex items-center justify-between"
                  >
                    <span className="text-xl font-medium text-foreground group-hover:text-blue-500 transition-colors">
                      {email}
                    </span>
                    <ArrowUpRight className="text-muted group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 md:mr-10" />
                  </Link>

                  <button
                    onClick={handleCopy}
                    className="p-2 -mr-2 rounded-full hover:bg-muted/10 transition-colors"
                    aria-label="Copy email"
                  >
                    <AnimatePresence mode='wait'>
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Check className="w-5 h-5 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                        >
                          <Copy className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 -top-8 text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* LinkedIn */}
              <motion.div variants={itemVariants}>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="group flex items-center justify-between border-b border-border pb-4 hover:border-foreground transition-all"
                >
                  <span className="text-xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">LinkedIn</span>
                  <ArrowUpRight className="text-muted group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
              </motion.div>

              {/* GitHub */}
              <motion.div variants={itemVariants}>
                <Link
                  href="https://github.com/darknight08zz"
                  target="_blank"
                  className="group flex items-center justify-between border-b border-border pb-4 hover:border-foreground transition-all"
                >
                  <span className="text-xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">GitHub</span>
                  <ArrowUpRight className="text-muted group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
              </motion.div>

            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-24 pt-8 border-t border-border flex justify-between items-center text-xs text-muted font-mono uppercase tracking-widest"
            >
              <span>© {new Date().getFullYear()} Ujjwal Prajapati</span>
              <span>India</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}