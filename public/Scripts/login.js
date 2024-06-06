// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

const auth = window.firebaseAuth;
const GoogleAuthProvider = window.GoogleAuthProvider;
const signInWithPopup = window.signInWithPopup;


const lognbtn = document.querySelector(".logn");
const provider = new GoogleAuthProvider();
const supglbtn = document.querySelector(".supgl");
const rememberMeCheckbox = document.querySelector('input[name="remember"]');

function lo() {

  const ema = document.getElementById("email").value;
  const passw = document.getElementById("psw").value;
  
  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(ema);
  }
  const emailtest = validateEmail();
  if (!emailtest) {
    alert("Please insert a valid email")
  }
  else {
    signInWithEmailAndPassword(auth, ema, passw)
   .then((userCredential) => {
    // Signed in 
    if (rememberMeCheckbox.checked) {
      localStorage.setItem('userEmail', ema);
      localStorage.setItem('userToken', userCredential.user.accessToken);
  } else {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userToken');
  }
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
    if (rememberMeCheckbox.checked) {
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userToken', token);
  } else {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userToken');
  }

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

function autoLogin() {
  const savedEmail = localStorage.getItem('userEmail');
  const savedToken = localStorage.getItem('userToken');

  if (savedEmail && savedToken) {
      signInWithEmailAndPassword(auth, savedEmail, savedToken)
          .then(() => {
              window.location.href = "index.html";
          })
          .catch((error) => {
              console.log('Automatic login failed:', error.message);
          });
  }
}

autoLogin();

lognbtn.addEventListener("click", lo);
supglbtn.addEventListener("click", supgl);

});