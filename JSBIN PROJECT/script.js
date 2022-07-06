// "use strict";
console.log("Hello to the browser.");
const maxim = { name: "Max" };
console.log(maxim);
console.log(typeof maxim);

(function calc() {
  console.log("this is inside");
})();

var calc2 = function () {
  console.log("This is another way to declare a function");
  return calc2; //syntax used for RECURSION: eg: Fibonaci numbers
};

var returnValueOfCalledFunction = calc2(); //in this case return value acctually is a function

console.log(returnValueOfCalledFunction);

//It used to console ==> [object Object]

//**********************CONTROL STATEMENT****************/
{
  // IF STATEMENT
  const condition = true;

  if (condition) {
    console.log("Executed!");
  } else {
    console.log("Not executed!");
  }
  console.log(NaN == true);
}
{
  //SWITCH CASE DEFAULT BREAK
  const luckyNumber = 7;
  switch (luckyNumber) {
    case 1:
      console.log("Is 1");
      break;
    case 4:
      console.log("Is 4");
      break;
    case 8:
      console.log("Is 8");
      break;
    default:
      console.log("Default...");
      break;
  }
}
{
  //FOR LOOP
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(i, j);
      if (i === 1) {
        break;
      }
    }
  }
}
{
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1) {
        continue;
      }
      console.log(i, j);
    }
  }
}
// for loop variations:
{
  for (let i = 2; i > -5; i--) {}
}
let arrayNums = [1, 3, 4, 5, 6, 7, 8];
for (let index = 0; index < arrayNums.length; index++) {
  //arrayNums[arrayNums.length]  // undefined
  const element = arrayNums[index];
  console.log(element);
}
// WHILE LOOP
{
  let number = 5;
  while (number < 7) {
    console.log(number);
    number++;
  }
}
{
  //why did he do this *** CHECK THIS OUT LATER
  let condition = true;
  let number = 2;
  while (condition) {
    if (number === 3) {
      condition = false;
    }
    console.log(number);
    number++;
  }
}
{
  //ANOTHER WAY *** CHECK THIS OUT LATER
  let condition = false;
  let number = 1;
  do {
    console.log("Executed!");
  } while (condition);
  {
    console.log("So while happened", number);
    if (number === 3) {
      condition = true;
      console.log("Condition set to false!");
    }
    number++;
  }
}

{
  let a = "3";
  let b = 3;
  console.log(a + b); //'33'
}
{
  let a = 3;
  let b = "3";
  console.log(a + b); //'33'
}
{
  let a = true;
  let b = " Join";
  console.log(a + b); //'true Join'
}
{
  let a = [1, 2];
  let b = " Join";
  console.log(a + b); //'1,2 Join'
}
{
  //true 1
  let a = true;
  let b = 12;
  console.log(a + b); // 13
}
{
  //true 1
  let a = true;
  let b = true;
  console.log(a + b); // 2
}
{
  //null 0
  let a = null;
  let b = 12;
  console.log(a + b); // 12
}
{
  //undefined isn't a number... and JS cannot transform it to anything, so it doesn't recognize such an operation
  let a = undefined;
  let b = 12;
  console.log(a + b); // NaN
}
{
  //NaN isn't a number... and JS cannot transform it to anything, so it doesn't recognize such an operation
  let a = NaN;
  let b = 12;
  console.log(a + b); // NaN
}
//
{
  let a = 12;
  let b = 2;
  console.log(a * b); // 24
}
{
  let a = 12;
  let b = 2;
  console.log(a * b); //24
  a *= b;
  console.log(a); // 24
}
{
  let a = 1.2;
  let b = 2;
  console.log(a * b); // 2.4
}
{
  let a = 1.2;
  let b = 2.2;
  console.log(a * b); // 2.4
}
{
  //floating point issue... During multiplication
  let a = 1.3;
  let b = 2.2;
  console.log(a * b); // 2.8600000000000003
  //solution:
  console.log((a * b).toFixed(2));
}
{
  //Infinity
  let a = 1.3;
  let b = Infinity;
  console.log(a * b); // 2.8600000000000003
  //solution:
  console.log((a * b).toFixed(2));
}
{
  //Infinity
  let a = null;
  let b = Infinity;
  console.log(a * b); // NaN
}
{
  //Infinity
  let a = "2";
  let b = Infinity;
  console.log(a * b); // NaN
}
{
  //Infinity
  let a = null;
  let b = Infinity;
  console.log(a / b); // 0/Infinity ==> 0
}
{
  //Infinity
  let a = true;
  let b = Infinity;
  console.log(a / b); // 0/Infinity ==> 0
}
{
  //DIVISION
  let a = 12;
  let b = 6;
  console.log(a / b); // 2
  a /= b;
  console.log(a);
}
{
  //DIVISION
  let a = 3.3;
  let b = 2.2;
  console.log(a / b); // 1.4999999999999999;
  a /= b;
  console.log(a);
  //same solution: .toFixed(2)
  console.log(a.toFixed(2));
}
{
  //DIVISION
  let a = 10;
  let b = 0;
  console.log(a / b); // Infinity;
}
{
  //DIVISION
  let a = 10;
  let b = Infinity;
  console.log(a / b); // 0;
}
{
  //MODULUS
  let a = 10;
  let b = 3;
  console.log(a % b); // 1;
  a /= b;
  console.log(a);
  //same solution: .toFixed(2)
  console.log(a.toFixed(2));
}
{
  //COMPARISON
  let a = 10;
  let b = "tHIS";
  let c = "3";
  console.log(a > b); // false
  console.log(a > c); //  true
}
{
  //COMPARISON
  let a = NaN;
  let b = NaN;
  console.log(a == b); // false // NaN is not equal to another number
  console.log(a != b); //  true
}
{
  //COMPARISON
  let a = 0;
  let b = null;
  console.log(a == b); //false.... would expect true concerning that +, - and / * treat null like true,
  //but: no, Acctually, nothing can be compared with null
  // exception to that rule is undefined
  console.log(null == undefined); //  true
  //rule for undefined... the same as null
  console.log(0 == undefined); //false
}
{
  //BOOLEAN operators
  if (1 == 1 && 2 == 3) {
    console.log(true);
  } else {
    console.log(false);
  }
}
{
  //BOOLEAN operators
  if ((1 == 1 && 2 == 3) || 4 == 4) {
    console.log(true);
  } else {
    console.log(false);
  }
}
{
  //BOOLEAN operators: check if value is of value true...( truth-y)
  let isTrue = true;
  console.log(isTrue);
  console.log(!isTrue);
}
{
  //Ternary operator:
  let a = 5;
  let b = 5;

  console.log(a == b ? "Equal..." : "Not equal<>");
}
{
  //Operator presedence
}
{
  //Primitive vs. Reference Types : Exercise
  let aNumber = 5;
  console.log(aNumber); //5
  let anotherNumber = aNumber;
  console.log(anotherNumber); //5
  aNumber = 12;
  console.log(aNumber); //12
  console.log(anotherNumber); //5
}
{
  //Primitive vs. Reference Types : Exercise
  let anArray = [5];
  console.log(anArray); //5
  let anotherArray = anArray;
  console.log(anotherArray); //5
  anArray.push(4); //editing existing object
  console.log(anArray); //[5,4]
  console.log(anotherArray); //[5,4]
}
{
  //Primitive vs. Reference Types : Exercise
  let anArray = [5];
  console.log(anArray); //5
  let anotherArray = anArray;
  console.log(anotherArray); //5
  anArray = ["a", "b"]; //created new object
  console.log(anArray); //['a','b']
  console.log(anotherArray); //[5]
}
// let test = "Global scope";
function localScope() {
  let test1 = "Local scope";
  console.log(test1);
}
localScope();
//if not using strict: if local var is not declared it is automatically assigned to global object

function globalScope() {
  test2 = "Local Scope without var keyword";
}
// globalScope();
// console.log(test2); //when use strict mode is on, referenceerror: test is not defined
//without strict mode, //local scope without var keyword
//Reason: Behaviour exibited is because test inside globalScope is assigned with var keyword and located on global object (window in this case)

{
  //forEach, push, pop, unshift, shift
  let array = [1, 2, 3];
  console.log("starting array: ", array);

  array.forEach((el, index) => console.log(el, " is on index", index));
  let returnValueOfAPushMethod = array.push(4);
  console.log("pushed element 4: ", array);
  console.log("new length with pushed element is: ", returnValueOfAPushMethod);

  let returnValueOfAPopMethod = array.pop();
  console.log("popped: ", array);
  console.log("popped element is: ", returnValueOfAPopMethod);

  let shiftMethodReturnValue = array.shift();
  console.log("shifted: ", array);
  console.log("shifted element: ", shiftMethodReturnValue);

  let unShiftMethodReturnValue = array.unshift("new");
  console.log("unshifted: ", array);
  console.log("new length of unshifted array: ", unShiftMethodReturnValue);
}
{
  //indexOf, splice
  let array = [1, 2, 3, 4];
  console.log("starting array: ", array);

  array.unshift("new");
  console.log(array);
  array[array.indexOf("new")] = "old";
  console.log("element on index new replaced with old", array);

  let newArray = array.splice(2, 2); //splice changes the array
  console.log(newArray);
  console.log(array);
}
{
  //slice
  let array = [1, 2, 3, 4];
  console.log("starting array: ", array);

  array.unshift("new");
  console.log(array);
  array[array.indexOf("new")] = "old";
  console.log("element on index new replaced with old", array);

  let newArray = array.slice(1, 3); //slice doesn't change the beginning array
  //pro tip: doesn't include the toElement
  console.log(newArray);
  console.log(array);

  let greaterThanTwo = array.filter((el) => el > 2);
  console.log("filtered array", greaterThanTwo);
  console.log("old array", array);

  let mappedArray = array.map((el) => el * 2);
  console.log("mapped array", mappedArray);
  console.log("old array", array);

  let reversedArray = array.reverse();
  console.log("reversed array", reversedArray);
  console.log("old array", array);

  let arrayToConcat = ["join", "me"];
  console.log(array.concat(arrayToConcat));
  console.log(array); //[4, 3, 2, 1, 'old']

  //why would someone want to use array.join(arrayToConcatonate)?!
  console.log(array.join(arrayToConcat)); //4join,me3join,me2join,me1join,meold
}
{
  let array = [1, 2, 3, 4];
  console.log(
    "reduce method for array:",
    array,
    " (total, value) => return total + value: ",
    array.reduce((total, value) => total + value)
  );
}
{
  //OBJECTS, FINALLY
  let person = {
    name: "Marina",
    age: 32,
    details: {
      hobbies: ["Sports", "Cooking"],
      location: "Serbia",
    },
    greet: function () {
      //check how to write this differently
      console.log(`Hello ${this.name}, have a nice day!`);
    },
  };
  person.greet();
  console.log(person);
  console.log(person.name);
  console.log(person["name"]); //only useful when there is another variable dynamically derived...

  let field = "name";
  console.log(person[field]);

  person.name = "Anna";
  console.log(person);
  console.log(window);

  //Alternative Create Object

  let anotherPerson = new Object();
  anotherPerson.name = "Anna";
  anotherPerson.age = 25;
  console.log(anotherPerson);

  let person1 = { name: "Max", age: 27 };
  let person2 = { name: "Max", age: 27 };
  console.log("Are these objects the same: ", person1 === person2);

  //Alternative Create Object 2
  let anotherPerson2 = Object.create(null); //this method makes sense in Prototypal sense ! Because Object.Prototype is default....
  anotherPerson2.name = "Anna";

  let anotherPerson3 = Object.create(person);
  console.log(anotherPerson3);
  console.log(anotherPerson3.age);
  console.log(person.prototype); //undefined
  console.log(person.__proto__); //prototype object [object Object]
  console.log(person.toString()); //"[object Object]"

  //Watch this!
  //Add method to Object.prototype and all the objects get acces to that method...
  Object.prototype.greeting = function () {
    console.log("Hello, " + this.name + " !");
  };
  person.greeting();
  //I used greet, and since person already had greet method it overrided the Object.prototype one...
  let max = Object.create(person);
  max.name = "Max";
  let anna = Object.create(person);
  max.greeting();
  anna.greeting();
  //Prototype chaining: if js doesn't find method directly on the object it goes to objects prototype, etc
  //unsafe way to find out if there is prototype of objects //DO NOT USE IN THE PRODUCTION CODE
  console.log(anna.__proto__ === person); //true
  console.log(anna.__proto__.__proto__ === Object.prototype); //true
  //safe way to find out if ther is a prototype of an object
  console.log(Object.getPrototypeOf(anna) === person); //true
}
{
  //CONSTRUCTOR FUNCTIONS // ALTERNATIVE TO CREATE OBJECTS
  function Person() {
    this.name = "Max"; // Setting directly on object
  }
  Person.prototype.greet = function () {
    console.log("Hello!");
  };
  Person.prototype.name = "Anna"; // Setting property on a higher level, doesn't override it...
  let person = new Person();
  console.log(person.name);
  person.greet();

  console.log("Is person instance of Person? ", person instanceof Person);

  console.log(Object.getPrototypeOf(person) === Object.prototype); //false
  console.log(Object.getPrototypeOf(person) === Person); //false
  console.log(Object.getPrototypeOf(person) === Person.prototype); //true
}
{
  //Constr function arguments
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let person = new Person("Mari", 32);
  console.log(person);
}

{
  //************** THIS **************/
  function fn() {
    console.log(this); //use strict : undefined
  }
  let arrowFn = () => console.log(this); //because arrow function doesn't have this... this is a caller
  let person = { name: "Maj", fank: fn, arrow: arrowFn };

  person.fank(); //caller
  person.arrow(); //window
  fn(); //if use strict == > //undefined otherwise window
  arrowFn(); //window
}
{
  console.log("MAX THIS");
  function fn(message) {
    console.log(message);
    console.log(this);
    console.log("");
  }
  let obj = {
    obfn: fn,
  };
  let person = { name: "Max" };
  fn("only fn call"); //use strict undefined otherwise ==> window obj
  obj.obfn("point to object"); //use strict ==> caller of an fn [object Object]{....}
  //bind
  obj.obfn.bind(this, "binded this");
  obj.obfn("After binding window....");
  obj.obfn.bind(person, "binded person")();
  obj.obfn("obj basic call");
  obj.obfn.bind(person, "Hello")();
  obj.obfn.call(person, "Hello from the call");
  obj.obfn.apply(person, ["Hello from the apply..."]);
}
{
  //Create properties with defineProperty()
  //Purpose: create properties with more detailed explanation
  let account = {
    cash: 12000,
    _firstName: "Default",
    withdraw: function (amount) {
      this.cash -= amount;
      console.log("Withdrew " + amount + " new cash reserve is: " + this.cash);
    },
  };

  // Object.defineProperty(account, "deposit", {
  //   value: function (amount) {
  //     this.cash += amount;
  //   },
  // });
  Object.defineProperty(account, "firstName", {
    get: function () {
      return this._firstName;
    },
    set: function (firstName) {
      this._firstName = firstName;
    },
  });
  console.log(account.firstName);
  account.firstName = "id003";
  console.log(account.firstName);
}
{
  //Built-in functions and properties on objects...
  let person = {
    name: "Max",
    age: 27,
  };
  console.log(person);
  // delete person.name; //really delete it
  console.log(person);
  console.log("name" in person); //if there is a property
  for (let field in person) {
    console.log(field + ": " + person[field]); //bracket notation
  }
}
{
  //Errors & Debugging
}
