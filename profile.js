// profile.js

// Function to check if user is logged in
function isAuthenticated() {
    return localStorage.getItem('userLoggedIn') === 'true';
}

// Function to display user profile
function displayUserProfile() {
    if (!isAuthenticated()) {
        // Redirect to login page or home page if not authenticated
        window.location.href = 'index.html'; // Redirect to home page or login page
        return;
    }

    // Retrieve user details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Populate profile section with user details
    if (userDetails) {
        document.getElementById('profile-fullname').textContent = userDetails.fullname;
        document.getElementById('profile-phone').textContent = userDetails.phone;
        document.getElementById('profile-email').textContent = userDetails.email;
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userDetails');
    window.location.href = 'index.html'; // Redirect to home page after logout
}

// Event listener for the logout button
document.getElementById('logout-btn').addEventListener('click', handleLogout);

// Initialize the profile page
displayUserProfile();
