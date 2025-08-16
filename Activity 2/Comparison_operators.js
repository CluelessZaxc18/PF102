 function compareNumbers() {

let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
            

let result;
            
if (num1 > num2) {
    result = num1 + " is greater than " + num2;
} else if (num1 < num2) {
 result = num1 + " is less than " + num2;
} else {
 result = num1 + " is equal to " + num2;
}


document.getElementById("result3").innerText = result;
}