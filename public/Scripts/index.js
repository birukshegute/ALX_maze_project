document.addEventListener("DOMContentLoaded", () => { 
const auth = window.firebaseAuth;
const onAuthStateChanged = window.onAuthStateChanged;
const signOut = window.signOut;

const signedInElement = document.getElementById("signedin");
const signedOutElement = document.getElementById("signedout");
const signOutButton = document.querySelector(".sgnout");

if (!auth || !onAuthStateChanged || !signOut) {
  console.error("Firebase auth or methods are not available");
  return;
}

signedInElement.hidden = true;
signedOutElement.hidden = true;

console.log("Initial state: both sections hidden");

// Monitor authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        signedInElement.hidden = false;
        signedOutElement.hidden = true;
    } else {
        // User is signed out
        signedInElement.hidden = true;
        signedOutElement.hidden = false;
    }
});

function signOutUser() {  // This line was added
  signOut(auth)  // This line was added
      .then(() => {
          console.log('User signed out successfully.');
      })
      .catch((error) => {
          console.error('Error signing out:', error);
      });
}

// Attach sign out function to button click event
signOutButton.addEventListener("click", signOutUser);  // This line was added
});