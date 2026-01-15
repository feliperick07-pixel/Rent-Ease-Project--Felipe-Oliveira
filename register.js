const form = document.getElementById("registerInfo");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthDate = document.getElementById("birthDate").value;
    const userData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate
    };

    if (
        email ==="" ||
        password === "" ||
        confirmPassword === "" ||
        firstName === "" ||
        lastName === "" ||
        birthDate === ""
    ) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

       

    console.log("Form enviado");
    console.log(userData);

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration successful! You can now log in.");

    window.location.href = "login.html";
});

    
