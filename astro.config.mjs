import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import React from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: 'https://yourcolor.axvolestudio.com',
  integrations: [tailwind(), React(), sitemap()],
});