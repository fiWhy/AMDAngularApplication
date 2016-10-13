var config = require('./main'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: config.src + '/app.tsx',
        vendor: config.src + '/vendor.tsx'
    },
    resolve: {
        extensions: ['', '.tsx', '.js', '.json', '.scss']
    },
    module: {
        loaders: [
            { test: /\.(ts|tsx)$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
        ]
    },
    sassLoader: {
        includePaths: [config.src + 'scss']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

};