let form = document.getElementById('registrationForm');
let errorContainer = document.getElementById('errorContainer');
let successContainer = document.getElementById('successContainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    function isValidEmail(email) {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return passwordRegex.test(password);
    }

    errorContainer.innerHTML = '';
    successContainer.innerHTML = '';

    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let dob = form.elements.dob.value;
    let password = form.elements.password.value;
    let confirmPassword = form.elements.confirmPassword.value;

    if (!isValidEmail(email)) {
        showError('Invalid email format');
        return;
    }

    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
        return;
    }
    if (!isValidPassword(password)) {
        showError('Password must contain letters, numbers, and special symbols');
        return;
    }
    if (!isValidPassword(confirmPassword)) {
        showError('Password must contain letters, numbers, and special symbols');
        return;
    }
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    let isRegistrationSuccessful = true;

    if (isRegistrationSuccessful) {
        showSuccess('Registration successful! you can now log in.');
        form.reset();
    } else {
        showError('An error occurred during registration.');
            }
});

function showError(message) {
    let errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
}

function showSuccess(message) {
    let successElement = document.createElement('p');
    successElement.textContent = message;
    successContainer.appendChild(successElement);
}