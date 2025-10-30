import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Autunnale Edimburgo
        cream: {
          50: '#fdfbf7',
          100: '#faf6f0',
          200: '#f5ede1',
          300: '#f0e4d2',
          DEFAULT: '#f5ede1', // Bianco crema principale
        },
        stone: {
          50: '#f7f7f6',
          100: '#e3e3e1',
          200: '#c7c7c3',
          300: '#a8a8a3',
          400: '#8a8a84',
          500: '#6d6d66',
          600: '#565651',
          700: '#3f3f3b',
          800: '#2a2a27',
          900: '#1a1a18',
        },
        moss: {
          50: '#f3f6f3',
          100: '#e1e9e0',
          200: '#c3d3c1',
          300: '#a4bda1',
          400: '#7a9d76',
          500: '#5a7d56',
          600: '#4a6647',
          700: '#3a4f38',
          800: '#2a3829',
          900: '#1a231a',
        },
        bronze: {
          50: '#faf6f2',
          100: '#f2e8dc',
          200: '#e5d1b9',
          300: '#d4b392',
          400: '#c49566',
          500: '#a67750',
          600: '#8b5e3f',
          700: '#6d4730',
          800: '#4f3222',
          900: '#332015',
        },
        brick: {
          50: '#fdf5f3',
          100: '#f8e4df',
          200: '#f0c9bf',
          300: '#e5a692',
          400: '#d97d5f',
          500: '#b85c3f',
          600: '#9a4731',
          700: '#7a3627',
          800: '#5a271d',
          900: '#3d1a13',
        },
        autumn: {
          rust: '#a0522d',
          gold: '#b8860b',
          ember: '#cd5c5c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'spotlight': 'spotlight 3s ease-in-out infinite',
        'curtain': 'curtain 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        spotlight: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        curtain: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;