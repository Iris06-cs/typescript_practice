"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            throw new Error("Invalid Amount");
        }
        this._balance -= amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Iris", 0);
account.deposit(100);
console.log(account.balance);
console.log(account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Iris";
seats.A2 = "Jason";
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
        Ride._totalRides++;
    }
    stop() {
        this.activeRides--;
        Ride._totalRides--;
    }
    static get totalRides() {
        return Ride._totalRides;
    }
}
Ride._totalRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
console.log(Ride.totalRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
    working() {
        console.log("working");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
let student = new Student(1, "John", "Lee");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("John", "Lee");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([new Student(1, "John", "Lee"), new Teacher("Mary", "Wang")]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("render a circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "a");
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray(1);
function fetchUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                return { data: null, error: "Error fetching data" };
            }
            const data = yield response.json();
            return { data, error: null };
        }
        catch (error) {
            return {
                data: null,
                error: error instanceof Error ? error.message : "Unknown error",
            };
        }
    });
}
let result = fetchUrl("url");
function echo(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() {
        console.log("compressed");
    }
}
let store = new CompressibleStore();
store.add({ name: "product", price: 1 });
store.compress();
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category)
            return [];
        return [];
    }
}
//# sourceMappingURL=index.js.map