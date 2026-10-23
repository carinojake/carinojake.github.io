/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF8F2',
          200: '#F4EFE6',
          300: '#EAE1D2',
        },
        gold: {
          500: '#C5A059',
          600: '#B38B42',
          700: '#99732B',
        },
        forest: {
          700: '#1B4D3E',
          800: '#143D31',
          900: '#0F2E24',
        },
        charcoal: {
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Prompt', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
