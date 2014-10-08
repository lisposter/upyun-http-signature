# upyun-http-signature
[![NPM version](https://img.shields.io/npm/v/upyun-http-signature.svg?style=flat)](https://www.npmjs.org/package/upyun-http-signature)

a simple lib for generate a signature for upyun http REST api

## Installation

```bash
$ npm install upyun-http-signature
```

## Usage
```js
var sign = require('upyun-http-signature');

console.log(sign('GET', '/test', date, 10, 'password', 'operator'));
```

## License

MIT © [Leigh Zhu](#)
