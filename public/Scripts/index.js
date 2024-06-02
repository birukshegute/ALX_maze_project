const signedin = document.getElementById("signedin");
const signedout = document.getElementById("signedout");

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
        signedin.hidden = false;
        signedout.hidden = true;
    } 
    else {
        //user is signed out
        signedin.hidden = false;
        signedout.hidden = true;
    }
  });