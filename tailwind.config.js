/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      screens: {
      },
      spacing: {
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "text-color": "var(--text-color)",
        "body-color": "var(--body-color)",
      },
    },
  },
  plugins: [],
}

