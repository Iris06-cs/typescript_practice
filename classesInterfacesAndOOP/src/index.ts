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
  protected walk() {
    console.log("Walking");
  }
  working() {
    console.log("working");
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

// different between protected(can be inherited,not often used) and private members

// abstract classes & methods
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void; // render depends on shape, abstract method can only in abstract class
}
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("render a circle");
  }
}
// let shape = new Shape("red") // error, cannot create an instance of an abstract class

// abstract vs interface
// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  // compile nothing to js file, just to describe the shape of an object
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
// generic class

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair<number, string>(1, "a");

function wrapInArray<T>(value: T) {
  return [value];
}
let numbers = wrapInArray(1);

// generic interface

// http://mysite.com.users
// http://mysite.com.products
interface Result<T> {
  data: T | null;
  error: string | null;
}
async function fetchUrl<T>(url: string): Promise<Result<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: "Error fetching data" };
    }
    const data: T = await response.json();
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
interface User {
  username: String;
}

// interface Product {
//   title: string;
// }
let result = fetchUrl<User>("url");

// Generic constraints (type,object shape,interface,class)

// function echo<T extends number | string>(value: T): T {
//   return value;
// }
// function echo<T extends { name: string }>(value: T): T {
//   return value;
// }
interface Person {
  name: string;
}
// class Person {
//   constructor(public name:string){}
// }
function echo<T extends Person>(value: T): T {
  return value;
}

// extending generic classes
interface Product {
  name: string;
  price: number;
}
//type mapping
type ReadOnlyProduc = {
  //index signature
  //keyof
  readonly [K in keyof Product]: Product[K];
};
let product: ReadOnlyProduc = {
  name: "a",
  price: 1,
};
//product property will be readyonly,avoid accidently change
//typescript utility types doc
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  //   use of keyof operator
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
let store1 = new Store<Product>();
store1.add({ name: "a", price: 1 });
store1.find("name", "a");
store1.find("price", 1);
// store1.filter("nonExistingProperty",1)// property is not keyof Product, error
//pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress(): void {
    console.log("compressed");
  }
}
let store = new CompressibleStore<Product>();

store.add({ name: "product", price: 1 });
store.compress();

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  search(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
// Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    if (category) return [];
    return [];
  }
}
