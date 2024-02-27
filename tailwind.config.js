
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ".storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ev-primary": {
          DEFAULT: "#499AAC",
          hard: colors.cyan[600],
          harder: colors.cyan[700]
        },
        "ev-secondary": {
          DEFAULT: "#DE7A4F",
          hard: colors.orange[600],
          harder: colors.orange[700],
        },
        "ev-dark": {
          DEFAULT: "#1C1C1C",
          hard: colors.neutral[700],
          harder: colors.neutral[600],
        },
        "ev-light": {
          DEFAULT: "#F8F1E5",
          hard: colors.neutral[200],
          harder: colors.neutral[300],
        },
        "ev-destructive": {
          DEFAULT: "#d63e3e",
          hard: colors.red[600],
          harder: colors.red[700],
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
}

