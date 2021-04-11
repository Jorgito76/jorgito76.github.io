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
        families: ["Old Standard TT", "Merriweather"]
    }
});