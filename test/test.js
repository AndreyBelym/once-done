var assert   = require('assert');
var Promise  = require('pinkie-promise');
var onceDone = require('../');

it('Should call callback when a Promise is resolved', function () {
    var resolved       = false;
    var callbackCalled = false;
    var promise        = new Promise(function (resolve) {
        setTimeout(function () {
            resolved = true;
            resolve(42);
        }, 10);
    });

    return onceDone(promise, function () {
            callbackCalled = true;
        })
        .then(function (value) {
            assert.strictEqual(value, 42);
            assert.ok(callbackCalled);
            assert.ok(resolved);
        });
});

it('Should call callback when a Promise is rejected', function () {
    var rejected       = false;
    var callbackCalled = false;
    var promise        = new Promise(function (resolve, reject) {
        setTimeout(function () {
            rejected = true;
            reject(42);
        }, 10);
    });

    return onceDone(promise, function () {
            callbackCalled = true;
        })
        .then(function () {
            throw new Error('Promise rejection expected!');
        })
        .catch(function (reason) {
            assert.strictEqual(reason, 42);
            assert.ok(callbackCalled);
            assert.ok(rejected);
        });
});
