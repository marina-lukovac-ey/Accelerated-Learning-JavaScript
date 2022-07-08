"use strict";
import { APIKEY } from "./apikey.js";
searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  loadingText.style.display = "block";
  weatherBox.style.display = "none";
  let cityName = searchCity.value.trim();
  if (cityName.length == 0) {
    return alert("Please enter a City Name");
  }
  let http = new XMLHttpRequest();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKEY}`;
  let method = "GET";

  http.open(method, url); //http.open gives ==> http.readystate == XMLHttpRequest.OPENED //1
  //http.open gives ==> http.readystate == XMLHttpRequest.HEADERS_RECEIVED //2

  // http.onreadystatechange ==> recursion depending on .readyState change does the recursion...
  http.onreadystatechange = function () {
    console.log(http.status);
    //// http.readystate == XMLHttpRequest.LOADING //3
    console.log(http.readyState);
    console.dir(XMLHttpRequest);

    if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
      // XMLHttpRequest.DONE === 4
      let data = JSON.parse(http.responseText);
      let weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      );
      weatherData.temperature = data.main.temp;
      console.log(data);
      updateWeather(weatherData);
    } else if (http.readyState == XMLHttpRequest.DONE) {
      alert("Something went wrong...");
    }
  };
  http.send(); // http.unsent ==> http.readyState == XMLHttpRequest.UNSENT //0
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  weatherBox.style.display = "block";
}
