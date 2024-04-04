"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getSingleUser(users) {
    return users[0];
}
function getSingleProduct(products) {
    return products[0];
}
function getSingleObject(arr) {
    return arr[0];
}
var arr = [{ name: "mend", price: 10000 }];
var singleObject = getSingleObject(arr);
var singleObject2 = getSingleObject([
    { scanId: "scan_id", timestamp: "2024-03-04" },
]);
var PlayList = /** @class */ (function () {
    function PlayList() {
        this.list = [];
    }
    PlayList.prototype.add = function (listItem) {
        this.list.push(listItem);
    };
    PlayList.prototype.get = function (index) {
        return this.list[index];
    };
    PlayList.prototype.play = function () {
        this.list.pop();
    };
    return PlayList;
}());
var songs = new PlayList();
songs.add({ artist: "string", length: 1, name: "string", writer: "string" });
// songs.add({ title: "A" });
function mergeFunction(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
function merge2(s, v) {
    return 1;
}
mergeFunction({ artist: "string", length: 1, name: "string", writer: "string", a: 1 }, { title: "aa", creator: "aa", resolution: "aa", a: 1 });
