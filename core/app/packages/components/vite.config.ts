import path from "path";
import { UserConfig } from "vite";

export default <UserConfig>{
  esbuild: true,
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "@tensorgrid/components",
      fileName: (format) => `components.${format}.js`,
    },
  },
  rollupOptions: {
    external: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@tensorgrid/components": "@tensorgrid/components/src/index.ts",
    },
  },
};
