// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0AyE0wzp7Ga8BUWN_h8_Aj8qG0sLAREg",
  authDomain: "todolist-aec4c.firebaseapp.com",
  projectId: "todolist-aec4c",
  storageBucket: "todolist-aec4c.appspot.com",
  messagingSenderId: "60401679256",
  appId: "1:60401679256:web:4026ff726358d9e6d889ed",
  measurementId: "G-CRTYC1H96P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase
initializeApp(firebaseConfig);

// //init services
// const db = getFirestore();

// // collection reference
// const colRef = collection(db, 'tasks')

// //get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let tasks = []
//     snapshot.docs.forEach((doc) => {
//         tasks.push({... doc.data(), id: doc.id })
//     })
//     console.log(tasks)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })
// console.log(firebase);



function warning(){
  alert("Please login to add tasks!");
}