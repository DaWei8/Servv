/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-button-color-blue": "#0080FF",
        "primary-button-color-white": "#ffffff",
        "main-color": "#0080FF",
        "primary-bg-color-blue": "#0080FF",
        "primary-bg-color-white": "#ffffff",
        "primary-text-color-black": "#26334D",
        "primary-text-color-white": "#ffffff",
        "default-green": "#1DBF73",
        "transparent-bg-blur": "#ffffff15",
        "pale-blue-grey": "#F2F6FF",
        "dark-bg": "#000035",
        "grey-400": "#98A2B3",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        '3xl': '0 15px 20px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
