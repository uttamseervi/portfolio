/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fillFromCenter: {
          '0%': { clipPath: 'circle(0% at 50% 50%)' },
          '100%': { clipPath: 'circle(100% at 50% 50%)' },
        },
      },
      animation: {
        fillFromCenter: 'fillFromCenter 1.9s ease-out forwards',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

