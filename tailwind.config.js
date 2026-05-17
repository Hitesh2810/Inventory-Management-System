const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      },
      colors: {
        ink: "#03050d",
        carbon: "#070a13",
        plasma: "#7c3aed",
        neon: "#00d5ff",
        mint: "#34f5a5",
        warning: "#f8c14a"
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 213, 255, 0.22)",
        violet: "0 0 44px rgba(124, 58, 237, 0.26)",
        mint: "0 0 34px rgba(52, 245, 165, 0.18)"
      },
      backgroundImage: {
        "aurora": "radial-gradient(circle at 20% 10%, rgba(0,213,255,.24), transparent 28%), radial-gradient(circle at 80% 0%, rgba(124,58,237,.22), transparent 30%), radial-gradient(circle at 50% 100%, rgba(52,245,165,.12), transparent 32%)",
        "panel": "linear-gradient(135deg, rgba(255,255,255,.10), rgba(255,255,255,.035))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".54", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
