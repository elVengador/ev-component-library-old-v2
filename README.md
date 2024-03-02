## How to set up tailwind on your project

First you should use the next libraries:

```json
"@fortawesome/fontawesome-svg-core": "^6.5.1",
"@fortawesome/free-solid-svg-icons": "^6.5.1",
"@fortawesome/react-fontawesome": "^0.2.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-stately": "^3.30.1",
"tailwind-merge": "^2.2.1",
"tailwindcss": "^3.4.1"
```

### set up your tailwind

add in content the **ev-component-library/dist** and set up the colors: ev-primary, ev-secondary, ev-dark, ev-light and ev-destructive

```
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/ev-component-library/dist/**/*.{js,ts,jsx,tsx}"], //<-- to apply styles on ev-component-library
  theme: {
    extend: {
      colors: { //<-- define the colors to use on ev-component-library
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
  darkMode: "class",
  plugins: [],
};

```
