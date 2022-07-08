"use strict";
let searchButton = document.querySelector("button");
let searchCity = document.querySelector("#city");
let loadingText = document.querySelector("#load");

let weatherBox = document.querySelector("#weather");
let weatherCity = document.querySelector("#weatherCity");
let weatherTemperature = document.querySelector("#weatherTemperature");
let weatherDescription = document.querySelector("#weatherDescription");

//Max is fetching it differently:
/*
let weatherCity = weatherBox.firstElementChild;
let weatherDescription = document.querySelector("weatherDescription")
let weatherTemperature = weatherBox.lastElementChild;
*/
