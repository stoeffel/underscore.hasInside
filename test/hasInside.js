var should = require('should'),
    hasInside = require('../lib/hasInside'),
    _ = require('underscore');

describe('hasInside', function() {
    beforeEach(function() {
        _.mixin(hasInside);
    });

    describe('#findInside', function() {
        it('should return false if not an object is passed', function() {
            _.findInside().should.not.be.ok;
            _.findInside([], function() {}).should.not.be.ok;
            _.findInside(1).should.not.be.ok;
            _.findInside('foo').should.not.be.ok;
        });

        it('should return false if an object but no predicate is passed', function() {
            _.findInside({}).should.not.be.ok;
        });

        it('should evaluate the predicate for each object', function() {
            var predicate = function(obj) {
                return obj.foo && obj.foo === 'bar';
            };
            _.findInside({
                foo: 'bar'
            }, predicate).should.be.ok;

            _.findInside({
                moo: 'boo'
            }, predicate).should.not.be.ok;

            _.findInside({
                sub: {
                    moo: 'boo'
                }
            }, predicate).should.not.be.ok;
        });
    });

    describe('#hasInside', function() {
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

        it('checks if the value is equals to the expected value', function() {
            var obj = {
                foo: 'bar',
                nil: null,
                moo: {
                    boo: 'poo'
                },
                arrrr: [1, 2, 3, 4]
            };
            _.hasInside(obj, 'foo', 'bar').should.be.ok;
            _.hasInside(obj, 'foo', 'blub').should.not.be.ok;
            _.hasInside(obj, 'boo', 'moo').should.not.be.ok;
            _.hasInside(obj, 'boo', 'poo').should.be.ok;
            _.hasInside(obj, 'nil', null).should.be.ok;
        });
    });
});
