/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        forest: {
          DEFAULT: '#2D5F4A',
          light: '#3A7A5E',
          pale: '#E8F0EB',
        },
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
