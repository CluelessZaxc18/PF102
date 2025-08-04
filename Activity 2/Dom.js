function checkAge() {
  const myText = document.getElementById("myText").value;
  const result = document.getElementById("result");

  if (myText >= 18 && myText <= 79) {
    result.textContent = "You are old enough to enter this site.";
  } else if (myText >= 80) {
    result.textContent = "You are TOO OLD to enter this site.";
  } else {
    result.textContent = "Too young or Invalid answer.";
  }
}

function EvenOddNumber() {
    const theNumber = document.getElementById("theNumber").value;
    const result1 = document.getElementById("result1");

    if (theNumber % 2 === 0) {
        result1.textContent = "The number is Even";
    }
    else {
        result1.textContent = "Invalid answer or the number is Odd";
    }





}