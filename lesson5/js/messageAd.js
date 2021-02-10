// FUNCTION TO DISPLAY ADD

const dayToday = new Date();
const dayNumber = dayToday.getDay();
const element = document.getElementById("message");

if (dayNumber == 5){
    element.classList.add("showme");
}
else {
    element.classList.add('hideme');
}