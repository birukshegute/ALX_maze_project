sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });