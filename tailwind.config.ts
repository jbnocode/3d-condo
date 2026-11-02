import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'touch': '44px',
        'touch-lg': '56px',
      },
      height: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-bottom))',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
