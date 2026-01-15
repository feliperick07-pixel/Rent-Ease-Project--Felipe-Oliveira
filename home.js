function logOut() {
    localStorage.removeItem("logged");
    window.location.href = "login.html";
    console.log("User logged out");
}
