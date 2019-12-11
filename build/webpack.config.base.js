const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const env = process.env.NODE_ENV;
function resolve(dir) {
    return path.join(__dirname, "..", dir);
}

module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.min.js',
            '@': resolve('src'),
            'components': resolve('src/components'),
        },
    },
    externals: {
        vue: {
            root: "Vue",
            commonjs: "vue",
            commonjs2: "vue",
            amd: "vue"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [autoprefixer({
                                browsers: ['last 2 versions', 'Android >= 4.0', 'iOS 7'],
                            })]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [autoprefixer({
                                browsers: ['last 2 versions', 'Android >= 4.0', 'iOS 7'],
                            })]
                        }
                    },
                    {
                        loader: 'less-loader',
                    },
                    {
                        loader: 'style-resources-loader',
                        options: {
                            injector: 'prepend',
                            patterns: [
                                resolve('src/static/style/theme.less')
                            ],
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
                include: [resolve('src')],
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                    }
                ],
                
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-plain-loader",
                    }
                ],
            },
        ]
    },
    optimization: {
        minimizer: env === 'production' ? [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ] : false
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': env,
        })
    ]
};
