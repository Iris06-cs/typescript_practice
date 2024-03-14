class Account {
  // different from JavaScript, need to define properties
  //   readonly id: number; //cannot change readonly property
  //   owner: string;
  //   private _balance: number;
  nickname?: string; //optional property

  //   constructor(id: number, owner: string, balance: number) {
  //     this.id = id;
  //     this.owner = owner;
  //     this._balance = balance;
  //   }
  // better way to define constructor,parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this._balance) {
      throw new Error("Invalid Amount");
    }
    this._balance -= amount;
  }
  //   getBalance(): number {
  //     return this._balance;
  //   }
  // use getter/setter
  get balance(): number {
    return this._balance;
  }
}
// create object
let account = new Account(1, "Iris", 0);
account.deposit(100);
// console.log(account.getBalance());
console.log(account.balance);
console.log(account); //object
console.log(account instanceof Account); //true

// TypeScript access modifiers public private protected

// using index signatures to create properties dynamically
class SeatAssignment {
  // seat number A1 A2...
  // name
  [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = "Iris";
seats.A2 = "Jason";

class Ride {
  activeRides: number = 0;
  private static _totalRides: number = 0;
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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides); //1
console.log(ride2.activeRides); //1
// activeRides belongs to each instance independently
console.log(Ride.totalRides); //2

// inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Walking");
  }
}
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("Taking a test");
  }
}
let student = new Student(1, "John", "Lee");
class Teacher extends Person {
  override get fullName() {
    //set noImplicitOverride to true
    return "Professor " + super.fullName;
  }
}
let teacher = new Teacher("John", "Lee");
console.log(teacher.fullName);

// polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
printNames([new Student(1, "John", "Lee"), new Teacher("Mary", "Wang")]);
// Classes should be open for extension and closed for modification(open closed principle)
