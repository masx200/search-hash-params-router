import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
export default [
    {
        input: "./src/index.ts",
        output: { sourcemap: true, format: "esm", file: "./types/index.js" },
        plugins: [
            ts(),
            resolve(),
            commonjs(),

            babel({
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
                extensions: [".js", ".tsx"],
                babelHelpers: "bundled",
                presets: [],
            }),
        ],
    },
    {
        input: "./types/index.js",
        output: [
            { sourcemap: true, file: "./dist/index.mjs", format: "esm" },
            { sourcemap: true, file: "./dist/index.cjs", format: "cjs" },
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                plugins: [],
                extensions: [".js"],
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
            terser({
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
                output: { comments: false, beautify: false },
            }),
        ],
    },
];
