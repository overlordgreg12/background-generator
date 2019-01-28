var _ = require('lodash'); 
 

var array = [1,2,3,5]; 
console.log('answer')

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var rbutton = document.querySelector("button");


setGradient();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

rbutton.addEventListener("click", function () {
    console.log(getRandomColor()); 
    color1.value = getRandomColor(); 
    color2.value = getRandomColor(); 
    setGradient(); 
})

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";"; 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);