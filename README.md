# node-json-merge
This package provides API to merge 2 JSON objects, with customized merge in nodejs.


## Installation and usage

``` bash
npm install node-json-merge
```

``` javascript
var merge = require("node-json-merge");
merge.jsonMerge(obj1, obj2 [,options]);
```

## Merging of JSON objects(Default behaviour)

``` javascript
var obj1 = {a:true, b:false};
var obj2 = {b:true, c:12345};
var result = merge.jsonMerge(obj1, obj2);
console.log(result) ;
// Object {a: true, b: true, c: 12345}
```
The above usage of API will merge obj2 with obj1 by:
* Overwriting the key present in both objects, with the value of the key present in obj2
* Adding new key:value pair if the key exists only in one of the object   

Thus returning a new JSON object as shown in the example above. This is the default behaviour of the API.


## Customized merge

The API provided as part of this package can be configured to do customized merge, by passing a 'options' object as a third parameter.

|options| obj1 | obj2 | result | Description |
| --------------- | --------------- | --------------- | --------------- | --------------- |
| {"stringArrayMerge": true} | { a: 'silicon' } | {a: 'valley'} | { a: [ 'silicon', 'valley' ] } | If same key is present in obj1 and obj2, and if its value is string bothe values would be pushed into an array |
| {"stringArrayMerge": true} | { a: 'silicon' } | {a: 'valley'} | { a: [ 'silicon', 'valley' ] } | |
| {"stringArrayMerge": true} | { a: 'silicon' } | {a: 'valley'} | { a: [ 'silicon', 'valley' ] } | |
| {"stringArrayMerge": true} | { a: 'silicon' } | {a: 'valley'} | { a: [ 'silicon', 'valley' ] } | |
| {"stringArrayMerge": true} | { a: 'silicon' } | {a: 'valley'} | { a: [ 'silicon', 'valley' ] } | |

| git diff | Show file differences that haven't been staged |


