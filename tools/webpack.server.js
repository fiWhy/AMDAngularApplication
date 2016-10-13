var webpack = require('webpack'),
    config = require('../config/main'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('../config/webpack.dev');

module.exports = (function () {
    var compiler = webpack(webpackConfig);
    var server = new WebpackDevServer(compiler);
    server.listen(config.port)
})();