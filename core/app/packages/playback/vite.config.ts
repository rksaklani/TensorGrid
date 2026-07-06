import { UserConfig } from "vite";

export default <UserConfig>{
  rollupOptions: {
    external: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@tensorgrid/playback": "@tensorgrid/playback/index.ts",
    },
  },
};
