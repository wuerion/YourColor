export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        julius: ["Julius Sans One"],
        k2d: ["K2D"],
        lato: ["Lato"],
      },
      colors: {
        body: "#FAF8F0",
      },
      keyframes: {
        imgAnimation: {
          "0%": {
            opacity: 1,
          },
          "45%": {
            opacity: 1,
          },
          "55%": {
            opacity: 0,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        // nombre: "keyframes duración timing-function iteración"
        imgAnimate: "imgAnimation 3s linear infinite",
        "spin-slow": "spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};
