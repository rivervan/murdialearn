const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'production',

    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})],
    },

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
                    },

            {
                test: /.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

        ],

    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html'}),
              new MiniCssExtractPlugin(),
              new WorkboxPlugin.GenerateSW({clientsClaim: true, skipWaiting: true}),
    ]

};