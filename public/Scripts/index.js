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
        signedInElement.hidden = false;
        signedOutElement.hidden = true;
    } else {
        signedInElement.hidden = true;
        signedOutElement.hidden = false;
    }
});

function signOutUser() {
  event.stopPropagation();
  signOut(auth)
      .then(() => {
          console.log('User signed out successfully.');
          window.location.href = "login.html";
      })
      .catch((error) => {
          console.error('Error signing out:', error);
      });
}

signOutButton.addEventListener("click", signOutUser);
});