/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-button-color": "#0080FF",
      "primary-bg-color-blue": "#0080FF",
      "primary-bg-color": "#ffffff",
      "primary-text-color-black": "#26334D",
      "primary-text-color-white": "#ffffff",
      "default-green": "#1DBF73",
      "transparent-bg-blur": "#ffffff15",
      "pale-blue-grey": "#F2F6FF",
      "dark-bg": "#000035",
      "grey-400": "#98A2B3",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
