// export default {
//   root: "src",
//   server: {
//     cors: "*",
//     hmr: {},
//   },
//   build: {
//     minify: true,
//     outDir: "../src/dist",
//     emptyOutDir: true,
//     rollupOptions: {
//       input: "/js/index.js",
//       output: {
//         format: "umd",
//         entryFileNames: "index.js",
//         compact: true,
//       },
//     },
//   },
//   envDir: "../",
// };

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  server: {
    cors: "*",
    hmr: {},
    host: true, // Ajouté pour Replit
    allowedHosts: [".replit.dev", "replit.dev", "*.replit.dev"], // Ajouté pour Replit
  },
  build: {
    minify: true,
    outDir: "../src/dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "/js/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        compact: true,
      },
    },
  },
  envDir: "../",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@animations": path.resolve(__dirname, "src/js/animations"),
      "@components": path.resolve(__dirname, "src/js/components"),
      "@pages": path.resolve(__dirname, "src/js/pages"),
      "@utils": path.resolve(__dirname, "src/js/utils"),
    },
  },
});
