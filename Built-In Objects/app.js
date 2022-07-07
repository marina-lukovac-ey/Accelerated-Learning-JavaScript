"use strict";
{
  /*
  //Timers and Intervals
  setTimeout(function () {
    console.log("Finished...");
  }, 1000); // on the window object
  setInterval(() => {
    console.log("A second passed");
  }, 1000);
  let newInterval = setInterval(() => {
    console.log("3-second interval...");
  }, 3000);
  setTimeout(() => {
    clearInterval(newInterval);
    console.log("this is when interval is stopped");
  }, 9000);
  */
}
{
  //Parsers
  let a = "FBB123"; //16494883
  console.log(parseInt(a, 16));
}
{
  //Parsers
  let a = 10.5; //16494883
  console.log(a.toString());
  console.log(a.toFixed()); //default round to integer: 0.5 to upper value
  console.log(a.toFixed(2)); //default round to integer: 0.5 to upper value
}
{
  //Strings:
  let string = "Any text            ";
  console.log(string.length);
  console.log(string[0]); // first character
  console.log(string.charAt(0)); // first character
  console.log(string.concat(" add a new string"));
  console.log(string.toUpperCase());
  console.log(string.trim().split(" ")); //form array
  console.log(string.split(" ")); //form array
}
{
  //Math:
  let a = -3;
  console.log(Math.abs(a));
  let b = 1.27;
  console.log(Math.round(b));
  console.log(Math.ceil(b));
  let c = 1.99;
  console.log(Math.floor(c));
  let d = 2;
  console.log(Math.exp(d));
  console.log(Math.max(2, 200, 20000));
  console.log(Math.min(2, 200, 20000));
  console.log(Math.random()); //  [o-1)

  let rnd = Math.floor(Math.random() * 100 + 1);
  console.log("Max rnd: " + rnd);
  let from200To1000OnlyIntegers = Math.floor(
    Math.random() * (1000 - 200 + 1) + 200
  );
  console.log("Random num from to: " + from200To1000OnlyIntegers);

  let e = Math.E;
  console.log(Math.log(e));
  console.log(e);
  let pi = Math.PI;
  console.log(pi);
}
{
  //Date object...
  let today = new Date(2022, 6, 7); //July 7th
  let todayString = new Date("2022-06-07"); //June 7th
  let todayValidFormatSlash = new Date("2022/06/07"); //June 7th
  //SyntaxError Octal deprecated literals ///cannot use 2022, 06,07

  console.log(today.toString());
  console.log(todayString.toString());
  console.log(todayValidFormatSlash.toString());

  //Static methods on the date object

  console.log(Date.parse("2016/05/20")); //number of miliseconds since the 1st Jan 1970
  console.log(today.getMonth());
  console.log(today.getDate());
  console.log(today.getDay());
}
//Sledeci kursevi: Asynchronous JS...
{
  //Reg Exp: Patterns used to match character combinations in strings
  //How JS supports REGEXP
  let string = "ab"; //if ab there is an object [ab]  if ac ==> null
  let pattern = /ab/;
  console.log(string);
  console.log(typeof pattern);
  console.log(Object.getPrototypeOf(pattern));
  console.log(pattern.exec(string));
  console.log(string.match(pattern)); //same as .exec only reversed
  console.log(pattern.test(string));
  ///Queries...  search SO regex email validation... patterns...
}
