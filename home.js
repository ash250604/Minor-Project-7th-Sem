// home.js

// Function to check if user is logged in
function isAuthenticated() {
    return localStorage.getItem('userLoggedIn') === 'true';
}

// Function to open the modal
function openAuthModal() {
    document.getElementById('auth-modal').style.display = 'block';
}

// Function to close the modal
function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

// Function to handle the login form submission
function handleLogin(event) {
    event.preventDefault();
    // Add your login logic here (e.g., validate and store user info in localStorage)
    localStorage.setItem('userLoggedIn', 'true');
    closeAuthModal();
}

// Function to handle the signup form submission
function handleSignup(event) {
    event.preventDefault();

    const fullname = document.getElementById('signup-fullname').value;
    const phone = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store user details in local storage
    const userDetails = {
        fullname: fullname,
        phone: phone,
        email: email,
        password: password // Note: Storing plaintext passwords is not secure. Consider hashing passwords in a real application.
    };

    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    localStorage.setItem('userLoggedIn', 'true');
    closeAuthModal();
    alert('Signup successful!'); // Success alert message
}

// Event listener for the login form
document.getElementById('login').addEventListener('submit', handleLogin);

// Event listener for the signup form
document.getElementById('signup').addEventListener('submit', handleSignup);

// Event listeners for the close button
document.getElementById('close-btn').addEventListener('click', closeAuthModal);

// Event listeners for the login/signup toggle
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});
document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});

// Event listener for the calendar link
document.getElementById('calendar-link').addEventListener('click', function (event) {
    if (!isAuthenticated()) {
        event.preventDefault();
        openAuthModal();
    }
});

// Event listener for the profile link
document.getElementById('profile-link').addEventListener('click', function (event) {
    if (!isAuthenticated()) {
        event.preventDefault();
        openAuthModal();
    }
});

// Event listener for the login button in the navbar
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default action of the link
    openAuthModal(); // Open the auth modal
    document.getElementById('login-form').style.display = 'block'; // Show the login form
    document.getElementById('signup-form').style.display = 'none'; // Hide the signup form
});


// =========================================
// Contact Details
// =========================================

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const contactDetails = {
        name: name,
        email: email,
        message: message
    };

    // Store the object in LocalStorage
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

    // Show an alert when details are added
    alert('Contact details have been added successfully!');

    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
});