/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf6ff',
          100: '#d7ebff',
          200: '#b8dcff',
          300: '#86c5ff',
          400: '#4da4ff',
          500: '#2180ff',
          600: '#005ed9',
          700: '#004b9b', // Official DIMMA primary blue
          800: '#003e82',
          900: '#06346b',
          950: '#032047',
        },
        maternity: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#14b8a6',
          700: '#0f766e',
          softPink: '#fff1f2',
          blush: '#ffe4e6',
          rose: '#f43f5e',
        },
        emergency: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626', // Official DIMMA cross red
          700: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 75, 155, 0.08)',
        'card': '0 10px 30px -4px rgba(0, 75, 155, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'float': '0 20px 40px -10px rgba(0, 56, 117, 0.15)',
      }
    },
  },
  plugins: [],
}

