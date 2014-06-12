var me = exports = module.exports = {};

exports.hasInside = function(obj, property) {
    var predicate = function(obj) {
        return obj.hasOwnProperty(property);
    };
    return me.findInside(obj, predicate);
};

exports.findInside = function(obj, predicate) {
    predicate = predicate || function() {
        return false;
    };
    if (typeof obj !== 'object') {
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
