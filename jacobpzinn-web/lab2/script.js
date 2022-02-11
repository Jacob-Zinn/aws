// https://github.com/BYUCS260/weather-app-Jacob-Zinn

document
  .getElementById("weatherSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "") return;
    console.log(value);

    const APIKEY = `102880e984f31daa888b277ff419298a`;

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      `,US&units=imperial` +
      `&APPID=${APIKEY}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);

        const title = document.getElementById(`title`);
        title.innerText = `Lã Weather in ${json.name}`;

        let results = `<div class="weatherWrapper flex">`;
        for (let i = 0; i < json.weather.length; i++) {
          results += `<h4 class="tempTitle">` + json.main.temp + " &deg;F</h4>";

          results +=
            '<img src="https://openweathermap.org/img/w/' +
            json.weather[i].icon +
            '.png"/>';

          results += "<p>";
          for (let i = 0; i < json.weather.length; i++) {
            results += json.weather[i].description;
            results += `<br>Wind speed ${json.wind.speed}<br><br>`;
            if (i !== json.weather.length - 1) results += ", ";
          }
          results += "</p>";
        }
        results += `</div>`;

        document.getElementById("weatherResults").innerHTML = results;
      });

    const url2 =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      value +
      ", US&units=imperial" +
      `&APPID=${APIKEY}`;
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);

        let fullForecast = `<div class="full-forecast flex flex-wrap">`;
        for (let i = 0; i < json.list.length; i++) {
          let forecast = `<div class="weatherWrapper flex">`;

          forecast +=
            `<h4 class="tempTitle">` + json.list[i].main.temp + " &deg;F</h4>";
          forecast +=
            '<img src="https://openweathermap.org/img/w/' +
            json.list[i].weather[0].icon +
            '.png"/>';
          forecast += `<div>`;
          forecast +=
            `<p class="date">` +
            moment(json.list[i].dt_txt).format("MMM Do, h:mm a") +
            "</p>";
          forecast += `<p>Feels like: ${json.list[i].main.feels_like}</p>`;
          forecast += `<p>Humidity: ${json.list[i].main.humidity}</p><br>`;
          forecast += `</div>`;
          forecast += `</div>`;

          fullForecast += forecast;
        }

        fullForecast += `</div>`;
        document.getElementById("forecastResults").innerHTML = fullForecast;
      });
  });
