function Strength(password) {
  const commonPasswords = [
      '123456', 'password', '123456789', '12345678', '12345',
      '1234567', '1234567890', 'qwerty', 'abc123', 'password1',
      '111111', '123123', 'admin', 'letmein', 'welcome'
  ];

  let strength = 0;

  if (commonPasswords.includes(password)) {
      return 0;
  }

  if (password.length > 8) {
      strength++;
  }
  if (password.length >= 12) {
      strength++;
  }

  if (/[A-Z]/.test(password)) {
      strength++;
  }

  if (/[a-z]/.test(password)) {
      strength++;
  }

  if (/[0-9]/.test(password)) {
      strength++;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
      strength++;
  }

  return strength;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#YourPassword").value;

  let strength = Strength(password);
  let strengthMeter = document.querySelector(".strengthMeter");
  strengthMeter.innerHTML = ""; // Clear the previous strength meter

  if (strength <= 2) {
      container.classList.add("weak");
      container.classList.remove("moderate");
      container.classList.remove("strong");
      strengthMeter.innerHTML = "<span>Weak</span>";
  } else if (strength > 2 && strength <= 4) {
      container.classList.remove("weak");
      container.classList.add("moderate");
      container.classList.remove("strong");
      strengthMeter.innerHTML = "<span>Moderate</span>";
  } else {
      container.classList.remove("weak");
      container.classList.remove("moderate");
      container.classList.add("strong");
      strengthMeter.innerHTML = "<span>Strong</span>";
  }
});

let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");
show.onclick = function () {
  if (password.type === "password") {
      password.setAttribute("type", "text");
      show.classList.add("hide");
  } else {
      password.setAttribute("type", "password");
      show.classList.remove("hide");
  }
};
