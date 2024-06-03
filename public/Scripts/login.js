const lognbtn = document.querySelector(".logn");

function lo() {

  const ema = document.getElementById("emal").value;
  const passw = document.getElementById("psw").value;
  
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(ema);
  }
  const emailtest = validateEmail();
  if (emailtest == false) {
    alert("Please insert a valid email")
  }
  else {
    signInWithEmailAndPassword(auth, ema, passw)
   .then(() => {
    // Signed in 
    window.location.href = "index.html";
   // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    alert(error.message);
  });
}
}

lognbtn.addEventListener("click", lo);