function validateForm() {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value;

  if (name === "") {
    console.log("Please enter your name.");
    return false;
  }

  if (email === "") {
    console.log("Please enter your email address.");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    console.log("Invalid email address");
    return false;
  }

  if (password.length < 8) {
    console.log("Password must be at least 8 characters long");
    return false;
  }

  return true;
}

module.exports = validateForm;