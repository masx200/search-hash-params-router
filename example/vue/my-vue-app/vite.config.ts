import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    build: {
        minify: "terser",
        cssCodeSplit: false,
        polyfillDynamicImport: true,
        target: "es2015",
        terserOptions: {
            ecma: 2015,
            output: { comments: false },
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [
        createHtmlPlugin({
            minify: { removeAttributeQuotes: false, collapseWhitespace: true },
        }),
        vue(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
    ],
});
