import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-darkest": "rgba(0, 37, 80, 1)",
        "primary-dark": "rgba(2, 90, 154, 1)",
        "primary": "rgba(0, 174, 255, 1)",
        "primary-light": "rgba(97, 205, 255, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
