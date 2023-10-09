document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    signupForm.addEventListener('submit', function (event) {
        if (!isValidForm()) {
            event.preventDefault();
        }
    });

    function isValidForm() {
        let isValid = true;

        // Check email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email.");
            isValid = false;
        }

        // Check phone number length (assuming it's 10 digits without any formatting)
        if (phoneInput.value.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Check password length (assuming a minimum of 6 characters)
        if (passwordInput.value.length < 6) {
            alert("Password should be at least 6 characters long.");
            isValid = false;
        }

        return isValid;
    }
});
