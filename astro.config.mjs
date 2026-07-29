import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import React from "@astrojs/react";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: 'https://yourcolor.axvolestudio.com',
  adapter: vercel(),
  integrations: [tailwind(), React(), sitemap()],
});