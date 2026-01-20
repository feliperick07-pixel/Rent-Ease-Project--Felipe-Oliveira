const form = document.getElementById("LoginInfo");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    errorMessage.textContent = "";

    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        errorMessage.textContent = "No registered user found.";
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        // salva usuário logado
        localStorage.setItem("loggedUser", JSON.stringify(savedUser));

        // salva horário do login
        localStorage.setItem("loginTime", Date.now());

        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});
