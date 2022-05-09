// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: '"Noto Sans Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      colors: {
        primary: "#FF0B56",
      },
      animation: {
        "floating-me": "floating-me 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "floating-me": {
          "0%": { transform: "translateY(-10px) rotate(0deg)" },
          "100%": { transform: "translateY(10px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
