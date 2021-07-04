import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-ts";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "rollup";
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
        input: "./src/index.ts",
        output: [
            { sourcemap: true, file: "./dist/index.mjs", format: "esm" },
            { sourcemap: true, file: "./dist/index.cjs", format: "cjs" },
        ],
        plugins: [
            ts(),
            resolve(),
            commonjs(),

            babel({
                sourceMaps: true,
                plugins: [
                    [
                        "@babel/plugin-transform-react-jsx",
                        {
                            pragma: "createElement",
                            pragmaFrag: "Fragment",
                            useBuiltIns: true,
                        },
                    ],
                ],
                extensions: [".js", ".tsx", ".ts"],
                babelHelpers: "bundled",
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: [
                                "last 1 edge version",
                                "last 1 safari version",
                                "last 1 chrome version",
                                "last 1 firefox version",
                            ],
                        },
                    ],
                ],
            }),
            terserplugin,
        ],
    },
]);
