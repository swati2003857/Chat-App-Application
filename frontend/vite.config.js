import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,
    open: false, // ✅ PREVENT AUTO-OPENING IN VS CODE
    proxy: {
      "/api": "http://localhost:5002", // ✅ MATCHED WITH BACKEND
      "/socket.io": {
        target: "http://localhost:5002",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});