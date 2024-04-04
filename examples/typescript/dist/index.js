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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var settings_json_1 = __importDefault(require("./settings.json"));
var calculateTax_1 = require("./calculateTax");
console.log("new price is: ".concat((0, calculateTax_1.calculateTax)({ price: "40$", tax: 2 })));
console.log("new price is: ".concat((0, calculateTax_1.calculateTax)({ price: 40, tax: 2 })));
var data = "Mend Scan";
function setConfiguration(config) {
    console.log(config.localTime);
    return true;
}
setConfiguration(settings_json_1.default);
console.log(settings_json_1.default);
var book1 = {
    author: { firstName: "jorden", lastName: "peterson" },
    title: "12 rules of life",
    numberOfPages: 330,
};
var book2 = {
    author: { firstName: "jorden", lastName: "peterson" },
    title: "12 rules of life",
};
function addNewpage(book) {
    book.numberOfPages = book.numberOfPages + 1;
}
function sendBookToApi(book) { }
sendBookToApi({ title: "" });
// addNewpage(book2); this is error
console.log(book1);
var axiosRequest = {
    request: {},
    response: {},
    requestId: "ssss",
};
function getApiData(book) {
    // saved in database
    return __assign(__assign({}, book), { id: "New Id From Api" });
}
