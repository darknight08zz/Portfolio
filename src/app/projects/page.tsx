'use client';

import { ProjectsList } from '@/components/sections/Projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <section className="section">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors mb-6"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>
      <ProjectsList />
    </section>
  );
}