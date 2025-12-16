import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),      // <-- THIS FIXES THE "React is not defined" ERROR
    tailwindcss()
  ],
  server: {
    proxy:{
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
