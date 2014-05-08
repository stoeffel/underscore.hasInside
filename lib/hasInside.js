var _ = require('underscore');

module.exports = function hasInside(obj, property) {
    if (!_.isObject(obj)) {
        return false;
    }
    if (_.has(obj, property)) {
        return true;
    } else {
        return _.any(obj, function(value) {
            return hasInside(value, property);
        });
    }
};
