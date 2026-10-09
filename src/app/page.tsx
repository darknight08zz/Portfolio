import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Editorial Lead Hero */}
      <Hero />

      {/* 01 / FEATURED PROJECTS */}
      <Projects />

      {/* 02 / ABOUT ME & 03 / SKILLS (Editorial 2-Column Composition) */}
      <section className="py-20 md:py-28 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <About />
            <Skills />
          </div>
        </div>
      </section>

      {/* 04 / EXPERIENCE (Editorial Timeline Journey) */}
      <Experience />

      {/* 05 / GET IN TOUCH (Horizon Final CTA & Footer) */}
      <Contact />
    </>
  );
}