"use strict";

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const wetherList = document.getElementById("wether-list");

fetch(url)
  .then((response) => response.json())
  .then(({ main, wind, weather }) => {
    wetherList.innerHTML = `
    <h1> ${main.temp}°C</h1>
    <p>Wind: ${wind.speed} km/h ${wind.deg}°</p> 
       <p>Pressure: ${main.pressure} hPa</p>
    <p>Humidity: ${main.humidity} %</p> `;

    weather.forEach(function (user) {
      const block = document.createElement("div");
      block.innerHTML = `
        <img src=" http://openweathermap.org/img/w/${user.icon}.png" />
        <p> ${user.description}</p> `;
      wetherList.append(block);
    });
  });
