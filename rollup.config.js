import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/index.ts", // 打包入口
    output: [
        {
            sourcemap: true,
            // 打包出口
            file: "./dist/index.mjs", // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
            format: "esm", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
        },

        {
            sourcemap: true,
            file: "./dist/index.cjs",

            format: "cjs",
        },
    ],
    plugins: [
        // 打包插件
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
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
            extensions: [".js", ".ts", ".tsx"],

            babelHelpers: "bundled",
            presets: [
                "@babel/preset-typescript",
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
                toplevel: true,
                unused: true,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ["console.log"],
            },
            module: true,
            mangle: true,
            output: { comments: false, beautify: true },
        }),
    ],
};
