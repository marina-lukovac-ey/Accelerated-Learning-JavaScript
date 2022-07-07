// "use strict";
{
  function generator(input) {
    let number = input;
    return function () {
      //anonymus function ==> CLOSURE
      return number * 2;
    };
  }

  let calc = generator(900);
  console.log(calc());
}

{
  console.log("***********IIFE***********");
  (function calc() {
    console.log("Calc");
  })();
}
{
  //this is why iife - s are used: not poluting the global scope with local variables
  (function calc() {
    let number = 10;
    console.log(number);
  })();
  // console.log(number); //number is not defined because it is registered in local scope
}
{
  //passing a number to iife
  (function calc(input) {
    let number = input;
    console.log(number);
  })(10);
}
{
  //passing an object...
  let obj = {};
  (function calc(input) {
    input.name = "Max";
  })(obj);
  console.log(obj);
}
{
  function message(message) {
    console.log(message);
    console.log(arguments.length); //array...
  }
  message("Hi", 10);
  let msg = message;
  console.log(msg.name); //usefull: function created during runtime
  console.log(msg.length); //how many arguments does the function require
}
{
  let msg = function (message) {
    console.log(this.name);
  };
  console.log(msg.name); //in use strict also doesn't work like 'Maxes' does print name out
}

{
  function message(message) {
    console.log(this.name); //in use strict this is undefined as usual // otherwise ""
  }
  message();
}
