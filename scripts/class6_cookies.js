
var fortunes = [
    "Today you get rich",
    "Your friends are overjoyed with you",
    "We are all lucky you're here"
    ];


function get_fortune(){

    // Get element
    let fortuneElement = document.getElementById("fortuneArea");
    // Get random number
    let myIndexRandom = Math.floor( Math.random() * fortunes.length);
    // Set text to fortune
    fortuneElement.innerText = fortunes[myIndexRandom];

}