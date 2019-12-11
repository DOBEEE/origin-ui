const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');
const env = process.env.NODE_ENV;

function resolve(dir) {
    return path.join(__dirname, "..", dir);
}

module.exports = merge(baseConfig, {
    mode: env,
    entry: './src/index.js',
    output: {
        path: resolve("lib"),
        publicPath: '/dist/',
        filename: 'index.js',
        library: 'origin-ui',
        libraryTarget: 'umd',
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
    ]
});
