const form = document.querySelector(".contact-form");
form.setAttribute("novalidate", "");
document.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("Emailinput").value;
  let password = document.getElementById("Passwordinput").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(password)) {
    alert(
      "Password must be at least 8 characters long and contain both letters and numbers."
    );
    return;
  }

  alert("Form submitted successfully!");
});

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validatePassword(password) {
  return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/;
}

// form.setAttribute("novalidate", ""); prevents browsers bulit in validatiion ffrom running

// validateemail ffunction Checks if the email string includes both "@" and "." characters. This ensures basic validation of email format.

// validatepassword Checks three conditions:
// password.length >= 8: Ensures the password is at least 8 characters long.
// /\d/.test(password): Checks if the password contains at least one digit.
// /[a-zA-Z]/.test(password): Checks if the password contains at least one letter (case insensitive).
