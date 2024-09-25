/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        show: "show 200ms ease-out normal",
        hide: "hide 200ms ease-out normal",
        "backdrop-show": "backdrop-show 200ms ease-out normal",
        "backdrop-hide": "backdrop-hide 200ms ease-out normal",
      },
      keyframes: {
        show: {
          from: {
            transform: "scale(95%) translateY(-3%)",
            opacity: 0,
          },
          to: {
            transform: "scale(100%) translateY(0%)",
            opacity: 1,
          },
        },
        hide: {
          from: {
            transform: "scale(100%) translateY(0%)",
            opacity: 1,
          },
          to: {
            transform: "scale(95%) translateY(-3%)",
            opacity: 0,
          },
        },
        "backdrop-show": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        "backdrop-hide": {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
// @-webkit-keyframes show{
//     from {
//         transform: translateY(-110%);
//     }
//     to {
//         transform: translateY(0%);
//     }
// }
