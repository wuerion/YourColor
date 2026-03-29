import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import React from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [tailwind(), React()],
});
