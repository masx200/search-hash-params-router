import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import babel from "@rollup/plugin-babel";
// import ts from "rollup-plugin-ts";
// https://vitejs.dev/config/
export default defineConfig({
    esbuild: { drop: ["console", "debugger"], jsx: "preserve" },

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
        babel({exclude:[/node_modules/],
            sourceMaps: true,
            plugins: ["@babel/plugin-transform-react-constant-elements"],
            extensions: [".js", ".tsx", ".ts"],
            babelHelpers: "bundled",
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
        }),
        // ts(),
        createHtmlPlugin({ minify: { removeAttributeQuotes: false } }),

        reactRefresh(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
    ],
});
