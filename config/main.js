var root = require('../helpers/root');
module.exports = (function () {
    var base = root('./'),
        src = root('src'),
        dist = root('dist');

    return {
        base: base,
        src: src,
        dist: dist,
        port: 8080
    }
})();