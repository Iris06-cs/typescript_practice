"use strict";
var _a;
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(doc) {
    console.log(doc);
}
let numbers = [];
let user = [1, "Iris"];
console.log(typeof user);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023)
        return income * 2;
    return income * 3;
}
calculateTax(10000);
let employee = { id: 1 };
employee.name = "Iris";
let employee2 = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Iris";
let employee3 = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer1 = getCustomer(1);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let arr = [];
console.log(arr === null || arr === void 0 ? void 0 : arr[0]);
arr[0] = 1;
console.log(arr === null || arr === void 0 ? void 0 : arr[0]);
let log = null;
console.log(log === null || log === void 0 ? void 0 : log("a"));
log = (message) => message;
console.log(log === null || log === void 0 ? void 0 : log("a"));
//# sourceMappingURL=index.js.map