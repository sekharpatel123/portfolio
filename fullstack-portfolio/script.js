function showWelcome(){

document.getElementById("message").innerHTML =
"Welcome! Explore each section to see demonstrations of HTML, CSS, Bootstrap and JavaScript.";

}

function showMessage(){

document.getElementById("output").innerHTML =
"This message was dynamically generated using JavaScript.";

}

let counter = 0;

function increase(){

counter++;

document.getElementById("count").innerHTML = counter;

}