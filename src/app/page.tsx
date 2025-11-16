import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
    </>
  );
}