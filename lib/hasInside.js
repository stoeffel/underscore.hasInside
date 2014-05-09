module.exports = function hasInside(obj, property) {
    return findInside(obj, function(obj) {
        return obj.hasOwnProperty(property);
    });
};

function findInside(obj, predicate) {
    if (typeof obj !== 'object') {
        return false;
    }
    if (predicate(obj)) {
        return true;
    } else {
        return any(obj, function(value) {
            return findInside(value, predicate);
        });
    }
}

function any(obj, callback) {
    var or = false;
    Object.keys(obj).forEach(function(key) {
        if (callback(obj[key])) {
            or = true;
        }
    });
    return or;
}
