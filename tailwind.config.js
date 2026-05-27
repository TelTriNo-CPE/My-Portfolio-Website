/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a0f1e',
        'navy-mid': '#0d1635',
        surface: '#111827',
        'surface-card': '#151f35',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundSize: {
        '400': '400% 400%',
      },
    },
  },
  plugins: [],
}
