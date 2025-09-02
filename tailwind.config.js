import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#90b36d",
        secondary: "#4a5568",
        success: "#38a169",
        warning: "#ed8936",
        danger: "#e53e3e",
        foreground: "#2d3748",
        background: "#ffffff",
        "light-background": "#f7fafc",
        'custom-blue': '#2563EB',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
  variants: {
    extend: {
      translate: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
}
