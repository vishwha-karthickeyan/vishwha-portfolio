/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',       /* Midnight Black */
        'secondary': '#121212',     /* Deep Charcoal */
        'tertiary': '#1c1c1c',      /* Elevated Charcoal */
        'accent': '#e5e5e5',        /* Crisp Off-White */
        'accent-muted': '#a3a3a3',  /* Muted Text */
      },
      borderColor: {
        'primary': '#262626',       /* Subtle divider */
        'secondary': '#404040',     /* Hover divider */
      }
    },
    fontFamily : {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      'mono': ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
    }
  },
  plugins: [],
}