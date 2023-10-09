document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent the form from submitting right away

    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    // Email validation
    if (
      !email ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
    ) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    loginForm.submit(); // This will actually submit the form
  });
});
