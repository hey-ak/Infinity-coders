document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();  // prevent default form submission

        const fullName = document.querySelector('input[name="fullname"]').value.trim();
        const phone = document.querySelector('input[name="Phone"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        if (!fullName) {
            alert("Please enter your full name!");
            return;
        }

        if (!phone) {
            alert("Please enter your phone number!");
            return;
        }

        if (!email) {
            alert("Please enter your email!");
            return;
        }

        if (!message) {
            alert("Please enter your message!");
            return;
        }

        // if all fields are valid, you can submit the form (e.g., to a server) here.
        // For this example, we're just going to show a success alert.
        alert("Your message has been sent! Thank you for contacting us.");
        form.reset();  // Clear the form
    });
});
