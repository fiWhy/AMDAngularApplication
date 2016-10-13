var webpack = require('webpack'),
    webpackConfig = require('../config/webpack.dev');

module.exports = (function () {
    return webpack(webpackConfig, function(data) {
        // console.log(data);
    });
})();