let fullname = "Roco Sumagpao";
let age = "19";
let isStudent = false;

console.log(`My name is ${fullname}.`);
console.log(`I am ${age} years old.`);
console.log(`Enrolled: ${isStudent}.`);

//alert("Hello!");

document.getElementById("p1").textContent = (`My name is ${fullname}.`);
document.getElementById("p2").textContent = (`I am ${age} years old.`);
document.getElementById("p3").textContent = (`Enrolled: ${isStudent}.`);
