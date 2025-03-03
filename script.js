 function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simple password strength requirement (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // If all validations pass, you can proceed to submit the form to the server
    alert("Registration successful!");
    // Here, you would typically submit the form data to the server using AJAX or form submission.
}
