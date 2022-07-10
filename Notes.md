## 2. LANGUAGE BASICS:

---

- Basics
- Types & Scope
- Arrays
- Objects and Prototypes (OOP)
- Errors & Debugging
- Functions
- DOM
- Events
- AJAX
- Project & Further Info

> Node runtime environment successfully installed.
> .js files can be run in node, only node keyword isn't highlighed in yellow

1. EXECUTING:

---

- Memo: `<script type="text/javascript">Used for inline JS</script>`
- Memo: Always use attribute "defer" to set script reading for after html loads...
- Memo: `<noscript>Enable JavaScript for this page to load</noscript>`
- Memo: Order of scripts does matter...

  _Max: Uses Plunker as different environment: JSBin doesn't support outer script_

2. VARIABLES:

---

- variables - places to store data\
  Primitives: Strings, Numbers, Booleans,\
  Reference: Objects, Arrays
- Memo: DOT Notation vs. Bracket notation\
  null == undefined //true valuevise it is handled in the same way\
  null === undefined //false type is not the same

> weird part: `typeof NaN //"number"`\
> weird part: `typeof null //"object"`

**Memo: All the numbers in JS are Float numbers**

3. STRICT MODE:

---

> Memo: Usually if var, const, let are not used, JS automatically does var assignment..\
> Memo: `'use strict'`; Take note if those npms used have a problem with 'use/not use strict'\
> CASE SENSITIVE\
>  Good practice: Don't switch types of the variable

4. HOISTING:

---

> Memo: var is HOISTED...\

     HOISTING - Behaviour JS exibits: Runs 2 times:\
     1st... Just fetching Declarations\
     2nd... Use fetched Declarations and put them on top of the code// At runtime it is pulled up\
     Pro Tip: INITIALISATION IS WHAT NEEDS TO BE BEFORE THE EXECUTION, DECLARATION NOT, REASON IS JUST ABOVE(HOISTING)

5. CONTROL STRUCTURES:

---

#### IF STATEMENT:

> Memo: Nullish/falsy values:\
>  false, null, undefined, 0, -0(negative zero), 0n(bigInt zero), '', NaN\
>  also: `document.all` (Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot. That slot only exists in document.all and cannot be set using JavaScript.)

#### SWITCH CASE DEFAULT BREAK

> Leaving out BREAK makes JS execution as is... without breaking

#### FOR LOOP

> Memo: Controlling loops with BREAK(completely end the loop) & CONTINUE(only finish the current itteration)...

#### WHILE LOOP

#### DO WHILE LOOP

6. OPERATORS

   - (+) ADDITION\
     - `+=`
     - `a++`
     - `a--`
     - `++a`
     - `--a`/
     - floating number issues:

   * tries to coerse values into something that makes sense:
     - `null ==> 0`;
     - `undefined ==> NaN`
     - `true ==> 1`;
     - `false ==> 0`;

   - (-) SUBTRACTION

   * tries to coerse strings to numbers, so 3 - '2' //1

   - (`\ or *`) MULTIPLICATION, DIVISION & FLOATING POINT:
     - (`-`) also pushes string, boolean to number when possible
     - solution to floating point problem: `number.toFixed(numberOfDecimals);`

   COMPARATIONS: `=== == != !== > < >= <=`

   === COMPARING BOTH VALUE AND TYPE\
   == COMPARING ONLY VALUE\
   != ONLY VALUE\
   !== BOTH VALUE AND TYPE INEQUALITY\

   Only checking the value...

   `>`\
   `<`\
   `<=`\
   `>=`

   ### BOOLEAN `&& ||` (two pipe symbols)

   ***

   > Memo: Use to chain conditions

   ### TERNARY OPERATOR:

   > CONDITION ? IF TRUE : IF FALSE

   #### OPERATOR PRESEDENCE:

   mdn table of [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)\

   standard mathematical operators

## 3. TYPES & SCOPE

---

Pro tip:\
" Points to the space in memory "

#### PRIMITIVES: variables hold the value

1. String
2. Number
3. bigInt
4. boolean
5. undefined
6. symbol
7. null

#### REFERENCE: variables only point to the place in the memory

#### SCOPE

---

- GLOBAL: window object (browser)

- LOCAL: function\
- Some other:

> Memo: When strict mode is on, variables must be declared with const let var\
>  When off strict mode: variable declared in function scope, or anywhere else is automatically located on the global scope, window object in this matter...\
>  Problem: test withing the function is not defined, until that function is called... This variable is acctually only then created and placed to the global scope

## 4. ARRAYS

---

- Memo: array.length , array indexes
- Array: infinite collection of undefined values...
- forEach();
- push();
- pop ();
- shift();
- unshift();

- splice(fromIndex, howManyElements, newElement1, newElement2, newElement3)
  splice CHANGES THE BEGINNING ARRAY
  return value: newArray of spliced elements...

- slice( [fromIndex, toIndex) ) \*\*\*
  slice DOES NOT CHANGE starting array

### **Both filter and map DO NOT CHANGE starting array**

- `filter(el=>condition returning true or false)`
- `map(el=>map\*2)`

### **But reverse DOES**

- `reverse();`
- `concat(newArray);`

- `reduce((total,value)=>{return total+ value})`\
  Reduce is recurring function: in every itteration does the given task specified in the return

## 5. OBJECTS

---

> Memo: property names can be in camelCase, or string
> firstName or first-name...
> firstName is accessed by .notation, "first-name" with bracket notation\
> Every Object has Prototype, that is object of its own...\
> Object.prototype is object accessible to all the objects created... all its properties and methods are available

#### Object creating methods:

---

1. {key: value} //LITERAL NOTATION ... obj instance of Object
2. new Object() //
3. Object.create(whichPrototypeWeWantToSetItTo); //makes sense in Prototypal inheritance
4. a) Object.create(null); //object with no methods

#### PROTOTYPE CHAIN:

---

- js first checks if there is method directly on object
- later it goes up to Prototype of object
- if it doesn't still find it, it goes to the prototype of prototype of object
- .... through all of the prototypes of objects....
  Object.getPrototypeOf(obj)===blueprintPrototype //true

#### CONSTRUCTOR FUNCTIONS:

> Allowing default fields and methods ==>> ES6 Classes

```
function Person(){
  this.name = 'Mari';
  this.greet = function(){
    console.log('Hello, I am '+this.name);
  }
}
let person = new Person();
```

And if Person.prototype.name = 'Max' //later is not overridden because it is on a higher level

### PROTOTYPES VS. CONSTRUCTOR F-S

---

- constructor: allow default fields and methods...
- prototypes: allow to inherit from objects\
  main difference: prototypes are on a higher level

check if obj is instance of: `(person instanceof Person)` //true

# Memo: **`THIS`**

---

> Global scope: regardles use strict: this is window(global object)\
> function calls: regular functions in strict mode: undefined, when called in global scope...\
> arrow functions: both: this is a caller\
> `.bind(pointerToObject)`... works only during function call...
> obj.fn.bind(person)() //this inside fn is person

THIS METHODS:

- .bind(whatShouldBeBoundTo,arguments)() //bind needs separate call afterwards
- .call(whatShouldBePointedTo, argumentsForAFunction); //acts same as .bind()();
- .apply(whatShouldBeThis, [arrayOfArguments]); //acts same as .call();

> Memo: `Object.defineProperty(object,'property-name',{js object, with value property})`\
> ADD getter, setter, writable, enumerable functions

## 6. ERRORS & DEBUGGING:

---

> USE DEBUGGER ON CHROME DEV TOOLS\
> Use Sources\
> Click to app.js\
> create code breakpoint\
> reload page\
> afterwards track changes step by step through iterations or conditions

- HANDLING ERRORS WITH TRY AND CATCH...

```
try{
  console.log('this code');
}catch(error){
  //do sth with error
}finally{
  //regardless of everything... do this
}
```

## 7. FUNCTIONS:

---

> Encapsuled code, can be run multiple times...\

    Function declarations are also hoisted.\
    Functions are first class citizens, can be sent as an argument to another function.

#### CLOSURES: Functions defined in another functions, aware of their environment...

- Callback is an example
- any other situation where there is a fn inside of another fn
- Fn can store and keep its environment
- Fn is still aware of that environment when it is called...
- Power of it is in Callback functions

#### IIFE Imediately Invoked Function Executions

> Pro Tip: When Calling it, this is the syntax:\
> `( function iifeFunction () { })( );`

## 8. BUILT-IN OBJECTS AND FUNCTIONS:

---

## 9. DOM

---

- DOCUMENT OBJECT MODEL
  - WINDOW OBJECT: BROWSER BAR ==> LOCATION OBJECT
  - DOCUMENT (DOM) ===> THE PAGE
  - localStorage.setItem('key', value);
  - localStorage.getItem('key');

> What is this `: :marker in the link element in the console on 44 line`???

- lastElementChild
- firstElementChild

## 10. EVENTS

---

#### GENERAL EVENT OBJECT AND METHODS IT CONTAINS ON ITSELF...

- `window.onload = function(){ }`
- `btn.onclick = function(){ }`

- `btn.addEventListener('click',functionX)`
- `btn.removeEventListener('click',functionX)` // needs to be specified both the event and the function to be removed...

#### BUBBLING (CHILD ==> PARENT) AND CAPTURING (PARENT ==> CHILD)

- BY DEFAULT: Set is BUBBLING order: true

  > `parent.addEventLisener('click',function,false)` //third argument indicates whether you want to use CAPTURE or not...

- USING CAPTURING: Set CAPTURING as the first:

  > `parent.addEventListener('click',function,true)`

??? is it neccessary to use capturing from the parent ???

- #### CHANGING PROPAGATION ORDER:
  - to outer event... set to true.... false is default

## 11. HTTP REQUESTS (AJAX)

---

```
//GET RQ:
let http = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/posts";
  let method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      console.log("Error!");
    }
  };
  http.send();
```

---

```
//POST RQ
let http = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/posts";
  let method = "POST";
  let data = "title=Post%20Title&body=Body"; //fetch from a form...

  http.open(method, url);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
      console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
      console.log("Error!");
    }
  };
  http.send(data); //returns object {title: 'Post Title', body: 'Body', id: 101}
```

## 12. LIBRARIES, FRAMEWORKS AND MODULES:

---

- jQuery API
- Angular 2 ?

- React

- Vue

> modules:\
>  npm\
>  webpack\
>  systemJS\
>  jspm.io ???
