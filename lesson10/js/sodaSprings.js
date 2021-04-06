const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=f733a7a677f906c085116effb07477c2&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        document.getElementById('name').textContent = jsObject.name;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('temp-max').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;

        let temperature = parseFloat(document.getElementById('current-temp').innerHTML);
        let speed = parseFloat(document.getElementById('speed').innerHTML);

        let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temperature * Math.pow(speed, 0.16));

        if (temperature <= 50 && speed > 3) {

            document.getElementById('chill').innerHTML = Math.round(windchill);
          } else {
      
            document.getElementById('chill').innerHTML = windchill = "N/A";
          }
    });


const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=f733a7a677f906c085116effb07477c2&units=imperial';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        console.log(forecastObject)
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast)
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
      for (let day = 0; day < forecast.length; day++) {
          const d = new Date(forecast[day].dt_txt);
          const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
          const desc = forecast[day].weather[0].description;
          document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
          document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      }

    });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('event1').textContent = jsObject.towns[0].events[0];
        document.getElementById('event2').textContent = jsObject.towns[0].events[1];
        document.getElementById('event3').textContent = jsObject.towns[0].events[2];
    });