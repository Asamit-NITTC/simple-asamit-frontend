const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //エントリポイント
    output: {
        path: path.resolve(__dirname,  './dist'),
        //path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: '/', // assetに対するベースURL
    },
    // target: 'web',
   resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: './images/[name].[ext]',
                  },
                },
              ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
        }),
        new GenerateSW({
          swDest: './dist/sw.js'
        })
    ],
};
