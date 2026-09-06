/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        neon: "0 0 8px rgba(74, 222, 128, 0.25), 0 0 1px rgba(74, 222, 128, 0.4)",
      },
      keyframes: {
        cursorBlink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
