/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // Primary
        orange: "hsl(25, 97%, 53%)",

        // Neutral
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",

        // Custom
        "very-dark-grayish-blue": "#1a1e22",
        "dark-grayish-blue": "#363a42",
      },
    },
  },
  plugins: [],
};
