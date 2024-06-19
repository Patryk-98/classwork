document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let currentInput = "";

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.innerText;

      if (buttonText === "C") {
        currentInput = "";
        display.innerText = ""; // Clear display when clearing input
      } else if (buttonText === "=") {
        try {
          const result = eval(currentInput); // Evaluate the expression
          display.innerText = result; // Update display with result
          currentInput = ""; // Clear current input after calculation
        } catch (error) {
          display.innerText = "Error";
          currentInput = ""; // Clear current input in case of error
        }
      } else {
        currentInput += buttonText;
        display.innerText = currentInput; // Update display with current input
      }
    });
  });
});
