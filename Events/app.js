"use strict";
window.onload = function () {
  console.log("Window loaded...");
}; //asigning anonymus fn to the onloading event

let btn = document.querySelector("button");

/* //adding click event on button: this method is not convenient when in need for multiple event handlers... therefore addEventListener
btn.onclick = function () {
  console.log("button is clicked");
};
*/
btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);
setTimeout(function () {
  btn.removeEventListener("click", listener1);
}, 3000);
document.onclick = function () {
  console.log("document is clicked"); // is triggered when btn is clicked too... ??? Event bubbling
};
/* Another way
btn.addEventListener("click", function () {
});
*/
//SEARCH

function listener1() {
  console.log("Listener 1");
}
function listener2() {
  console.log("Listener 2");
}

//add click listener to yellow div
let yellow = document.querySelector("#inner");
let green = document.querySelector("#outer");
yellow.addEventListener("click", innerLisener);
green.addEventListener("click", outerLisener);

function innerLisener(event) {
  // console.log(event.bubbles);
  // event.stopPropagation();
  //there is also stopImmediatePropagation...
  //it is used to stop all other functions from executing on the current event...
  //SO: for stopPropagation() ==> if stopped in the capture phase, bubble phase handlers will never be reached, also skipping them on the same element
  console.log(event.bubbles);
  console.log(event.clientX, event.clientY);
  console.log((event.target.style.backgroundColor = "red"));
  console.log("Clicked yellow");
  console.log(event);
}
function outerLisener(event) {
  console.log(event); //pointer event
  console.log("Clicked green");
}
