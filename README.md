# node-json-merge
This package provides api to merge 2 json objects, with customized merge in nodejs.


## Installation and usage

``` bash
npm install node-json-merge
```

``` javascript
var merge = require("node-json-merge");
merge.jsonMerge(obj1, obj2 [,options])
```

## Merging of JSON objects

``` javascript
var obj1 = {a:true, b:false} ;
var obj2 = {b:true, c:12345} ;
var result = merge.jsonMerge(obj1, obj2) ;
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```
The above usage of api will merge obj2 with obj1 by overwriting those keys present in both objects with value of the key present in obj2, returning a new json object.

## Customized merge

The api provided as part of this package can be configured to do customized merge, by passing a 'options' object as a third parameter.


