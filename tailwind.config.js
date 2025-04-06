/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      transitionTimingFunction: { key: 'cubic-bezier(0.23, 1, 0.32, 1)' },
      transitionDuration: { 400: '400ms' },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(75% 75% at 50% 91.9%, var(--tw-gradient-stops))',
      },
      animation: { glow: 'glow 2s cubic-bezier(0.23, 1, 0.32, 1) infinite' },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      blur: { '3xl': '64px' },
      maxWidth: { dvw: '100dvw' },
    },
  },
};
