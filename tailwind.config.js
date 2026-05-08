export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agrarian: {
          light: '#e8f5e9',
          green: '#2e7d32',
          dark: '#1b5e20',
          accent: '#81c784',
          earth: '#8d6e63',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        neue: ['Neue Montreal', 'PP Neue Montreal', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
        'gradient-x': 'gradient-x 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-x': {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '200% 0%' },
        }
      }
    },
  },
  plugins: [],
}
