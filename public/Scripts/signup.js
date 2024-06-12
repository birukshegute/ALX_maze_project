document.addEventListener("DOMContentLoaded", () => {
  const auth = window.auth;
  const createUserWithEmailAndPassword = window.createUserWithEmailAndPassword;
  const signInWithPopup = window.signInWithPopup;
  const fetchSignInMethodsForEmail = window.fetchSignInMethodsForEmail;
  const GoogleAuthProvider = window.GoogleAuthProvider;
  const provider = new  GoogleAuthProvider();

 const sgnbtn = document.querySelector(".sup");
 const supglbtn = document.querySelector(".supgl")
 
 function su() {

  const ema = document.getElementById("emal").value;
  const passw = document.getElementById("psw").value;
  const rpassw = document.getElementById("rpsw").value;
  const term = document.getElementById("terms").checked;
  const privacy = document.getElementById("privacy").checked;
  
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(ema);
  }
  const emailtest = validateEmail();
  if (emailtest == false) {
    alert("Please insert a valid email");
  }
  else if (passw.length < 6){
    alert("Password too short. please enter at least 6 digits.");
  }
  else if (rpassw !== passw){
    alert("passwords don't match. Please try again.");
  }
  else if(term === false){
    alert("READ and AGREE with the Terms of Service.");
  }  
  else if (privacy === false){
    alert("READ and AGREE with the privacy policy.");
  }
  else
  {
    fetchSignInMethodsForEmail(auth, ema)
        .then((methods) => {
          if (methods && methods.length > 0) {
            alert("Email already in use. Please use a different email.");
          } 
          else {
    createUserWithEmailAndPassword(auth, ema, passw)
    .then(() => {
    // Signed up 
    alert("User created!"),
    window.location.href = "index.html";
    // ...
  })
    .catch(error => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}
})
.catch((error) => {
  const errorMessage = error.message;
  alert(errorMessage);
});
}
 }
  

function supgl() {
  const term = document.getElementById("terms").checked;
  const privacy = document.getElementById("privacy").checked;

  if(term === false){
    alert("READ and AGREE with the Terms of Service.");
  }  
  else if (privacy === false){
    alert("READ and AGREE with the privacy policy.");
  }
  else {
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
}
sgnbtn.addEventListener("click", su);
supglbtn.addEventListener("click", supgl);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
      sgnbtn.click();
  }
});
});