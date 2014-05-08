underscore.hasInside
====================

Check if an object or it's descendants have a property.

Usage
-----

```javascript
// Mixin
        _.mixin({
            hasInside: require('underscore.hasInside')
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
