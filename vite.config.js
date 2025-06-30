import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001/api",
        //target: "https://elb-backend.onrender.com/api", ---SERVER
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        timeout: 60000,
      },
    },
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  build: { chunkSizeWarningLimit: 1600 },
});
