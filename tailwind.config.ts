import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0c0d10',
          900: '#12141a',
          800: '#1a1d26',
          700: '#262b36',
          600: '#3a4150',
        },
        cream: '#f4efe4',
        gold: {
          DEFAULT: '#d4a017',
          dim: '#b8890f',
        },
        pin: '#1d9e75',
        here: '#e24b4a',
        viber: '#7360f2',
        messenger: '#0866ff',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        overlay: '0 8px 32px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
