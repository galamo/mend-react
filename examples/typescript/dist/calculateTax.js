"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = void 0;
function calculateTax(_a) {
    var price = _a.price, tax = _a.tax;
    if (typeof price === "string") {
        return Number(price.replace("$", "")) * tax;
    }
    return price * tax;
}
exports.calculateTax = calculateTax;
