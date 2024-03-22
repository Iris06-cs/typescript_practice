// Decorators, often used in Angular/Vue, just a function called by the JavaScript runtime
// set "experimentalDecorators": true

function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}
@Component
class ProfileComponent {}

// or use class inherit
// class Component {
//   insertInDom(){};
// }
// class ProfileComponent extends Component {}
