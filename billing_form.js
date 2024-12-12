document.addEventListener('DOMContentLoaded', function () {
    const billingForm = document.querySelector('#billing_form form');

    billingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Payment information submitted successfully!');
            // You can add code here to handle form submission, e.g., send data to the server
        }
    });

    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const zip = document.getElementById('zip').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expDate = document.getElementById('expDate').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!fullName || !email || !address || !city || !state || !zip || !cardNumber || !expDate || !cvv) {
            alert('Please fill out all fields.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!validateCardNumber(cardNumber)) {
            alert('Please enter a valid credit card number.');
            return false;
        }

        if (!validateExpDate(expDate)) {
            alert('Please enter a valid expiration date in MM/YY format.');
            return false;
        }

        if (!validateCVV(cvv)) {
            alert('Please enter a valid CVV number.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateCardNumber(cardNumber) {
        const cardPattern = /^\d{16}$/;
        return cardPattern.test(cardNumber);
    }

    function validateExpDate(expDate) {
        const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return expPattern.test(expDate);
    }

    function validateCVV(cvv) {
        const cvvPattern = /^\d{3,4}$/;
        return cvvPattern.test(cvv);
    }
});
