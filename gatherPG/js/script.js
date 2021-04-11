function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("disabled");
    document.getElementById("primaryOpen").classList.toggle("disabled");
    document.getElementById("primaryClose").classList.toggle("disabled");
}

/*Date info*/
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear()
let fulldate = dayName + ", " + monthName + " " + d.getDate() + " " + year;

document.getElementById("getYear").textContent = year;


/* lastUpdated */
let lastUpdated = document.lastModified;

document.getElementById("modified").textContent = "Last Updated: " + lastUpdated;

/* fontloader*/ 
WebFont.load({
    google: {
        families: ["Anton", "Open Sans"]
    }
});

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  const today = new Date();
  const todayDayNumber = today.getDay();
  
  
  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";
  
  const apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=34.802868&lon=-86.971672&units=imperial&appid=300a54035f682f83ebf3aa7d44d398ba";
  
  fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      
  
  
      document.getElementById('currently').textContent = weatherInfo.current.weather[0].description;
      document.getElementById('temp').textContent = Math.round(weatherInfo.current.temp);
      document.getElementById('humidity').textContent = weatherInfo.current.humidity;
  
  
      if (weatherInfo.alert == undefined){
        document.getElementById("close").classList.add("disabled");
      } else {
        document.getElementById('weatheralert').textContent = weatherInfo.alerts[0].description;
        document.getElementById("alerttitle").textContent = weatherInfo.alerts[0].event;
      }
      
      var i;
         
      for (i = 0; i < 3; i++) {
           let forecastDayNumber = addDays(today, i).getDay()
        
  
    
  
          
              let theDay = document.createElement("div");
              theDay.classList.add("w_box");
    
  
              let dayName = document.createElement("h4");
              let theDayName = document.createElement("span");
              theDayName.textContent = weekDay[forecastDayNumber];
              dayName.appendChild(theDayName);
              
  
              let iconcode = weatherInfo.daily[i].weather[0].icon;
              let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
              let weatherIcon = document.createElement("img");
              weatherIcon.src = iconPath;
              weatherIcon.setAttribute("alt", weatherInfo.daily[0].weather[0].description)
              weatherIcon.classList.add("w-icon");
              
              let theTemp = document.createElement("p");
              //theTemp.textContent = "Temp: " + Math.round(weatherInfo.daily[i].temp.day) + "\xB0";
              theTemp.innerHTML = "Low: " + Math.round(weatherInfo.daily[i].temp.min) + "\xB0" + "<br>" + "High: " + Math.round(weatherInfo.daily[i].temp.max) + "\xB0" ;
  
              theDay.appendChild(dayName);
              theDay.appendChild(weatherIcon);
              theDay.appendChild(theTemp);
             
    
              document.getElementById("weatherforecast").appendChild(theDay);
            
              
          } 
     
   }); 
   function removeAlert() {
      
    document.getElementById("close").classList.add("disabled");
  }