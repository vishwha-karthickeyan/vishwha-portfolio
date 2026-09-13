/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#090a0f',       /* Deep Midnight */
        'secondary': '#11131e',     /* Dark Charcoal Card */
        'tertiary': '#1a1d2e',      /* Elevated Surface */
        'accent': '#f3f4f6',        /* Crisp Off-White */
        'accent-muted': '#9ca3af',  /* Muted Text */
        'brand': {
          'emerald': '#10b981',
          'cyan': '#06b6d4',
          'violet': '#8b5cf6',
          'indigo': '#6366f1',
        }
      },
      borderColor: {
        'primary': 'rgba(255, 255, 255, 0.08)',    /* Subtle glass divider */
        'secondary': 'rgba(255, 255, 255, 0.18)',  /* Hover glass divider */
        'glow': 'rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
    fontFamily : {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
    }
  },
  plugins: [],
}