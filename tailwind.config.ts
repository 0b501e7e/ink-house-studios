import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        fancy: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeInFromBlack: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        slideinLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)'},
          '100%': { opacity: '1', transform: 'translateX(0)'},
        },
        
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 3s ease-out forwards',
        fadeInFromBlack: 'fadeInFromBlack 5s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideInRight: 'slideInRight 5s ease-in-out forwards',
        slideInLeft: 'slideinLeft 5s ease-in-out forwards',
      },
      variants: {
        extend: {
          animation: ['responsive'],
          visibility: ['group-hover'],
        },
      },

    },
  },
  plugins: [],
}
export default config
