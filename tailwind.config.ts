import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        'light-accent': '#8b7cb6',
        'dark-bg': '#1a1a1a',
        'dark-text': '#f3f3f3',
        'dark-accent': '#b5a3d9',
        'lilac': {
          50: '#f9f7ff',
          100: '#f3efff',
          200: '#e9e1ff',
          300: '#d4c2ff',
          400: '#b5a3d9',
          500: '#8b7cb6',
          600: '#6b5b95',
          700: '#5a4a7c',
          800: '#4a3d66',
          900: '#3d3354',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config