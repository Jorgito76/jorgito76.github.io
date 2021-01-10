function lastUpdated (){
    //Setting the last modified date
    let lastModified = new Date(document.lastModified);
    //Display the date to user
    document.getElementById("lastUpdated").innerHTML = lastModified;
}