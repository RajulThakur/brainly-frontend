/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      transitionTimingFunction: {key: 'cubic-bezier(0.23, 1, 0.32, 1)'},
      transitionDuration: {400: '400ms'},
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(75% 75% at 50% 91.9%, var(--tw-gradient-stops))',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: `
              0 0 15px rgba(81, 71, 228, 0.3),
              0 0 30px rgba(81, 71, 228, 0.2),
              0 0 45px rgba(81, 71, 228, 0.1),
              inset 0 0 15px rgba(81, 71, 228, 0.2)
            `,
            borderColor: 'rgba(81, 71, 228, 0.4)',
          },
          '50%': {
            boxShadow: `
              0 0 30px rgba(81, 71, 228, 0.6),
              0 0 60px rgba(81, 71, 228, 0.4),
              0 0 90px rgba(81, 71, 228, 0.2),
              inset 0 0 30px rgba(81, 71, 228, 0.4)
            `,
            borderColor: 'rgba(81, 71, 228, 0.9)',
          },
        },
      },
      animation: {glow: 'glow 2s cubic-bezier(0.4, 0, 0.8, 1) infinite'},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      blur: {'3xl': '64px'},
      maxWidth: {dvw: '100dvw'},
    },
  },
};
