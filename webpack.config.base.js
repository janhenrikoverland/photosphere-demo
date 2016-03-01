var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                },
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    },
};
