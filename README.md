# once-done
[![Build Status](https://travis-ci.org/AndreyBelym/once-done.svg?branch=master)](https://travis-ci.org/AndreyBelym/once-done)

*Call a function when a Promise is settled.*

Implementation of [Promise.prototype.finally](https://gist.github.com/rbuckton/66918c8491aa335b003c) as non-method function.

Written in ES6, transpiled by [Babel](http://babeljs.io/).

## Install
```
npm install once-done
```
## Usage
Use it like `try..finally` for promises:
```
var onceDone = require('once-done');

var file = getFile();

var someResultPromise = handleFileAsync(); //someStatsPromise may be rejected

onceDone(someResultPromise, function () {
    file.close(); //Close the file in any situation
    return file.deleteAsync(); //You may return Promise, and it will be resolved!
})
.then(function (result) {
    //Handle the result
})
.catch(function (reason) {
    //Check a reason of rejection
});
```
