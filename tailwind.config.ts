import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#f0f6fc",
          100: "#c9d1d9",
          200: "#b1bac4",
          300: "#8b949e",
          400: "#6e7681",
          500: "#484f58",
          600: "#30363d",
          700: "#21262d",
          800: "#161b22",
          900: "#0d1117",
          950: "#010409",
        },
        accent: {
          50: "#f0f6ff",
          100: "#c9d1ff",
          200: "#a5c8ff",
          300: "#79b8ff",
          400: "#58a6ff",
          500: "#58a6ff",
          600: "#1f6feb",
          700: "#388bfd",
          800: "#1f6feb",
          900: "#0d419d",
          950: "#0a2d6b",
        },
        highlight: {
          50: "#f0f6ff",
          100: "#c9d1ff",
          200: "#a5c8ff",
          300: "#79b8ff",
          400: "#58a6ff",
          500: "#58a6ff",
          600: "#1f6feb",
          700: "#388bfd",
          800: "#1f6feb",
          900: "#0d419d",
          950: "#0a2d6b",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInFromRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(56, 189, 248, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.8)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-in-from-left": "slideInFromLeft 0.7s ease-out forwards",
        "slide-in-from-right": "slideInFromRight 0.7s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      transitionDelay: {
        "0": "0ms",
        "300": "300ms",
        "500": "500ms",
        "700": "700ms",
        "900": "900ms",
        "1100": "1100ms",
        "1300": "1300ms",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
