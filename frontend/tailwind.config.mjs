/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#07040A",
        surface: "#140C1E",
        surfaceAlt: "#1F1230",
        foreground: "#F7F3FF",
        accent: {
          DEFAULT: "#F5C542",
          soft: "#FFE08A"
        },
        success: "#2FE26E",
        warning: "#F5A524",
        danger: "#FF4D6D"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(245, 197, 66, 0.28), 0 12px 30px rgba(245, 197, 66, 0.2)",
        neon: "0 0 0 1px rgba(47, 226, 110, 0.2), 0 0 24px rgba(245, 197, 66, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20% 0%, rgba(245,197,66,0.22), transparent 35%), radial-gradient(circle at 80% 20%, rgba(255,77,109,0.16), transparent 30%)",
        "casino-lights":
          "radial-gradient(circle at 10% 10%, rgba(245,197,66,0.14), transparent 30%), radial-gradient(circle at 90% 0%, rgba(47,226,110,0.12), transparent 28%), radial-gradient(circle at 50% 100%, rgba(255,77,109,0.16), transparent 38%)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};

