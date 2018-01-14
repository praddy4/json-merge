var mergeModeList = {
    "arrayMerge": 0,
    "objectMerge": 1
}

function isJson(json) {
    if (json && json.constructor === {}.constructor) {
        return true;
    } else {
        console.log("ERROR: ", json, " not a JSON object");
        return false;
    }
}

var obj1 = {
    "name": "package-json",
    "version": "4.0.1",
    "description": "Get metadata of a package from the npm registry",
    "license": "MIT",
    "repository": "sindresorhus/package-json",
    "author": {
        "name": "Sindre Sorhus",
        "email": "sindresorhus@gmail.com",
        "url": "sindresorhus.com"
    },
    "engines": {
        "node": ">=4"
    },
    "scripts": {
        "test": "xo && ava"
    },
    "files": [
        "index.js"
    ],
    "keywords": [
        "npm",
        "registry",
        "package",
        "pkg",
        "package.json",
        "json",
        "module",
        "scope",
        "scoped"
    ],
    "dependencies": {
        "got": "^6.7.1",
        "registry-auth-token": "^3.0.1",
        "registry-url": "^3.0.3",
        "semver": "^5.1.0"
    },
    "devDependencies": {
        "ava": "*",
        "mock-private-registry": "^1.1.0",
        "xo": "*"
    }
}

var obj2 = {
    "name": "package-json",
    "version": "4.0.1",
    "description": "Get metadata of a package from the npm registry",
    "license": "MIT",
    "repository": "sindresorhus/package-json",
    "author": {
        "name": "Sindre Sorhus",
        "email": "sindresorhus@gmail.com",
        "url": "sindresorhus.com"
    },
    "engines": {
        "node": ">=4"
    },
    "scripts": {
        "test": "xo && ava"
    },
    "files": [
        "index.js"
    ],
    "keywords": [
        "npm",
        "registry",
        "package",
        "pkg",
        "package.json",
        "json",
        "module",
        "scope",
        "scoped"
    ],
    "amma": "love"
}


function jsonMerge(obj1, obj2, mergeMode) {
    
    var mergeMode;
    if (mergeMode) {
        mergeMode = mergeModeList[mergeMode];
        console.log("mergeMode: ", mergeMode);
    }

    if (isJson(obj1) && isJson(obj2)) {
        for (key in obj2) {
            // console.log("key: ", obj2[key]);

            switch (mergeMode) {
                case 0:
                    console.log("@@@@@@@@@@@@@@@@");
                    arrayMergeFn(key);
                    break;
                case 1:
                    console.log("################");
                    break;
                default:
                    obj1[key] = obj2[key];
                    break;
            }
        }
        return obj1;
    }

    function arrayMergeFn(key) {
        if (obj1.hasOwnProperty(key)) {
            if(typeof obj1[key] === 'string' || typeof obj1[key] === 'string') {
                obj2[key]
            }
            var tempArrgy = [obj1[key], obj2[key]];
            obj1[key] = tempArr;

            // if (obj1[key].constructor === Array) {
            //     console.log(key);
            // }

        } else {
            obj1[key] = obj2[key];
        }
    }

    function jsonMergeFn(key) {
        if (obj1.hasOwnProperty(key)) {
            // var tempObj = {obj1[key], obj2[key]];
            // obj1[key] = tempArr;

            if (obj1[key].constructor === {}.constructor) {
                console.log(key);
            }

        } else {
            obj1[key] = obj2[key];
        }
    }

}

console.log(jsonMerge(obj1, obj2, 'arrayMerge'));