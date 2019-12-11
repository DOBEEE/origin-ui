/**
 * External dependencies
 */
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseWebpackConfig = require('./webpack.config.base');
const components = require('../components.json');

const env = process.env.NODE_ENV;

const entries = {
    'default/index': path.resolve(__dirname, '../themes/default/index.scss'),
};

const keys = Object.keys(components);

for (const key of keys) {
    entries[`default/${key}`] = path.resolve(__dirname, `../themes/default/${key}.scss`);
}

module.exports = merge(baseWebpackConfig, {
    mode: env,
    entry: entries,
    output: {
        path: path.resolve(__dirname, '../lib/themes/'),
        publicPath: '/dist/',
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, '../lib/themes/'),
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
    module: {
        rules: [...styleLoaders],
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
});
