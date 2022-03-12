import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    build: {
        minify: "esbuild",
        cssCodeSplit: false,
        polyfillDynamicImport: true,
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
    plugins: [reactRefresh()],
});
