function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('rememberMe').checked;

    if (username == "" || password == "") {
        alert("Username and Password must be filled out");
        return false;
    }

    // Store "Remember Me" state in local storage (for demonstration purposes)
    if (rememberMe) {
        localStorage.setItem('rememberMe', true);
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('username');
    }

    // Simulate login success for now
    alert("Login successful");
    return false; // Prevent form submission for demo purposes
}

// Auto-fill username if "Remember Me" was checked
window.onload = function() {
    var rememberMe = localStorage.getItem('rememberMe');
    if (rememberMe) {
        document.getElementById('rememberMe').checked = true;
        document.getElementById('username').value = localStorage.getItem('username');
    }
};
