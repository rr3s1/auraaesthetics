import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "2400px",
      },
    },
    extend: {
      colors: {
        green: {
          500: "#24AE7C",
          600: "#0D2A1F",
        },
        blue: {
          500: "#79B5EC",
          600: "#152432",
        },
        // Ignited Radiance Theme
        "site-bg": "#FCFBF8",            // Primary Background: Pale Alabaster
        "content-bg": "#F7F6F2",          // Slightly darker Alabaster for content areas
        "text-primary": "#3A3A3A",        // Main Text: Deep Charcoal
        "text-secondary": "#5A5A5A",      // Secondary Text: Lighter Charcoal

        "accent-yellow-dark": "#FDB110",   // Primary Accent: Dark Yellow (gold-like)
        "accent-orange": "#F57A08",        // Secondary Accent: Orange
        "accent-yellow": "#FCCF14",        // Secondary Accent: Brighter Yellow
        "accent-red": "#E8400C",           // Tertiary Accent: Vibrant Red (use sparingly)
        "accent-red-deep": "#C81E08",      // Deepest Accent: Dark Red (use minimally)
        
        // Previous Golden Hour Glow colors - commented out for reference
        // "accent-gold-rich": "#B89D62",
        // "accent-gold-vibrant": "#FFD700",
        // "accent-sage-taupe": "#88856A",

        // Light and dark variants for the new theme
        light: {
          DEFAULT: "#FCFBF8", // Pale Alabaster (primary background)
          200: "#F7F6F2",     // Slightly darker alabaster (content background)
          subtle: "#5A5A5A",  // Secondary text color
        },
        dark: {
          DEFAULT: "#3A3A3A", // Deep Charcoal (primary text)
          200: "#5A5A5A",     // Lighter Charcoal (secondary text)
          300: "#FDB110",     // Dark Yellow (primary accent)
          400: "#F57A08",     // Orange (secondary accent)
          500: "#FCCF14",     // Brighter Yellow (secondary accent)
          600: "#E8400C",     // Vibrant Red (tertiary accent)
          700: "#C81E08",     // Dark Red (deepest accent)
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        appointments: "url('/assets/images/appointments-bg.png')",
        pending: "url('/assets/images/pending-bg.png')",
        cancelled: "url('/assets/images/cancelled-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "rainbow": {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        "gradient-slow": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "gradient-border": {
          "0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
          "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
          "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
          "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
        },
        "gradient-1": {
          "0%, 100%": { top: "0", right: "0" },
          "50%": { top: "50%", right: "25%" },
          "75%": { top: "25%", right: "50%" },
        },
        "gradient-2": {
          "0%, 100%": { top: "0", left: "0" },
          "60%": { top: "75%", left: "25%" },
          "85%": { top: "50%", left: "50%" },
        },
        "gradient-3": {
          "0%, 100%": { bottom: "0", left: "0" },
          "40%": { bottom: "50%", left: "25%" },
          "65%": { bottom: "25%", left: "50%" },
        },
        "gradient-4": {
          "0%, 100%": { bottom: "0", right: "0" },
          "50%": { bottom: "25%", right: "40%" },
          "90%": { bottom: "50%", right: "25%" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "rainbow": "rainbow var(--speed, 2s) infinite linear",
        "gradient-slow": "gradient-slow 6s ease infinite",
        "pulse": "pulse 6s infinite ease-in-out",
        "pulse-slow": "pulse 6s infinite ease-in-out",
        "pulse-slower": "pulse 8s infinite ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const textPrimaryColor = theme('colors.text-primary');
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-glow-primary': {
          textShadow: `0 0 8px ${textPrimaryColor}`,
        },
      });
    },
  ],
} satisfies Config;

export default config;
