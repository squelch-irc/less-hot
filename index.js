var LessCache = require('less-cache');
var os = require('os');
var chokidar = require('chokidar');

module.exports = function(opts) {
    if (!document || !process) {
        throw new Error('less-hot can only be used in Electron\'s BrowserWindow context');
    }

    opts = opts || {};
    var cacheDir = opts.cacheDir || os.tmpdir();
    var cache = new LessCache({cacheDir: cacheDir});

    var load = function(path) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = cache.readFileSync(path);

        chokidar.watch(path, {persistent: false})
            .on('change', function(path) {
                style.innerHTML = cache.readFileSync(path);
            });

        return style;
    };

    return load;
};
