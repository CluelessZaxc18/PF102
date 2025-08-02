function checkAge () {
const myText = document.getElementById("myAge").value;
const myAge = parseInt(myText);
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

if (myAge >=18 && age <=79) {
    result1.textContent ('You are old enough to enter this site.');
}

else if (myAge >=80) {
    result2.textContent ('You are TOO OLD to enter this site.');
}

else {
    result3.textContent ('You must be 18 to enter this site.');
}


}