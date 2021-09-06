const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
});