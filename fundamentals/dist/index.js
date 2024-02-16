"use strict";
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
//# sourceMappingURL=index.js.map