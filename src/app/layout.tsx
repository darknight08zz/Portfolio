import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/ui/CustomCursor';
import LenisProvider from '@/components/LenisProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Ujjwal Prajapati — Software Engineer & Frontend Developer',
  description: 'Software Engineer and Frontend Developer building scalable, interactive and user-centric web applications.',
  keywords: ['Ujjwal Prajapati', 'Software Engineer', 'Frontend Developer', 'Next.js', 'React', 'TypeScript'],
  openGraph: {
    title: 'Ujjwal Prajapati — Software Engineer & Frontend Developer',
    description: 'Software Engineer & Frontend Developer building scalable, interactive and user-centric web applications.',
    url: 'https://portfolio-ten-rho-5rwffdr5ms.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-primary)] selection:text-[#09090B]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LenisProvider>
            {/* Scroll Progress Bar */}
            <ScrollProgress />

            {/* Custom Cursor */}
            <CustomCursor />
            
            {/* Fixed Editorial Navigation */}
            <Navbar />

            {/* Main Content with Page Transitions */}
            <main className="relative z-[var(--z-base)]">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}