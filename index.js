'use strict';

var crypto = require('crypto');

function md5sum(data) {
    var md5 = crypto.createHash('md5');
    md5.update(data, 'utf8');
    return md5.digest('hex');
}

module.exports = exports.makeSign = function(method, uri, date, length, password, operator) {
    if(date) {
        date = new Date(date).toGMTString();
    } else {
        date = new Date().toGMTString();
    }

    if(uri.indexOf('?') >= 0) {
        uri = uri.split('?')[0];
    }

    if(uri.indexOf('/') !== 0) {
        uri = '/' + uri;
    }

    var sign = method + '&' + uri + '&' + date + '&' + length + '&' + md5sum(password);
    return 'UpYun ' + operator + ':' + md5sum(sign);
};

