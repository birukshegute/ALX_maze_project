import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
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

//initialize firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

// collection reference
const colRef = collection(db, 'tasks')

//get collection data
getDocs(colRef)
  .then((snapshot) => {
    let tasks = []
    snapshot.docs.forEach((doc) => {
        tasks.push({... doc.data(), id: doc.id })
    })
    console.log(tasks)
  })
  .catch(err => {
    console.log(err.message)
  })
//adding a task
const addTask = document.quirySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()


})
//deleting a task

















// const login = document.getElementById("login");
// const signup = document.getElementById("signup");
// const about = document.getElementById("about");
// const Box = document.getElementById("Box");
// const Add = document.getElementById("Add");
// const pri = document.getElementById("pri");
// const low = document.getElementById("low");
// const medium = document.getElementById("medium");
// const high = document.document.getElementById("high");