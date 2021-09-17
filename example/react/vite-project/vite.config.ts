import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
import { minifyHtml } from "vite-plugin-html";
import babel from "@rollup/plugin-babel";
// import ts from "rollup-plugin-ts";
// https://vitejs.dev/config/
export default defineConfig({
    esbuild: { jsx: "preserve" },
    build: {
        cssCodeSplit: false,
        polyfillDynamicImport: true,
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [
        babel({
            sourceMaps: true,
            plugins: ["@babel/plugin-transform-react-constant-elements"],
            extensions: [".js", ".tsx", ".ts"],
            babelHelpers: "bundled",
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
        }),
        // ts(),
        minifyHtml({ removeAttributeQuotes: false }),
        reactRefresh(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
    ],
});
