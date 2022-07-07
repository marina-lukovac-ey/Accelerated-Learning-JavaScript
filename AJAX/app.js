"use strict";
{
  //Max uses JSON Placeholder...
  //GET
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
}
{
  //Max uses JSON Placeholder...
  //POST
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
}
