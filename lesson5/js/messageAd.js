// FUNCTION TO DISPLAY ADD

const dayToday = new Date();
const dayNumber = dayToday.getDay();
const element = document.getElementById("message");

if (dayNumber == 6){
    element.classList.add("showme");
}
else {
    element.classList.add('hideme');
}