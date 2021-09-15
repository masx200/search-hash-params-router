import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { minifyHtml } from "vite-plugin-html";
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
        minifyHtml({ removeAttributeQuotes: false }),
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
    ],
});
