export default function onceDone (promise, callback) {
    var Promise = promise.constructor;

    return promise.then(
        value => Promise.resolve(callback()).then(() => value),
        reason => Promise.resolve(callback()).then(() => Promise.reject(reason))
    );
}
