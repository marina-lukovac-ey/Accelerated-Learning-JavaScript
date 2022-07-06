- INTRO

* Basics
* Types & Scope
* Arrays
* Objects and Prototypes (OOP)
* Errors & Debugging
* Functions
* DOM
* Events
* AJAX
* Project & Further Info

//Node runtime environment successfully installed.
.js files can be run in node, only node keyword isn't highlighed in yellow

1. EXECUTING:

   - Memo: <script type="text/javascript"></script>
   - Memo: Always use attribute "defer" to set script reading for after html loads...
   - Memo: <noscript>Enable JavaScript for this page to load</noscript>
   - Memo: Order of scripts does matter...

`` Max: Uses Plunker as different environment: JSBin doesn't support outer script

2. VARIABLES:

   - var - places to store data
     Primitives: Strings, Numbers, Booleans,
     Reference: Objects, Arrays
   - Memo: DOT Notation vs. Bracket notation
     null == undefined //true valuevise it is handled in the same way
     null === undefined //false type is not the same

   ```weird part: typeof NaN  //"number"
   ~~~~~weirf part: typeof null //"object"
   {name: "Max"}
   * Memo: All the numbers in JS are Float numbers

   ```

3. STRICT MODE:

   - Memo: Usually if var, const, let are not used, JS automatically does var assignment..
   - Memo: 'use strict'; Take note if those npms used have a problem with 'use/not use strict'
   - CASE SENSITIVE
   - Good practice: Don't switch types of the variable

4. HOISTING:

   - Memo: var is HOISTED...
     HOISTING - Behaviour JS exibits: Runs 2 times:
     1st... Just fetching Declarations
     2nd... Use fetched Declarations and put them on top of the code// At runtime it is pulled up
   - Pro Tip: INITIALISATION IS WHAT NEEDS TO BE BEFORE THE EXECUTION, DECLARATION NOT, REASON IS JUST ABOVE(HOISTING)

5. FUNCTIONS:

   - Encapsuled code, can be run multiple times...
   - Function declarations are also hoisted.

   - Arguments and returning data:

6. CONTROL STRUCTURES:

   \*\*\* IF STATEMENT:

   - Memo: Nullish/falsy values: false, null, undefined, 0, -0(negative zero), 0n(bigInt zero), '', NaN,
     also: document.all (Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot. That slot only exists in document.all and cannot be set using JavaScript.)

   \*\*\* SWITCH CASE DEFAULT BREAK

   - Leaving out BREAK makes JS execution as is... without breaking

7. FOR LOOP

   - Memo: Controlling loops with BREAK(completely end the loop) & CONTINUE(only finish the current itteration)...

8. WHILE LOOP

9. DO WHILE LOOP

10. OPERATORS

    - (+) ADDITION
      +=
      a++
      a--
      ++a
      --a
      //floating number issues:

    * tries to coerse values into something that makes sense:
      - null ==> 0;
      - undefined ==> NaN
      - true ==> 1;
      - false ==> 0;

    - (-) SUBTRACTION

    * tries to coerse strings to numbers, so 3 - '2' //1

    - (\*) MULTIPLICATION & FLOATING POINT:
      - - also pushes string, boolean to number when possible
      - solution to floating point problem: number.toFixed(numberOfDecimals);

    COMPARATIONS: === == != !== > < >= <=

    === COMPARING BOTH VALUE AND TYPE
    == COMPARING ONLY VALUE
    != ONLY VALUE
    !== BOTH VALUE AND TYPE INEQUALITY
    Only checking the value...

    > # <
    >
    > <=

    BOOLEAN && || (two pipe symbols)

    - Memo: Use to chain conditions

    TERNARY OPERATOR:

    - CONDITION ? IF TRUE : IF FALSE

    \*\* OPERATOR PRESEDENCE:

    mdn table:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    - standard mathematical operators

//**\*\*\*\***\*\*\*\***\*\*\*\*** TYPES & SCOPE \***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***/

Pro tip:
" Points to the space in memory "

- PRIMITIVES: variables hold the value

1. String
2. Number
3.
4.
5.
6.
7.

- REFERENCE: variables only point to the place in the memory

- SCOPE

  GLOBAL: window object (browser)

  LOCAL: function
  ...

* Memo: When strict mode is on, variables must be declared with const let var
  When off strict mode: variable declared in function scope, or anywhere else is automatically located on the global scope, window object in this matter...
* Problem: test withing the function is not defined, until that function is called... This variable is acctually only then created and placed to the global scope

//**\*\*\*\***\*\*\*\***\*\*\*\*** ARRAYS \***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***/

1. INTRO

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

//Both filter and map DO NOT CHANGE starting array

- filter(el=>condition returning true or false)
- map(el=>map\*2)

//But reverse DOES

- reverse();
- concat(newArray);

- reduce((total,value)=>{return total+ value})
  Reduce is recurring function: in every itteration does the given task specified in the return

//**\*\*\*\***\*\*\*\***\*\*\*\*** OBJECTS \***\*\*\*\*\*\*\***\*\***\*\*\*\*\*\*\***/
