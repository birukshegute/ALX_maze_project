/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Scripts/index.js":
/*!**************************!*\
  !*** ./Scripts/index.js ***!
  \**************************/
/***/ (() => {

eval("// import { initializeApp } from \"firebase/app\";\r\n// import {\r\n//     getFirestore, collection, getDocs\r\n// } from 'firebase/firestore'\r\n// // For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\n// const firebaseConfig = {\r\n//     apiKey: \"AIzaSyD0AyE0wzp7Ga8BUWN_h8_Aj8qG0sLAREg\",\r\n//     authDomain: \"todolist-aec4c.firebaseapp.com\",\r\n//     projectId: \"todolist-aec4c\",\r\n//     storageBucket: \"todolist-aec4c.appspot.com\",\r\n//     messagingSenderId: \"60401679256\",\r\n//     appId: \"1:60401679256:web:4026ff726358d9e6d889ed\",\r\n//     measurementId: \"G-CRTYC1H96P\"\r\n//   };\r\n\r\n// //initialize firebase\r\n// initializeApp(firebaseConfig);\r\n\r\n// //init services\r\n// const db = getFirestore()\r\n\r\n// // collection reference\r\n// const colRef = collection(db, 'tasks')\r\n\r\n// //get collection data\r\n// getDocs(colRef)\r\n//   .then((snapshot) => {\r\n//     let tasks = []\r\n//     snapshot.docs.forEach((doc) => {\r\n//         tasks.push({... doc.data(), id: doc.id })\r\n//     })\r\n//     console.log(tasks)\r\n//   })\r\n//   .catch(err => {\r\n//     console.log(err.message)\r\n//   })\r\n// //adding a task\r\n// const addTask = document.quirySelector('.add')\r\n// addBookForm.addEventListener('submit', (e) => {\r\n//     e.preventDefault()\r\n\r\n\r\n// })\r\n// //deleting a task\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const Add = document.getElementById(\"Add\");\r\n// const login = document.getElementById(\"login\");\r\n// const signup = document.getElementById(\"signup\");\r\n// const about = document.getElementById(\"about\");\r\nconst Box = document.getElementById(\"Box\");\r\nlet t1 = document.getElementById(\"t1\");\r\n\r\nfunction addTask(){\r\n    if (Box.value === ''){\r\n        alert(\"please type-in a task value\");\r\n    }\r\n    else{\r\n        t1.value = Box.value;\r\n        t1.innerHTML = Box.value;\r\n        console.log(t1);\r\n    }\r\n}\r\n// const pri = document.getElementById(\"pri\");\r\n// const low = document.getElementById(\"low\");\r\n// const medium = document.getElementById(\"medium\");\r\n// const high = document.document.getElementById(\"high\");\n\n//# sourceURL=webpack://to-do_list/./Scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Scripts/index.js"]();
/******/ 	
/******/ })()
;