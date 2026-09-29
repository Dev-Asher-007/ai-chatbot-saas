import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#dfeaff',
          200: '#bfd5ff',
          300: '#8fb0ff',
          400: '#5d8bff',
          500: '#305cff',
          600: '#2347d1',
          700: '#1f3aa8',
          800: '#1d3287',
          900: '#1f2d6d',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.2), 0 20px 50px rgba(59, 130, 246, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
