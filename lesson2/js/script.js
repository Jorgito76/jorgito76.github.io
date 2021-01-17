// Last Update
var date = document.lastModified; 
document.getElementById("lastUpdated").textContent = "Last Updated: " + date;
// Year
const year = new Date();
document.getElementById("currentYear").textContent = year.getFullYear();