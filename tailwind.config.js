module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white": "var(--white)",
        "gray-50": "var(--gray-50)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-500": "var(--gray-500)",
        "gray-800": "var(--gray-800)",

        "green-500": "var(--green-500)",

        "purple-300": "var(--purple-300)",
        "purple-400": "var(--purple-400)",
        "purple-500": "var(--purple-500)",
        "purple-800": "var(--purple-800)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
