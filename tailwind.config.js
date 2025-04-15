/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b07c4f', // Warm brown/copper
          dark: '#8b5e3c',
        },
        secondary: {
          DEFAULT: '#413c58', // Deep purple/navy
          dark: '#2d2a3e',
        },
        accent: {
          DEFAULT: '#e09f7d', // Peach/coral
          dark: '#c78966',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
} 