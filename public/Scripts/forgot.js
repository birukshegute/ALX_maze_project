document.addEventListener("DOMContentLoaded", () => {
  const auth = window.firebaseAuth;
  const sendPasswordResetEmail = window.sendPasswordResetEmail;

  if (!auth || !sendPasswordResetEmail) {
    console.error("Firebase auth or methods are not available");
    return;
  }

  const form = document.getElementById("forgotPasswordForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;

    if (!email) {
      alert("Email cannot be empty.");
      return;
    }
sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent");
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
});
});