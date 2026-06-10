import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: { xs: "320px", sm: "400px", md: "480px", lg: "768px", xl: "1024px", "2xl": "1240px" },
    extend: {
      colors: {
        primary: "#1C2946", "primary-light": "#23355B", "primary-dark": "#0F1B33",
        accent: "#B5E6EA", gold: "#D4AF37", "light-bg": "#E8F1FE", "nav-bg": "#EAF2FA",
        muted: "#8A8888", grey: "#404040", "grey-light": "#646F85", "grey-lighter": "#778997",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
