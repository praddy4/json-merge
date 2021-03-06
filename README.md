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

The API provided as part of this package can be configured to do customized merge, by passing 'options' object as a third parameter to the API.

|options| obj1 | obj2 | result |
| --------------- | --------------- | --------------- | --------------- |
| {stringArrayMerge:true} | {a:'silicon'} | {a:'valley'} | {a:['silicon','valley']} |
| {arrayNestedMerge: true} | {a:['silicon']} | {a:['valley']} | {a:[['silicon'],['valley']]} |
| {arrayMerge:true} | {a:['silicon']} | {a:['valley']} | {a:['silicon','valley']} |
| {objectArrayMerge: true} | {a:{'silicon':'valley'}} | {a:{'mountain':'view'}} | {a:[{'silicon':'valley'},{'mountain':'view'}]} |
| {objectMerge:true} | {a:{'silicon':'valley'} } | {a:{'mountain':'view'} } | {a:{'silicon':'valley','mountain':'view'}}|

## Note:
* In case of passing options as {arrayMerge: true, arrayNestedMerge: true}, then 'arrayNestedMerge' is given priority
* In case of passing options as {objectArrayMerge: true, objectMerge: true}, then 'objectArrayMerge' is given priority
* In case of passing options as { }, merge will happen with default behaviour 
* If obj1 and obj2 has differnet type of values for a key, then in the result object the key will have value of obj2
* For a particular type of customized merge to happen, in the options object the valid flag has to be set to true and passed to the API as third paramter

