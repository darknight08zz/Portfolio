'use client';

import { ProjectsList } from '@/components/sections/Projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-900/10">
      <div className="container mb-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group hover:-translate-x-1"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
      <ProjectsList />
    </main>
  );
}