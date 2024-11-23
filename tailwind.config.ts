import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        fold: '450px',
      },
      colors: {
        accent: {
          0: '#5147E4',
          100: '#6259E6',
          200: '#736BE9',
          300: '#847DEB',
          400: '#958FEE',
          500: '#A6A1F0',
          600: '#B6B3F2',
          700: '#C7C5F5',
          800: '#D8D7F7',
          900: '#E9E9FA',
          1000: '#FAFBFC',
        },
        shadow: {
          0: '#05041a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
