# node-json-merge
This package provides api to merge 2 json objects, with customized merge in nodejs.


## Installation and usage

``` bash
npm install node-json-merge
```

``` javascript
var merge = require("node-json-merge") ;
```

## Merging of JSON objects

``` javascript
var obj1 = {a:true, b:false} ;
var obj2 = {b:true, c:12345} ;
var result = merge.jsonMerge(obj1, obj2) ;
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```

