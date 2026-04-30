import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import LenisProvider from '@/components/LenisProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import { AIChatbot } from '@/components/ui/ai-chatbot';

export const metadata: Metadata = {
  title: 'Ujjwal Prajapati — Frontend Developer & AI Engineer',
  description: 'B.Tech CSE student at XIM University building full-stack applications and AI/ML systems. CGPA 9.18 | Merit Scholar | Hackathon finalist.',
  keywords: ['Ujjwal Prajapati', 'Frontend Developer', 'AI Engineer', 'Next.js', 'React', 'XIM University'],
  openGraph: {
    title: 'Ujjwal Prajapati — Portfolio',
    description: 'Frontend Developer & AI Engineer. Building intelligent, scalable applications.',
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
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-primary)] selection:text-white noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LenisProvider>
            {/* Scroll Progress Bar */}
            <ScrollProgress />

            {/* Custom Cursor at root level */}
            <CustomCursor />
            
            {/* Fixed Navigation */}
            <Navbar />

            {/* Main Content with Transitions */}
            <main className="relative z-[var(--z-base)] pt-[80px]">
              <PageTransition>
                {children}
              </PageTransition>
            </main>

            {/* AI Chatbot */}
            <AIChatbot />

            {/* Footer */}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}