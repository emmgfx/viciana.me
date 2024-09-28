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
        show: "show 300ms ease-in-out normal",
        hide: "hide 300ms ease-in-out normal",
        "backdrop-show": "backdrop-show 200ms ease-out normal",
        "backdrop-hide": "backdrop-hide 200ms ease-out normal",
      },
      keyframes: {
        show: {
          from: {
            transform: "translateY(50%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        hide: {
          from: {
            transform: "translateY(0%)",
            opacity: 1,
          },
          to: {
            transform: "translateY(50%)",
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
