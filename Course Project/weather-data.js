"use strict";

//constructor function
function Weather(cityName, description) {
  this.cityName = cityName;
  this.description = description;
  this._temperature = "";
  //getter & setter for this field in order to convert the temperature
}

Object.defineProperty(Weather.prototype, "temperature", {
  get: function () {
    return this._temperature;
  },
  set: function (value) {
    this._temperature = (value * 1.8 + 32).toFixed(2); //from metric to farenheit
  },
});
