var obj1 = require('./obj1.json');
var obj2 = require('./obj2.json');


function isJson(json) {
    if (json && json.constructor === {}.constructor) {
        return true;
    } else {
        console.log("ERROR: ", json, " not a JSON object");
        return false;
    }
}


function jsonMerge(obj1, obj2, options) {

    var mergeMode = {
        "stringArrayMerge": false,
        "arrayNestedMerge": false,
        "arrayMerge": false,
        "objectArrayMerge": false,
        "objectMerge": false
    }

    if (options) {
        for (mode in options) {
            if (mergeMode.hasOwnProperty(mode)) {
                mergeMode[mode] = options[mode];
                // console.log("MergeMode: ");
                // console.log(mergeMode);
            } else {
                console.log("ERROR: Invalid option '" + mode + "'");
                return
            }
        }
    }

    if (isJson(obj1) && isJson(obj2)) {
        var resultJson = JSON.parse(JSON.stringify(obj1));

        for (key in obj2) {
            checkKeyTypeFn(key);
        }

        return resultJson;

    } else {
        console.log("ERROR: Invalid JSON arguement passed");
    }

    function checkKeyTypeFn(key) {
        if (typeof obj2[key] === "string") {
            stringMergeFn(key);
        } else if (obj2[key].constructor === Array) {
            arrayMergeFn(key);
        } else if (obj2[key].constructor === {}.constructor) {
            jsonMergeFn(key);
        } else {
            resultJson[key] = obj2[key];
        }
    }

    function stringMergeFn(key) {
        if (resultJson[key] && typeof resultJson[key] === "string") {
            if (mergeMode.stringArrayMerge) {
                var temp = [resultJson[key], obj2[key]];
                resultJson[key] = temp;
            } else {
                resultJson[key] = obj2[key];
            }
        } else {
            resultJson[key] = obj2[key];
        }
    }

    function arrayMergeFn(key) {
        if (resultJson[key] && resultJson[key].constructor === Array) {

            if (mergeMode.arrayNestedMerge) {
                console.log("arrayNestedMerge")
                var temp = [resultJson[key], obj2[key]];
                resultJson[key] = temp;
            } else if (mergeMode.arrayMerge) {
                console.log("arrayMerge")
                resultJson[key] = resultJson[key].concat(obj2[key]);
            } else {
                resultJson[key] = obj2[key];
            }
        } else {
            resultJson[key] = obj2[key];
        }
    }

    function jsonMergeFn(key) {
        if (resultJson[key] && resultJson[key].constructor === {}.constructor) {

            if (mergeMode.objectArrayMerge) {
                console.log("objectArrayMerge")
                var temp = [resultJson[key], obj2[key]];
                resultJson[key] = temp;
            } else if (mergeMode.objectMerge) {
                console.log("objectMerge");
                for(prop in obj2[key]) {
                    resultJson[key][prop] = obj2[key][prop];
                }
            } else {
                resultJson[key] = obj2[key];
            }
        } else {
            resultJson[key] = obj2[key];
        }
    }

}

var res = jsonMerge(obj1, obj2, {
    "stringArrayMerge": false,
    "arrayMerge": true,
    "objectArrayMerge": true
});

console.log(res);