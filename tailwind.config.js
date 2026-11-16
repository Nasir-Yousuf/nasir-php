/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        laboratory: {
          950: '#06080F',
          900: '#0B0F19',
          850: '#0F1626',
          800: '#151E34',
          750: '#1C2846',
          700: '#233258',
          600: '#334878',
        },
        php: {
          light: '#8892BF',
          DEFAULT: '#777BB4',
          dark: '#4F5B93',
          accent: '#A5B4FC',
        },
        accent: {
          cyan: '#06B6D4',
          electric: '#3B82F6',
          purple: '#8B5CF6',
          green: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(119, 123, 180, 0.25)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
