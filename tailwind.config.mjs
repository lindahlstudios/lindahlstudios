/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        charcoal: '#1A1A1A',
        forest: {
          DEFAULT: '#2D5F4A',
          light: '#3A7A5E',
          pale: '#E8F0EB',
        },
        error: '#dc2626',
        // Semantic neutral tokens — use these instead of raw gray-* values.
        // Maps intent to gray scale so future theming touches one place.
        ui: {
          border: '#e5e7eb',      // gray-200 — default card/element borders
          'border-md': '#d1d5db', // gray-300 — stronger borders, form inputs
          faint: '#9ca3af',       // gray-400 — very muted labels, icons, timestamps
          muted: '#6b7280',       // gray-500 — secondary/muted text
          body: '#4b5563',        // gray-600 — body copy, descriptions
          subtle: '#f9fafb',      // gray-50  — subtle section backgrounds
          placeholder: '#e5e7eb', // gray-200 — image placeholder backgrounds
        },
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
