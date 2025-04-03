// Define the routes and their content
const routes = {
    home: "<h2>Home Page</h2><p>Welcome to our single-page application!</p>",
    about: "<h2>About Us</h2><p>We are building a simple hash-based SPA.</p>",
    contact: "<h2>Contact Us</h2><p>Email us at contact@example.com</p>",
};

// Function to handle route changes
function loadContent() {
    const hash = location.hash.substring(1) || "home"; // Default to "home"
    document.getElementById("content").innerHTML = routes[hash] || "<h2>404 - Page Not Found</h2>";
}

// Listen for hash changes
window.onhashchange = loadContent;
window.onload = loadContent; // Load the correct content on page load
