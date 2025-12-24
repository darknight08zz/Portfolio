'use client';

import { About } from '@/components/sections/About';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-background">
            <div className="container mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-mono text-muted hover:text-foreground transition-colors uppercase tracking-widest"
                >
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </div>
            <About />
        </main>
    );
}
