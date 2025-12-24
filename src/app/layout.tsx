'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Sidebar } from '@/components/Sidebar';
// Removed: AIChatbot, Header, Footer (as per new design)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full relative">
            {/* Ambient Background for Dark Mode */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500 bg-ambient-glow mix-blend-screen" />

            {/* Left Sidebar */}
            <div className="flex-none md:w-64 z-10">
              <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative z-10">
              {/* Vignette Overlay Effect (Adjusted for Dark Mode) */}
              <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-blue-900/5 opacity-0 md:opacity-100 dark:to-black/80 dark:mix-blend-overlay" />

              <div className="min-h-full w-full px-4 py-20 md:px-12 md:py-12 max-w-5xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}