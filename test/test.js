'use strict';
var should = require('should');
var sign = require('..');

var date = 'Wed Oct 08 2014 16:20:11 GMT+0800 (CST)';
describe('make sign', function() {
    it('should return a sign', function() {
        sign('GET', '/test', date, 10, 'password', 'operator').should.be.exactly('UpYun operator:d2a6701753ec00921ce2f2a831eb6a44');
    });

    it('should can omit date param', function() {
        sign('GET', '/test', null, 10, 'password', 'operator').should.match(/UpYun operator:/);
    });

    it('should drop query params', function() {
        sign('GET', '/test?q1=foo&q2=bar', date, 10, 'password', 'operator').should.be.exactly('UpYun operator:d2a6701753ec00921ce2f2a831eb6a44');
    });
});
