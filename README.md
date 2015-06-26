# less-hot
A hot loader for LESS, primarily intended for use with Electron.

It compiles the LESS file, registers a watcher on the file, and returns a `<style>` element. Whenever the file is changed, the contents of that element will be updated.

# Install

With [npm](https://npmjs.org/) do:

```shell
npm install less-hot
```

# Example

```javascript
var LessHotLoader = require('less-hot');
var lessLoader = new LessLoader();
document.querySelector('head').appendChild(lessLoader('test.less'));
```

# Options

You can pass in an optional object to specify the cache directory for the less files. It will use a temporary directory by default.

```javascript
var lessLoader = new LessLoader({cacheDir: '/path/to/dir/'});
```

