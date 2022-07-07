{
  //DOM interaction summary
  //DIALOGS BUILT-INS:
  alert("This is an alert!"); // Only click OK
  console.log(confirm("Are you sure?"));
  console.log(prompt("How old are you?"));
  //Better ways: JS Modals... Bootstrap modals
}

console.log(window.innerWidth);
console.log(innerWidth);
console.log(outerWidth);
console.log(innerHeight);
console.log(outerHeight);

//local storage remains in the browser
localStorage.setItem("key1", 1000);
console.log(localStorage.getItem("key1"));
console.log(localStorage);

//session storage is deleted when the browser is closed
sessionStorage.setItem("key1", 1000);
console.log(sessionStorage.getItem("key1"));
console.log(sessionStorage);

console.log(window.location);
// console.log(window.open("http://www.google.com")); //pop-up blocked

{
  //the location object...
  console.log(location);
  console.log(location.hostname);
  console.log(location.pathname); //everything afer domain
  //   console.log(location.reload());
  //   console.log(location.replace("http://www.google.com"));
}
{
  //document object
  console.dir(document);
  console.log(document.URL);
  console.log(document.title);
  console.log(document.body);

  console.log(document.body.children); //HTML Collection
  console.log(document.body.children[0].textContent);
  setTimeout(() => {
    document.body.children[0].textContent = "After 3 seconds change";
  }, 3000);
  document.body.children[0].style.backgroundColor = "red";
}
{
  //TRAVERSING THE DOM
  console.log(document.body.children[1].children[0]);
  console.log(document.body.firstChild);
  console.log(document.body.firstElementChild);
  console.log(document.body.lastChild); //script tag
  console.log(document.body.lastElementChild); //my script tag, better use this

  console.log(
    document.body.firstElementChild.firstElementChild.nextElementSibling, //second li
    document.body.firstElementChild.firstElementChild.parentElement //ul
  );

  console.log(document.getElementsByTagName("li"));
  console.log(document.getElementsByClassName("simple"));
  console.log(document.getElementById("firstLink"));
}
{
  //querySelector: //only gets the first element of an array of elements
  console.log(document.querySelector("h1")); //tag
  console.log(document.querySelector(".simple")); //class
  console.log(document.querySelector("#firstLink")); //id  ==> this is better

  document.querySelector(".simple").style.backgroundColor = "blue";
  document.querySelector(
    "ul"
  ).lastElementChild.firstElementChild.style.backgroundColor = "blue";
  //or
  document.querySelectorAll(".simple")[1].firstElementChild.style.color =
    "yellow";
}
{
  //Create a new element
  let p = document.createElement("p");
  p.textContent = "Paragraph";
  p.style.fontSize = "17px";

  let listItem = document.querySelector("li");
  let a = listItem.firstChild;

  listItem.appendChild(p);
  listItem.insertBefore(p, a); //first argument: what to insert, second: in relation to what
}
/*
{
  //Delete an element
  //remove the second link
  let secondLink = document.querySelectorAll("a")[1];
  secondLink.parentElement.removeChild(secondLink);
}
*/
{
  //Using parentNode same as the previous. only newer browsers
  let a = document.querySelectorAll("a")[1];
  a.parentNode.removeChild(a);
  //Nodes are some things in the DOM which are not elements: such as
  //
}
