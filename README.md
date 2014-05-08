underscore.hasInside
====================

Check if an object or it's descendants have a property.

Installation
------------

`npm install underscore.has-inside`

Usage
-----

```javascript
        _.mixin({
            hasInside: require('underscore.has-inside')
        });


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
