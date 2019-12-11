module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: '> 0.25%, not dead',
                },
                modules: 'false', // 禁用babel-preset-env的模块化规范转化
                debug: false,
                corejs: '3.0.0',
                useBuiltIns: 'usage', // 是否开启自动支持 polyfill
            },
        ],
    ],
    plugins: [
        "babel-plugin-syntax-dynamic-import",
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ],
    
};