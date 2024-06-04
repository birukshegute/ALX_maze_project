const lognbtn = document.querySelector(".logn");
const provider = new GoogleAuthProvider();
const supglbtn = document.querySelector(".supgl")

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
function supgl() {

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "index.html";
  }).catch((error) => {
    const errorMessage = error.message;
      alert(errorMessage);
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

lognbtn.addEventListener("click", lo);
supglbtn.addEventListener("click", supgl);