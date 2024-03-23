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
// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says" + message);
//   }
// }

// accessor decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    // if(original !==null && original !== undefined) original.call(this)
    const result = original?.call(this);
    // if(typeof result ==="string") return result.toUpperCase()
    // return result
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person = new Person("iris", "0");
console.log(person.fullName);

//property decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long.`
          );
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

// let user1 = new User("123");//err
let user2 = new User("1234");
// console.log(user1.password);//err
console.log(user2.password);

const PropDecorator: PropertyDecorator = (...args: any[]) => {
  console.log(args);
};
class Hd {
  @PropDecorator
  public name: string | undefined;
}
//parameter decorators
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};
const watchedParameters: WatchedParameter[] = [];
const Watch = (target: any, methodName: string, parameterIndex: number) => {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
};
class Car {
  move(@Watch speed: number) {}
}
console.log(watchedParameters);
