var webpack = require('webpack');
var webpackBaseConfig = require('./webpack.config.base');

webpackBaseConfig.devServer = {
    progress: true,
    colors: true,
    port: 8081,
    inline: true,
};

module.exports = webpackBaseConfig;
