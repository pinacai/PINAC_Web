import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090c13",
        secondary: "#08b1f9",
        form: "#101010",
        light: "#ececec",
        highlight: "#2d79f3",
      },
      fontFamily: {
        Carme: ["Carme", "sans-serif"],
        Catamaran: ["Catamaran", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      margin: {
        "100vh": "100vh",
      },
      spacing: {
        "400px": "400px",
      },
      borderWidth: {
        DEFAULT: "1px",
        "1.5": "1.5px",
      },
      boxShadow: {
        glass: "0px 0px 1.5px #ececec",
      },
    },
  },
  plugins: [],
} satisfies Config;
