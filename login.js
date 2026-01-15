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
});

