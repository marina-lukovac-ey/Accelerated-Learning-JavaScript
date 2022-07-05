* INTRO

-   Basics 
-   Types & Scope
-   Arrays
-   Objects and Prototypes (OOP)
-   Errors & Debugging
-   Functions
-   DOM
-   Events
-   AJAX
-   Project & Further Info

//Node runtime environment successfully installed.
.js files can be run in node, only node keyword isn't highlighed in yellow

1. EXECUTING:

    * Memo: <script type="text/javascript"></script>
    * Memo: Always use attribute "defer" to set script reading for after html loads...
    * Memo: <noscript>Enable JavaScript for this page to load</noscript>
    * Memo: Order of scripts does matter...
 
`` Max: Uses Plunker as different environment: JSBin doesn't support outer script 

2. VARIABLES:

    * var - places to store data
    Primitives: Strings, Numbers, Booleans, 
    Reference: Objects, Arrays
    * Memo: DOT Notation vs. Bracket notation
    null == undefined //true  valuevise it is handled in the same way
    null === undefined //false  type is not the same
    ~~~~~weird part: typeof NaN  //"number" 
    ~~~~~weirf part: typeof null //"object"
    {name: "Max"}
    * Memo: All the numbers in JS are Float numbers

3. STRICT MODE:

    * Memo: Usually if var, const, let are not used, JS automatically does var assignment..
    * Memo: 'use strict'; Take note if those npms used have a problem with 'use/not use strict'
    * CASE SENSITIVE
    * Good practice: Don't switch types of the variable

4. HOISTING: 

    * Memo: var is HOISTED...
    HOISTING - Behaviour JS exibits: Runs 2 times:
        1st... Just fetching Declarations
        2nd... Use fetched Declarations and put them on top of the code// At runtime it is pulled up
    * Pro Tip: INITIALISATION IS WHAT NEEDS TO BE BEFORE THE EXECUTION, DECLARATION NOT, REASON IS JUST ABOVE(HOISTING)

5. FUNCTIONS:

    * Encapsuled code, can be run multiple times...
    * Function declarations are also hoisted.

    * Arguments and returning data:

6. CONTROL STRUCTURES:

    *** IF STATEMENT:
    * Memo: Nullish/falsy values: false, null, undefined, 0, -0(negative zero), 0n(bigInt zero), '', NaN

