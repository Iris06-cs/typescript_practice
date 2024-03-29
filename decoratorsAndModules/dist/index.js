"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pile decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Log(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person.prototype, "fullName", null);
let person = new Person("iris", "0");
console.log(person.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long.`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user2 = new User("1234");
console.log(user2.password);
const PropDecorator = (...args) => {
    console.log(args);
};
class Hd {
}
__decorate([
    PropDecorator
], Hd.prototype, "name", void 0);
const watchedParameters = [];
const Watch = (target, methodName, parameterIndex) => {
    watchedParameters.push({
        methodName,
        parameterIndex,
    });
};
class Car {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Car.prototype, "move", null);
console.log(watchedParameters);
function Sauce(sauce) {
    return (constructor) => {
        console.log("Sauce decorator is called");
        constructor.prototype.sauce = sauce;
    };
}
let Pizza = class Pizza {
    constructor(name) {
        this.name = name;
    }
};
Pizza = __decorate([
    Sauce("pesto")
], Pizza);
let pizza = new Pizza("mypizza");
console.log(pizza.sauce);
//# sourceMappingURL=index.js.map