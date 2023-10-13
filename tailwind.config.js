/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "layouts/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      screens: {
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
      backgroundImage: {
        "Hero-Bg": "url('/img/Hero-Bg.png')",
        "Bg-2": "url('/img/Bg-2.png')",
        "Bg-left": "url('/img/Bg-left')",
        "S-Hero.png": "url('/img/S-Hero')",
      },
      colors: {
        vuejs: { 105: "#9DD2B8", 333: "#FFE17A", 535: "#58C08E" },
      },
    },
  },
  plugins: [],
};
