const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081,
        proxy: {'*':'http://localhost:8080/'},
        host: 'localhost'
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
    plugins: [new HtmlWebpackPlugin({ template: './src/client/views/index.html'})],
};