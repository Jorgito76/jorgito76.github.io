
function switchgrid() {

    document.getElementById("swap").classList.add("directoryGrid");
    document.getElementById("swap").classList.remove("directoryList");
    document.getElementById("grid").classList.add("currentView");
    document.getElementById("list").classList.remove("currentView");
}

function switchlist() {

    document.getElementById("swap").classList.remove("directoryGrid");
    document.getElementById("swap").classList.add("directoryList");
    document.getElementById("grid").classList.remove("currentView");
    document.getElementById("list").classList.add("currentView");
}





const requestURL = 'directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        const businesses = jsonObject["businesses"];

        for (let i = 0; i < businesses.length; i++) {

            let card = document.createElement("section");

            let image = document.createElement("img");
            
            image.setAttribute("src", businesses[i].logo);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', businesses[i].logo + " " + "logo");
            
            
            let bInfo = document.createElement("div");
            bInfo.classList.add("businessInfo");

            let h2 = document.createElement("h2");
            h2.textContent = businesses[i].businessName;
            
            let phone = document.createElement("p");
            phone.textContent = "Phone: " + businesses[i].phoneNumber;
            
            
            let web = document.createElement("p");
            web.innerHTML = "Company Provided " + "<a href='" + businesses[i].website + "'>Website</a>";
            
            
            card.appendChild(image);
            bInfo.appendChild(h2);
            bInfo.appendChild(phone);
            bInfo.appendChild(web);
            card.appendChild(bInfo);
            
        
            document.querySelector('div.directoryList').appendChild(card);
        }
    
    });
