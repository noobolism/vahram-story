module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'], // افزودن فونت وزیر
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Install this plugin
  ],
};
