const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector(".submit-button");
const match = document.querySelector(".match-info");
const form = document.querySelector("#signup-form");

confirmPassword.addEventListener("focusout", (event) => {
  if (confirmPassword.value !== password.value) {
    match.classList.add("no-match-info");
    confirmPassword.style.cssText = "border-color: rgb(252, 78, 78); background-color: rgb(250, 209, 209);";
    confirmPassword.setCustomValidity("Passwords must match");
  } else if (password.value === "") {
    confirmPassword.style.cssText = "outline:none;";
  } else {
    match.classList.remove("no-match-info");
    confirmPassword.classList.add("yes-match");
    confirmPassword.style.cssText = "border-color: none";
    confirmPassword.setCustomValidity("");
  }
});
