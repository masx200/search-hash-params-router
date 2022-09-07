import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import rollupExternalModules from "rollup-external-modules";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
const terserplugin = terser({
    compress: {
        ecma: 2015,
        toplevel: true,
        unused: true,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
    },
    module: true,
    mangle: true,
    output: { comments: false, beautify: true },
});
export default defineConfig([
    {
        external: rollupExternalModules,
        input: "./src/index.ts",
        output: [
            { sourcemap: true, file: "./dist/index.js", format: "esm" },
            { sourcemap: true, file: "./dist/index.cjs", format: "cjs" },
        ],
        plugins: [
            ts({ transpiler: "typescript" }),
            resolve(),
            commonjs(),

            babel({
                sourceMaps: true,
                plugins: [],
                extensions: [".js", ".tsx", ".ts"],
                babelHelpers: "bundled",
                presets: [["@babel/preset-env", {}]],
            }),
            terserplugin,
        ],
    },
]);
