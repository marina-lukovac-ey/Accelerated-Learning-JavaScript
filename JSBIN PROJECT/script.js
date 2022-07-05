'use strict';
console.log('Hello to the browser.');
const maxim = {name: "Max"};
console.log(maxim);
console.log(typeof maxim);

(function calc(){
    console.log('this is inside');
})();

var calc2 = function(){
    console.log('This is another way to declare a function');
    return calc2; //syntax used for RECURSION: eg: Fibonaci numbers
}

var returnValueOfCalledFunction = calc2();  //in this case return value acctually is a function

console.log(returnValueOfCalledFunction);

//It used to console ==> [object Object]

//**********************CONTROL STATEMENT****************/
{   // IF STATEMENT
    const condition = true;

    if(condition){
        console.log('Executed!');
    }else{
        console.log('Not executed!');
    }
    console.log(NaN == true);
}
{
    const luckyNumber = 7;
    switch (luckyNumber) {
        case 1:
            console.log('Is 1');
            break;
        case 4:
            console.log('Is 4');
            break;
        case 8:
            console.log('Is 8');
            break;
        default:
            console.log('Default...');
            break;
    }
}