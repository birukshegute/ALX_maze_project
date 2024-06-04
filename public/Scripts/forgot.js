sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent");
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });