document.getElementById("registerInfo").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (!firstName || !lastName || !birthDate || !email || !password || !confirmPassword) {
        error.textContent = "All fields are required.";
        return;
    }

    if (firstName.length < 2 || lastName.length < 2) {
        error.textContent = "Names must be at least 2 characters.";
        return;
    }

    const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
    if (age < 18 || age > 120) {
        error.textContent = "Age must be between 18 and 120.";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.textContent = "Invalid email.";
        return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
    if (!passwordRegex.test(password)) {
        error.textContent = "Weak password.";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return;
    }

    const user = { email, password, firstName, lastName, birthDate };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "login.html";
});

    
