function checkAge() {
  const myText = document.getElementById("myText").value;
  const result = document.getElementById("result");

  if (myText >= 18 && myText <= 59) {
    result.textContent = "You are old enough to enter this site.";
  }
    else if (myText <= 17) {
      result.textContent = "You are too young to enter this site.";
    }
   else if (myText >= 60) {
    result.textContent = "You are TOO OLD to enter this site.";
  } else {
    result.textContent = "Invalid answer. Make sure to put numbers only.";
  }
}

x