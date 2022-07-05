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
{   //SWITCH CASE DEFAULT BREAK
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
{   //FOR LOOP
    for (let i = 0; i<2; i++){
        for (let j = 0; j < 3; j++) {
            console.log(i,j);
            if(i===1){
                break;
            }
        }
    }
}
{   
    for (let i = 0; i<3; i++){
        for (let j = 0; j < 3; j++) {
            if(i===1){
                continue;
            }
            console.log(i,j);
        }
    }
}
// for loop variations:
{
    for(let i = 2; i>-5; i--){

    }
}
let arrayNums = [1,3,4,5,6,7,8];
for (let index = 0; index < arrayNums.length; index++) {
    //arrayNums[arrayNums.length]  // undefined
    const element = arrayNums[index];
    console.log(element);
}
// WHILE LOOP
{
    let number = 5;
    while (number<7){
        console.log(number);
        number++;
    }
}
{   //why did he do this *** CHECK THIS OUT LATER
    let condition = true;
    let number = 2;
    while (condition){
        if(number===3){
            condition = false;
        }
        console.log(number);
        number++;
    }
}
{   //ANOTHER WAY *** CHECK THIS OUT LATER
    let condition = false;
    let number = 1;
    do {
        console.log('Executed!');
    }
    while (condition){
        console.log('So while happened',number);
        if(number===3){
            condition = true;
            console.log('Condition set to false!');
        }
        number++;
    }
}

{
    let a = '3';
    let b = 3;
    console.log(a+b); //'33'
}
{
    let a = 3;
    let b = '3';
    console.log(a+b); //'33'
}
{
    let a = true;
    let b = ' Join';
    console.log(a+b); //'true Join'
}
{
    let a = [1,2];
    let b = ' Join';
    console.log(a+b); //'1,2 Join'
}
{   //true 1
    let a = true;
    let b = 12;
    console.log(a+b); // 13
}
{   //true 1
    let a = true;
    let b = true;
    console.log(a+b); // 2
}
{   //null 0
    let a = null;
    let b = 12;
    console.log(a+b); // 12
}
{   //undefined isn't a number... and JS cannot transform it to anything, so it doesn't recognize such an operation
    let a = undefined;
    let b = 12;
    console.log(a+b); // NaN
}
{   //NaN isn't a number... and JS cannot transform it to anything, so it doesn't recognize such an operation
    let a = NaN;
    let b = 12;
    console.log(a+b); // NaN
}

