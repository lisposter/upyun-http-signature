# upyun-http-signature
[![NPM version](https://img.shields.io/npm/v/upyun-http-signature.svg?style=flat)](https://www.npmjs.org/package/upyun-http-signature)
[![Build status](https://img.shields.io/travis/lisposter/upyun-http-signature.svg?style=flat)](https://travis-ci.org/lisposter/upyun-http-signature)
[![Test coverage](https://img.shields.io/coveralls/lisposter/upyun-http-signature.svg?style=flat)](https://coveralls.io/r/lisposter/upyun-http-signature?branch=master)

a simple lib for generate a signature for upyun http REST api

## Installation

```bash
$ npm install upyun-http-signature
```

## Usage

```js
sign(http_method, path, date, content_length, password, operater);
```

__Arguments__

* `http_method`: HTTP method(eg, `'GET'`, `'PUT'`, etc)
* `path`: request path
* `content_length`: content-length of the request, if no request body, it should be `0`
* `password`: operator's password
* `operator`: upyun bucket's operator 

### In Node.js
```js
var sign = require('upyun-http-signature');

console.log(sign('GET', '/test', date, 10, 'password', 'operator'));
```

### In browser (with [browserify](http://browserify.org/))
```html
<script src="../dist/upyun-sign-browserify.min.js"></script>
<script>
var sign = require('upyun-http-signature');

var date = 'Wed Oct 08 2014 16:20:11 GMT+0800 (CST)';
console.log(sign('GET', '/test', date, 10, 'password', 'operator'));
</script>
```
you can see the [demo](https://github.com/lisposter/upyun-http-signature/blob/master/demo/index.html) for this.

## License

MIT © [Leigh Zhu](#)
