import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "480px", // Small screens
        md: "640px", // Medium screens
        lg: "768px", // Large screens
        xl: "900px", // Extra large screens
        "2xl": "1024px", // Double extra large screens - 1
        "2xl-2": "1100px", // Double extra large screens - 2
        "2xl-3": "1200px", // Double extra large screens - 3
        "3xl": "1280px", // Triple extra large screens
        "4xl": "1440px", // Quadruple extra large screens
      },
      colors: {
        primary: "#090c13",
        "glass-on-primary": "rgba(108, 108, 108, 0.1)",
        secondary: "#08b1f9",
        form: "#101010",
        light: "#ececec",
        highlight: "#2d79f3",
        LoginButton: "rgba(108, 108, 108, 0.25)",
        LoginButtonHover: "rgba(108, 108, 108, 0.35)",
      },
      fontFamily: {
        Carme: ["Carme", "sans-serif"],
        Catamaran: ["Catamaran", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        nasa: ["nasalization", "sans-serif"],
      },
      margin: {
        "100vh": "100vh",
      },
      spacing: {
        "400px": "400px",
        overFull: "calc(100% + 8px)",
      },
      borderWidth: {
        DEFAULT: "1px",
        "1.5": "1.5px",
      },
      boxShadow: {
        glass: "0px 0px 1.5px #ececec",
        darkCloud: "0 0 70px 80px #090c13",
      },
    },
  },
  plugins: [],
} satisfies Config;
