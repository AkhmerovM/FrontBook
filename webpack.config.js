const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    build: path.resolve('www/build/'),
    src: path.resolve('assetSource/'),
};
// const isDev = NODE_ENV == 'development';
// console.log(process.env.NODE_ENV);
module.exports = {
    context: paths.src,
    entry: {
      main: './index.js',
    },
    output: {
      filename: '[name].js',
        path: paths.build,
  },
    module: {
        rules: [
        {
            test: /\.js|.jsx$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        },
        {
            test: /\.less$/,
            exclude: '/node_modules',
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }
        ]
    },
    plugins: [new ExtractTextPlugin({
        filename: '[name].min.css'
    })],
    devServer: {
      contentBase: paths.build,
        compress: true,
        port: 9000,
        hot: true,
    },
    watch: false,
    resolve: {
        extensions: ['.jsx','.js'],
        modules: ['node_modules' ,paths.src],
    },
    watchOptions: {
      aggregateTimeout: 300,
    }
};