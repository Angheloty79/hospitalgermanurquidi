import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.JPG"],
  server: {
    port: 5173, // Cambia el puerto si prefieres otro cercano
    host: "127.0.0.1", // Host para asegurar compatibilidad
  },
});