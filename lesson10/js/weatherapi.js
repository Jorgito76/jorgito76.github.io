const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f733a7a677f906c085116effb07477c2&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        document.getElementById('town').textContent = jsObject.name;
        document.getElementById('temperature').textContent = jsObject.main.temp;
        document.getElementById('hightemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;

        let temperature = parseFloat(document.getElementById('temperature').innerHTML);
        let speed = parseFloat(document.getElementById('speed').innerHTML);

        let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temperature * Math.pow(speed, 0.16));

        if (temperature <= 50 && speed > 3) {

            document.getElementById('chill').innerHTML = Math.round(windchill);
          } else {
      
            document.getElementById('chill').innerHTML = windchill = "N/A";
          }
    });


const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f733a7a677f906c085116effb07477c2&units=imperial';
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

    const apiURL2 =
  "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b8bd845eed4e4fab1e047d161ebec271";

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("townName").textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      var time = mylist[i].dt_txt;
      if (time.includes("18:00:00")) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("h4");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.innerHTML = weatherInfo.list[i].main.temp + "ºF";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;
        theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theIcon);
        theDay.appendChild(theTemp);
        document.getElementById("forecastDays").appendChild(theDay);
      }
    }
  });

  const requestURL2 = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('event1').textContent = jsObject.towns[6].events[0];
        document.getElementById('event2').textContent = jsObject.towns[6].events[1];
        document.getElementById('event3').textContent = jsObject.towns[6].events[2];
    });