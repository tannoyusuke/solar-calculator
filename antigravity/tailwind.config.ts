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
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#0088A3", // Brighter teal for DEFAULT
          light: "#00D2D3",   // Much brighter cyan/teal for better visibility on dark backgrounds
          dark: "#004E66",
        },
        accent: {
          DEFAULT: "#C00034",
        },
        "corp-gray": "#E8E8E8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "from": { boxShadow: "0 0 10px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.1)" },
          "to": { boxShadow: "0 0 20px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.2)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(-50%)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
