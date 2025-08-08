function LoginAccount () {
  let BolLogin = false;
  let User = document.getElementById("User").value;
  let password = document.getElementById("password").value;

if(User === "Roco" && password === "123") {
    BolLogin = true;
  }

  if(BolLogin) {
    document.getElementById("Result").textContent = "Log in Successful!";
  }
    
  else {
    document.getElementById("Result").textContent = "Username or Password is wrong.";
  }



}