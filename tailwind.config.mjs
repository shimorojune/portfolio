export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    /** @type {import('tailwindcss').Config} */
    ({ addUtilities }) => {
      addUtilities({
        ".standard-width": {
          "@apply max-w-screen-xl mx-auto": {},
        },
      });
    },
  ],
};
