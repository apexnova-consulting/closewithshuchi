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
          DEFAULT: '#C86B85', // Deeper Rose Pink (WCAG AA compliant)
          dark: '#A84D66', // Darker Rose (for hover states)
          light: '#F5E6EA', // Light Pink (for backgrounds)
        },
        secondary: {
          DEFAULT: '#2D3142', // Deep Navy
          dark: '#1A1C27', // Darker Navy
          light: '#F8F9FA', // Off White
        },
        accent: {
          DEFAULT: '#D4AF37', // Rich Gold
          dark: '#B39030', // Darker Gold
          light: '#F4E9C1', // Light Gold
        },
        neutral: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
        info: '#17A2B8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(45, 49, 66, 0.8), rgba(45, 49, 66, 0.9))',
      },
    },
  },
  plugins: [],
}