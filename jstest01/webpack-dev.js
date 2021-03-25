const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    mode: 'development',

    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html'})],
};