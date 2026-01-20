const user = JSON.parse(localStorage.getItem("loggedUser"));
const loginTime = localStorage.getItem("loginTime");

if (!user || !loginTime || Date.now() - loginTime > 60 * 60 * 1000) {
    localStorage.clear();
    window.location.href = "login.html";
}

document.getElementById("welcomeUser").textContent =
    `Hello ${user.firstName} ${user.lastName}`;

function logOut() {
    localStorage.clear();
    window.location.href = "login.html";
}