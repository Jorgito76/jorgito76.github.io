function toggleMenu() {
    document.getElementById("optionsNav").classList.toggle("hide");
}


// LONG DATE FUNCTION 
let days = ["Sunday", 
            "Monday", 
            "Tuesday", 
            "Wednesday", 
            "Thursday", 
            "Friday", 
            "Saturday"
            ];
let months = ["January", "February", 
            "March", "April", 
            "May", "June", 
            "July", "August", 
            "September", "October", 
            "November", "December"
            ];
let save_date = new Date();
let today = days[save_date.getDay()] + ", " + save_date.getDate() + " " + months[save_date.getMonth()] + " " + save_date.getFullYear()
document.getElementById("long-date").textContent = today;

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
}