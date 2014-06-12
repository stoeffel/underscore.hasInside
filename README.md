[![Build Status](https://travis-ci.org/stoeffel/underscore.hasInside.png?branch=master)](https://travis-ci.org/stoeffel/underscore.hasInside)

underscore.hasInside
====================

Check if an object or it's descendants fullfill a predicate

Installation
------------

`npm install underscore.has-inside`


Usage
-----

### setup

```javascript
        _.mixin(require('underscore.has-inside'));
```


### findInside

Checks a predicate for an object and its descendant
```javascript
        var obj = {
            foo: 'bar',
            moo: {
                boo: 'poo'
            },
            arrrr: [1,2,3,4]
        };
        _.findInside(obj, function(item) {
            return item.boo && item.boo === 'poo';
        });  // -> true
```


### hasInside

Check if an object or it's descendants have a property
```javascript
        var obj = {
            foo: 'bar',
            moo: {
                boo: 'poo'
            },
            arrrr: [1,2,3,4]
        };
        _.hasInside(obj, 'boo');  // -> true

        _.hasInside(obj, 'bar');  // -> false
```
