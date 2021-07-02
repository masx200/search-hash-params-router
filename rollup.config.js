import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

import ftc from "rollup-plugin-fork-ts-checker";
export default {
    input: "src/index.ts", // 打包入口
    output: {
        // 打包出口
        file: pkg.main, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
        format: "esm", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    plugins: [
        ftc(),
        // 打包插件
        resolve(), // 查找和打包node_modules中的第三方模块
        commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
        babel({
            plugins: [
                [
                    "babel-plugin-htm",
                    {
                        pragma: "createElement",
                        tag: "html",
                        useBuiltIns: true,
                    },
                ],
            ],
            extensions: [".js", ".ts"],

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
            module: true,
            mangle: true,
            output: { comments: false, beautify: true },
        }),
    ],
};
