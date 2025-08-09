
const myButton = document.getElementById("myButton");
const mylabel = document.getElementById("mylabel");

myButton.onclick = function() { 
let randomNum;
let max = 6;
let min = 1;

randomNum = Math.trunc(Math.random() * max) + min;
mylabel.textContent = randomNum;

}