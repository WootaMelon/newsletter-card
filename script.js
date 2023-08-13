let form = document.getElementById("submit-form");
let email = document.getElementById("email-input");
let span = document.getElementById("email-span");
let signupForm = document.getElementsByClassName("signup-form");
let successMessage = document.getElementsByClassName("success-message");
let invalidText = document.getElementById("invalid-email-text");
let regex = /\S+@\S+\.\S+/;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (regex.test(email.value)) {
    span.innerText = email.value;
    signupForm[0].style.display = "none";
    successMessage[0].style.display = "flex";
    email.classList.remove("error-state");
    invalidText.style.display = "none";
  } else if (!regex.test(email.value)) {
    email.classList.add("error-state");
    invalidText.style.display = "block";
  }
});

email.addEventListener("input", () => {
  if (email.value === "") {
    email.classList.remove("error-state");
    invalidText.style.display = "none";
  }
});

function dissmissMessage() {
  signupForm[0].style.display = "flex";
  successMessage[0].style.display = "none";
  email.value = "";
}
