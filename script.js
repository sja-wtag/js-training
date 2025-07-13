document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const termsCheckbox = document.getElementById('terms');

    // Create a form if it doesn't exist already
    if (!form) {
        const button = document.querySelector('button[type="submit"]');
        const newForm = document.createElement('form');
        // Move all body children except h1 into the form
        const elements = Array.from(document.body.children).slice(1);
        elements.forEach(el => newForm.appendChild(el));
        document.body.appendChild(newForm);
    }

    document.querySelector('form').addEventListener('submit', function (e) {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !email || !password) {
            showCustomAlert("Please fill in all required fields (Username, Email, Password).");
            e.preventDefault();
            return;
        }

        if (!termsCheckbox.checked) {
            alert("You must accept the terms and conditions to submit.");
            e.preventDefault();
            return;
        }

        alert("Form submitted successfully!");
    });
});

function showCustomAlert(message) {
    document.getElementById('customAlertMessage').innerText = message;
    document.getElementById('customAlertOverlay').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
}