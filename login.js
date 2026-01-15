const form = document.getElementById('LoginInfo');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        email: email,
        password: password
    };

    console.log("Form enviado");
    console.log(userData)

    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("User not registred");
        return
    }

    if (email === savedUser.email && password === savedUser.password) {
        alert("Login realizado com sucesso!");

        
        localStorage.setItem("logged", "true");

        
        window.location.href = "home.html";
    } else {
        alert("Email ou senha incorretos");
    }
}       
);

