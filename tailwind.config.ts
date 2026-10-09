// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        bebas: ['var(--font-bebas)', '"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        accent: {
          primary: '#C5A574',    // muted warm gold
          secondary: '#D7B98A',  // muted champagne
          tertiary: '#B89568',   // restrained bronze
          cyan: '#9EA7AA',       // restrained slate
          warm: '#D7B98A',
        },
        dark: {
          primary: '#0B0D0E',    // near-black charcoal
          secondary: '#111416',  // graphite
          card: '#181A1B',       // elevated charcoal
          elevated: '#232526',   // warm graphite
        },
        light: {
          primary: '#F5F1E9',    // warm ivory
          secondary: '#ECE7DE',  // soft stone
          card: '#FFFFFF',       // crisp white
          elevated: '#DED8CF',   // warm light gray
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(215, 185, 138, 0.12)' },
          '50%': { boxShadow: '0 0 35px rgba(215, 185, 138, 0.22)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;