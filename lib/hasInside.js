var _ = require('underscore');

module.exports = function hasInside(obj, property) {
    return findInside(obj, function(obj) {
        return _.has(obj, property);
    });
};

function findInside(obj, predicate) {
    if (!_.isObject(obj)) {
        return false;
    }
    if (predicate(obj)) {
        return true;
    } else {
        return _.any(obj, function(value) {
            return findInside(value, predicate);
        });
    }
}
