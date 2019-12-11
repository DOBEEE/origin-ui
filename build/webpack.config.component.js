const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.config.base');
const pkg = require('../package.json');
const merge = require('webpack-merge');
const env = process.env.NODE_ENV;
const fs = require('fs');
function resolve(dir) {
    return path.join(__dirname, "..", dir);
}
const componentDir = 'src/components';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));

const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = resolve(`${componentDir}/${name}/index`);

  return prev;
}, {});

module.exports = merge(baseConfig, {
    mode: env,
    entry: cModuleMap,
    output: {
        path: resolve("lib"),
        publicPath: '/dist/',
        filename: '[name]/index.js',
        library: ['origin-ui', '[name]'],
        libraryTarget: 'umd',
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
    },
    externals: Object.keys(pkg.dependencies || {}).concat(['components']).map(pkgName => (context, request, callback) => {
        // 逻辑：以模块名 pkgName 开始的引用都将视为外部模块
        request.indexOf(pkgName) === 0 ? callback(null, request) : callback();
    }).concat(Object.keys(cModuleMap).map(pkgName => (context, request, callback) => {
        request.indexOf(`../${pkgName}`) === 0 ? callback(null, request) : callback();
    })),
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]/style/index.css"
        }),
    ]
});
