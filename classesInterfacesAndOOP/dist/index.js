"use strict";
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
//# sourceMappingURL=index.js.map