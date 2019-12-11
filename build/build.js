process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
// const shell = require('shelljs');
const webpackConfig =
    process.env.BUILD_TYPE === 'lib' ? 
    [require('./webpack.config.common'), require('./webpack.config.component'), require('./webpack.config.umd')] 
    : [require('./webpack.config.umd')];
    // const webpackConfig = require('./webpack.config.component');
const spinner = ora('building for production...');
spinner.start();

// TODO 后续再把这块抽成配置
rm(path.join(__dirname, '../lib'), err => {
    if (err) {
        throw err;
    }
    // shell.exec('cp .babelrc node_modules/vux');
    webpackConfig.forEach(async conf => {
        await webpack(conf, function(err, stats) {
            spinner.stop();
            if (err) {
                throw err;
            }
            process.stdout.write(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                }) + '\n\n'
            );
            /* eslint-disable no-console */
            console.log(chalk.cyan('  Build complete.\n'));
            console.log(
                chalk.yellow(`
                Tip: built files are meant to be served over an HTTP server.
                Opening index.html over file:// won't work.
            `)
            );
        });
    });
});
// console.log(chalk.cyan('mv index.html.\n'))
// shell.exec('mv build/assets/index.html build/')
