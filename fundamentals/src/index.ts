let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level; //type any

// function render(doc) { //error:parameter implicitly has an any type
//     console.log(doc)
// }
function render(doc: any) {
  //annotate as any
  console.log(doc);
}
// let numbers = [1, 2, "3"]; //valid in JS
// let numbers = [1, 2, 3]; can omit the type annotation
// let numbers = []; //any type elements
let numbers: number[] = [];

// typescript tuples
let user: [number, string] = [1, "Iris"];
console.log(typeof user); // represented in regular array

// typescript enums, represent a list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);
const enum Size { // with const keyword will generate more optimized code
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// best practice to properly annotate typescript function
// turn "noUnusedParameters" on to avoid un-used parameters
// function calculateTac(income: number) {
//   //without specify return type, will not detect error when return undefined
//   if (income < 50_000) return income * 2;
//   //   if condition is false, javascript will return undefined by default
// }
// turn "noImplicitReturns" on to avoid return implicitly undefined
// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2023) return income * 2;
//   return income * 3;
// }
// calculateTax(10_000, 2022, 1) valid in javascript, not in Typescript
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2023) return income * 2;
  return income * 3;
}
// define function with default value
calculateTax(10_000);

// TypeScript Objects
// let employee = { id: 1 };
// employee["name"] = "Iris";//not working in Typescript
let employee: { id: number; name?: string } = { id: 1 };
employee.name = "Iris";
let employee2: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
}; //make id readonly to avoid accidently modify
employee.name = "Iris";

// use type aliases to custom type

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee3: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types |
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    // weight. get number methods
    return weight * 2.2;
  } else {
    // weight. string methods
    return parseInt(weight) * 2.2;
  }
}
// intersection Types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
