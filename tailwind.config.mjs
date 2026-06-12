export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        k2d: ["K2D"],
        julius: ["Julius Sans One"],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      colors: {
        body: "linear-gradient(180deg, 233A4E, #9C6CB0)",
        buttonLink: "linear-gradient(0deg, black, rgb(170, 170, 170))",
      },
    },
  },
  plugins: [],
};
