"use strict";
var p = {
    name: "gal",
    age: 35,
    role: "admin",
    type: "main",
    permission: "write",
};
var persons = [
    {
        name: "Israel",
        age: 20,
        permission: "user",
        type: "User",
    },
    {
        name: "Snir",
        age: 20,
        role: "admin",
        type: "Admin",
    },
    {
        name: "Ronit",
        age: 20,
        role: "admin",
        type: "Admin",
    },
];
function extraInfo(p) {
    var additionalInfo = "";
    if ("role" in p) {
        additionalInfo = p.role;
    }
    else if ("permission" in p) {
        additionalInfo = p.permission;
    }
    return additionalInfo;
}
