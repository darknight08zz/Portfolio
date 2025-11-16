'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect and create something amazing together!
        </p>

        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <div>
              <p className="font-medium">Email</p>
              <Link
                href="mailto:prajapatiujjwal0802@gmail.com"
                className="text-blue-600 hover:underline"
              >
                prajapatiujjwal0802@gmail.com
              </Link>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <Link
                href="tel:+919580151193"
                className="text-blue-600 hover:underline"
              >
                +91 95801 51193
              </Link>
            </div>
            <div>
              <p className="font-medium">GitHub</p>
              <Link
                href="https://github.com/darknight08zz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/darknight08zz
              </Link>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mt-6">
            Developed by Ujjwal Prajapati with love.
          </p>
        </div>
      </div>
    </section>
  );
}