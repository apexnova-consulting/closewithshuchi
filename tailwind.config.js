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
          DEFAULT: '#F8E9F0', // Blush Pink
          dark: '#D6A5C0', // Dusty Rose
        },
        secondary: {
          DEFAULT: '#3E3E3E', // Charcoal Gray
          light: '#FFFFFF', // Soft White
        },
        accent: {
          DEFAULT: '#D1B07C', // Gold Accent
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
} 