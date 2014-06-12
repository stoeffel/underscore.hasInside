var me = exports = module.exports = {};

function isFunction(func) {
    return typeof func === 'function';
}

exports.hasInside = function(obj, property, expected) {
    var predicate = function(obj) {
        var isTruthy = obj.hasOwnProperty(property);
        if (typeof(expected) !== 'undefined' && isTruthy) {
            if (isFunction(expected)) {
                isTruthy = expected(obj[property]);
            } else {
                isTruthy = obj[property] === expected;
            }
        }
        return isTruthy;
    };
    return me.findInside(obj, predicate);
};

exports.findInside = function(obj, predicate) {
    predicate = predicate || function() {
        return false;
    };
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    if (predicate(obj)) {
        return true;
    } else {
        return me.any(obj, function(value) {
            return me.findInside(value, predicate);
        });
    }
};

exports.any = function(obj, callback) {
    var or = false;
    Object.keys(obj).forEach(function(key) {
        if (callback(obj[key])) {
            or = true;
        }
    });
    return or;
};
