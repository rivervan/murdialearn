const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',

    module: {
        rules: [

                    { test: /\.txt$/, use: 'raw-loader' },

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