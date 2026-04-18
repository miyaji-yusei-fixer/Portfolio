import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans JP", "sans-serif"],
        display: ["'Playfair Display'", "'Noto Serif JP'", "serif"],
      },
      colors: {
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        royal: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      backgroundImage: {
        "gradient-royal":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
        "gradient-aurora":
          "radial-gradient(ellipse at top left, rgba(139,92,246,0.35), transparent 50%), radial-gradient(ellipse at bottom right, rgba(59,130,246,0.35), transparent 50%), radial-gradient(ellipse at center, rgba(236,72,153,0.15), transparent 60%)",
        "gradient-shine":
          "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
        "grid-faint":
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px -4px rgba(59,130,246,0.35)",
        glow: "0 10px 40px -10px rgba(59,130,246,0.55), 0 4px 12px -4px rgba(139,92,246,0.35)",
        "glow-lg":
          "0 20px 70px -15px rgba(59,130,246,0.55), 0 10px 30px -10px rgba(139,92,246,0.45)",
        luxe:
          "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 30px 60px -20px rgba(15,23,42,0.25), 0 10px 20px -10px rgba(15,23,42,0.15)",
        "luxe-dark":
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.6), 0 10px 20px -10px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "aurora-shift": "auroraShift 18s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        auroraShift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%,-3%,0) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
