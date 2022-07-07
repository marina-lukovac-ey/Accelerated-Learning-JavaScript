"use strict";
import { APIKEY } from "./apikey.js";
searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  let cityName = searchCity.value;
  if (!cityName.trim().length) {
    return alert("Please enter a City Name");
  }
  let http = new XMLHttpRequest();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;
  let method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      let data = JSON.parse(http.responseText);
      console.log(data);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert("Something went wrong...");
    }
  };
}
