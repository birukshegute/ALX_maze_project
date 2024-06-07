document.addEventListener("DOMContentLoaded", () => {

    const auth = window.firebaseAuth;
    const confirmPasswordReset = window.confirmPasswordReset;
    
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const params = new URLSearchParams(window.location.search);
      const oobCode = params.get('oobCode');
      const newPassword = document.querySelector("input[name='psw']").value;
      const reenteredPassword = document.querySelector("input[name='rpsw']").value;

      if (newPassword !== reenteredPassword) {
        alert("Passwords do not match.");
        return;
      }

      if (oobCode && newPassword) {
        confirmPasswordReset(auth, oobCode, newPassword)
          .then(() => {
            alert("Password has been reset successfully.");
            window.location.href = "login.html"; // Redirect to login page after reset
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error("Error resetting password:", error);
            alert(errorMessage);
          });
      } else {
        alert("Invalid request. Please make sure you have the correct link.");
      }
    });
  });