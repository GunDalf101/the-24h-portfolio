/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medievalsharp: ['MedievalSharp', 'cursive'],
        medieval: ['Fondamento', 'cursive'],
      },
      colors: {
        'mystic': {
          900: '#1a0B2E',
          800: '#2D1B4E',
          700: '#432C70',
          600: '#593C93',
          500: '#7B52AB',
          400: '#9768C8',
          300: '#B584E3',
          200: '#D3A0FF',
          100: '#F0CBFF',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 1 },
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}