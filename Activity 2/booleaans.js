function LoginAccount () {
  let BolLogin = false;
  let User = document.getElementById("User").value;
  let password = document.getElementById("password").value;


if(User === "Roco" && password === "123") {
    BolLogin = true;
  }

  if(BolLogin) {
    document.getElementById("Rsult").textContent = "Log in Successful!";
  }
    
  else {
    document.getElementById("Rsult").textContent = "Username or Password is wrong.";
  }



}


