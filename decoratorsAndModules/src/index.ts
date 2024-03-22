// Decorators, often used in Angular/Vue, just a function called by the JavaScript runtime
// set "experimentalDecorators": true

// function Component(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

//parameterized decorators
//decorator factory
type ComponentOptions = {
  selector: string;
};
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}
function Pipe(constructor: Function) {
  console.log("Pile decorator called");
  constructor.prototype.pipe = true;
}
// @Component
@Component({ selector: "#my-profile" })
@Pipe
//pipe decorator get called first and pass result to component decorator
class ProfileComponent {}

// or use class inherit
// class Component {
//   insertInDom(){};
// }
// class ProfileComponent extends Component {}

// Method decorators
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}
class Person {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}
