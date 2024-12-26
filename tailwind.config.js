/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      screens: {},
      spacing: {},
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "text-color": "var(--text-color)",
        "body-color": "var(--body-color)",
      },
    },
  },
  plugins: [],
};
