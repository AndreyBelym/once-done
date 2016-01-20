function onceDone (promise, callback) {
    return promise.then(
        function (value) {
            return promise.constructor
                .resolve(callback())
                .then(function () {
                    return value;
                });
        },
        function (reason) {
            return promise.constructor
                .resolve(callback())
                .then(function () {
                    return promise.constructor.reject(reason);
                })
        }
    );
}

module.exports = onceDone;
