/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ev-primary": "#499AAC",
        "ev-primary-darker": "#499AAC",
        "ev-primary-lighter": "#499AAC",
        "ev-secondary": "#DE7A4F",
        "ev-secondary-darker": "#DE7A4F",
        "ev-secondary-lighter": "#DE7A4F",
        "ev-dark": "#1C1C1C",
        "ev-dark-darker": "#1C1C1C",
        "ev-dark-lighter": "#1C1C1C",
        "ev-light": "#F8F1E5",
        "ev-light-darker": "#F8F1E5",
        "ev-light-lighter": "#F8F1E5",
        "ev-destructive": "#d63e3e",
        "ev-destructive-darker": "#B91C1C",
        "ev-destructive-lighter": "#B91C1C",
      },
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [require('tailwindcss-react-aria-components')],
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
}

