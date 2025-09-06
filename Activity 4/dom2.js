const myButton = document.getElementById("myButton");
const mylabel = document.getElementById("mylabel");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");

myButton.onclick = function() { 
let randomNum;
let max = 6;
let min = 1;

randomNum = Math.trunc(Math.random() * max) + min;
mylabel.textContent = randomNum;

randomNum = Math.trunc(Math.random() * max) + min;
mylabel2.textContent = randomNum;

randomNum = Math.trunc(Math.random() * max) + min;
mylabel3.textContent = randomNum;
}