var should = require('should'),
    hasInside = require('../lib/hasInside'),
    _ = require('underscore');

describe('hasInside', function() {
    beforeEach(function() {
        _.mixin({
            hasInside: hasInside
        });
    });

    it('should return false if not an object is passed', function() {
        _.hasInside().should.not.be.ok;
        _.hasInside([], 'bar').should.not.be.ok;
        _.hasInside(1, 'bar').should.not.be.ok;
        _.hasInside('foo', 'bar').should.not.be.ok;
        _.hasInside({}).should.not.be.ok;
    });

    it('should return false if object has no property bar', function() {
        _.hasInside({
            foo: 'bar'
        }, 'bar').should.not.be.ok;
    });

    it('should return true if object has property foo', function() {
        _.hasInside({
            foo: 'bar'
        }, 'foo').should.be.ok;
    });

    it('should return false if object and descendants have no property bar', function() {
        _.hasInside({
            foo: 'bar',
            moo: {
                boo: 'poo'
            }
        }, 'bar').should.not.be.ok;
    });

    it('should return true if descendants has property boo', function() {
        _.hasInside({
            foo: 'bar',
            moo: {
                boo: 'poo'
            },
            arrrr: [1, 2, 3, 4]
        }, 'boo').should.be.ok;
    });
});
