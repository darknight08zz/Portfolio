// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: {
          DEFAULT: '#00ff00', // Bright green for availability
          foreground: '#000000',
        },
      },
      borderRadius: {
        lg: '0px',
        md: '0px',
        sm: '0px',
      },
      backgroundImage: {
        'ambient-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 50%)',
      }
    },
  },
  plugins: [],
};
export default config;