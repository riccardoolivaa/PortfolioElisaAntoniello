import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimal palette inspired by Apple/Notion
        'theater': {
          50: '#faf5f5',
          100: '#f5ebeb',
          200: '#e6cccc',
          300: '#d1a3a3',
          400: '#b36666',
          500: '#8b4040',  // Main accent - muted theater red
          600: '#732929',
          700: '#5c1f1f',
          800: '#4a1919',
          900: '#3d1616',
        },
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'spotlight': 'spotlight 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spotlight: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
export default config
