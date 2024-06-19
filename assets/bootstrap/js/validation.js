document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("Emailinput").value;
    let password = document.getElementById("Passwordinput").value;
    let isValid = true;

    // Clear previous error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Validate email format
    if (!validateEmail(email)) {
      document.getElementById("emailError").innerText =
        "Please enter a valid email address.";
      isValid = false;
    }

    // Validate password complexity
    if (!validatePassword(password)) {
      document.getElementById("passwordError").innerText =
        "Password must be at least 8 characters long and contain both letters and numbers.";
      isValid = false;
    }

    // If there are no errors, you can proceed with form submission or further processing
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  // Validate email format
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Validate password complexity
  function validatePassword(password) {
    return (
      password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)
    );
  }
});

// form.setAttribute("novalidate", ""); prevents browsers bulit in validatiion ffrom running

// validateemail ffunction Checks if the email string includes both "@" and "." characters. This ensures basic validation of email format.

// validatepassword Checks three conditions:
// password.length >= 8: Ensures the password is at least 8 characters long.
// /\d/.test(password): Checks if the password contains at least one digit.
// /[a-zA-Z]/.test(password): Checks if the password contains at least one letter (case insensitive).
