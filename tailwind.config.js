/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FEF9E7',
          100: '#FDF3CF',
          200: '#FBE699',
          300: '#F9DA63',
          400: '#F7CD2D',
          500: '#F5C107',
          600: '#DCA505',
          700: '#B68604',
          800: '#8E6603',
          900: '#664902',
        },
        dark: {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
