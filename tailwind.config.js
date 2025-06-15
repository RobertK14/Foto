/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad4bf',
          300: '#f6b494',
          400: '#f08966',
          500: '#ea6944',
          600: '#dc5632',
          700: '#b74429',
          800: '#923927',
          900: '#773023',
        },
        accent: {
          50: '#fef7f3',
          100: '#feeee6',
          200: '#fcd9cc',
          300: '#f9bda8',
          400: '#f59773',
          500: '#f0764a',
          600: '#e15a2b',
          700: '#bd4621',
          800: '#973a21',
          900: '#7a3220',
        },
        warm: {
          50: '#fefaf8',
          100: '#fdf4f0',
          200: '#fae6dd',
          300: '#f6d1c4',
          400: '#f0b5a2',
          500: '#e8947d',
          600: '#dc7760',
          700: '#c65e49',
          800: '#a34e3e',
          900: '#854235',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};