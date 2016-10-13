var config = require('./main'),
    webpackConfig = require('./webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    output: {
        path: config.dist,
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: 'http://localhost:' + config.port + '/'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
});