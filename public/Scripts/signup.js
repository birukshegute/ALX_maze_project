 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB3cCXV1rGwh1T6iqN0QaQer_8wE921FTQ",
   authDomain: "todolist-80334.firebaseapp.com",
   projectId: "todolist-80334",
   storageBucket: "todolist-80334.appspot.com",
   messagingSenderId: "1033852333400",
   appId: "1:1033852333400:web:a8597da22a7376bd2c092d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}