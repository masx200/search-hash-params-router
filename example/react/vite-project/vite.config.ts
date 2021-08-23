import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        polyfillDynamicImport: true,
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [
        reactRefresh(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*\/*"] },
        }),
    ],
});
