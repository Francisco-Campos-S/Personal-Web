import type { Config } from "tailwindcss";

export default {
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
        'dark-gray': '#333333',
        'almost-black': '#1A1A1A',
        'off-white': '#F8F8F8',
      },
      spacing: {
        'xxs': '8px',
        'xs': '16px',
        'sm': '24px',
        'md': '32px',
        'lg': '48px',
        'xl': '64px',
        'xxl': '96px',
      },
      fontSize: {
        'xxs': '12px',
        'xs': '16px',
        'sm': '24px',
        'md': '32px',
        'lg': '48px',
        'xl': '64px',
        'xxl': '96px',
      },
      borderRadius: {
        'xxs': '8px',
        'xs': '16px',
        'sm': '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
