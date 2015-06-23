var LessCache = require('less-cache');
var os = require('os');
// var fs = require('fs');

module.exports = function(opts) {
    opts = opts || {};
    var cacheDir = opts.cacheDir || os.tmpdir();
    var cache = new LessCache({cacheDir: cacheDir});

    var load = function(path) {
        return cache.readFileSync(path);
    };

    load.style = function(/*path*/) {
        // var css = load(path);
        // TODO: make sure document exists, create style tag
        throw new Error('Not yet implemented');
    };

    load.style.hot = function(/*path*/) {
        // var style = style(path);
        // TODO: add watcher on less file and swap in new compiled less
        throw new Error('Not yet implemented');
    };

    return load;
};
