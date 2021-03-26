const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createProxyMiddleware  = require('http-proxy-middleware');


module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
        port:9090,
        historyApiFallback: true,
        proxy: {
            '/test': {
                target: 'http://localhost:8080',
            }
        },
    },
    mode: 'development',

    module: {
        rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.scss$/,
                        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                    }


            ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html'})],
};