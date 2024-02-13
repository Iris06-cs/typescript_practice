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