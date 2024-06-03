 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCTtgVoRDC4K1T-Hj87FDOjuvHaMH5irHk",
  authDomain: "todolist-80334.firebaseapp.com",
  projectId: "todolist-80334",
  storageBucket: "todolist-80334.appspot.com",
  messagingSenderId: "1033852333400",
  appId: "1:1033852333400:web:a8597da22a7376bd2c092d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 const sgnbtn = document.querySelector(".sup");
 
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
    createUserWithEmailAndPassword(auth, ema, passw)
    .then(() => {
    // Signed up 
    alert("User created!"),
    window.location.href = "login.html";
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}
}

sgnbtn.addEventListener("click", su);