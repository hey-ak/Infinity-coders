document.addEventListener('DOMContentLoaded', function () {

    const paymentForm = document.getElementById('paymentForm');
    const billingForm = document.getElementById('billingForm');

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (isValidPaymentForm() && isValidBillingForm()) {
            alert("Payment Successful!");
            setTimeout(() => {
                window.location.href = "./index.html";
            }, 3000);
        }
    });

    function isValidPaymentForm() {
        const upiId = document.getElementById('upiId').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expMonth = document.getElementById('expMonth').value;
        const expYear = document.getElementById('expYear').value;
        const cvv = document.getElementById('cvv').value;

        if (upiId === '' && cardNumber === '') {
            alert("Please provide a UPI ID or a Credit Card Number.");
            return false;
        }

        if (upiId !== '' && (cardNumber !== '' || expMonth !== '' || expYear !== 'Choose Year..' || cvv !== '')) {
            alert("Please provide either UPI ID or Credit Card details, not both.");
            return false;
        }

        if (cardNumber !== '' && (expMonth === '' || expYear === 'Choose Year..' || cvv === '')) {
            alert("Please provide all credit card details.");
            return false;
        }

        if (cardNumber.length < 12) {
            alert("Please provide a valid Credit Card Number.");
            return false;
        }

        if (cvv.length !== 3) {
            alert("Please provide a valid CVV.");
            return false;
        }

        return true;
    }

    function isValidBillingForm() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (fullName === '') {
            alert("Please provide a full name.");
            return false;
        }

        if (!emailPattern.test(email)) {
            alert("Please provide a valid email address.");
            return false;
        }

        return true;
    }
});
