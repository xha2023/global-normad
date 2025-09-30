// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",     // App Router 페이지, 레이아웃
    "./src/components/**/*.{js,ts,jsx,tsx}",  // 네 컴포넌트
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary-500)",
        red: "var(--color-red-500)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "bg-surface": "var(--color-surface)",
        "bg-default": "var(--color-background)",
        "border-default": "var(--color-border)",
        gray: {
          25: "var(--color-gray-25)",
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
          950: "var(--color-gray-950)",
        },
      },
      fontSize: {
        "11m": ["11px", "1.36"],
        "11b": ["11px", "1.36"],
        "12m": ["12px", "1.33"],
        "12b": ["12px", "1.33"],
        "13m": ["13px", "1.3"],
        "13b": ["13px", "1.3"],
        "14m": ["14px", "1.28"],
        "14b": ["14px", "1.28"],
        "16m": ["16px", "1.5"],
        "16b": ["16px", "1.5"],
        "18m": ["18px", "1.5"],
        "18b": ["18px", "1.5"],
        "20m": ["20px", "1.4"],
        "20b": ["20px", "1.4"],
        "24m": ["24px", "1.25"],
        "24b": ["24px", "1.25"],
        "32m": ["32px", "1.25"],
        "32b": ["32px", "1.25"],
        "14-body-m": ["14px", "1.5"],
        "16-body-m": ["16px", "1.5"],
        "18-body-b": ["18px", "1.4"],
        "20-body-b": ["20px", "1.6"],
      },
    },
  },
  plugins: [],
};
