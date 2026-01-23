const user = JSON.parse(localStorage.getItem("loggedUser"));
const loginTime = localStorage.getItem("loginTime");

if (!user || !loginTime || Date.now() - loginTime > 60 * 60 * 1000) {
    localStorage.clear();
    window.location.href = "login.html";
}

document.getElementById("welcomeUser").textContent =
    `Hello ${user.firstName} ${user.lastName}!`;

const favoritesSection = document.getElementById("favoritesSection");

let flats = JSON.parse(localStorage.getItem("flats")) || [];


const favoriteFlats = flats.filter(flat => flat.isFavorite);

if (favoriteFlats.length === 0) {
    favoritesSection.innerHTML += "<p>No favorite flats yet </p>";
} else {
    favoriteFlats.forEach(flat => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.marginBottom = "10px";
        div.style.borderRadius = "4px";

        div.innerHTML = `
            <strong>${flat.city}</strong><br>
            ${flat.streetName} ${flat.streetNumber}<br>
            ${flat.areaSize} m² • $${flat.rentPrice}<br>
            ${flat.hasAC ? "Has AC ❄️" : "No AC"}
        `;

        favoritesSection.appendChild(div);
    });
}

function logOut() {
    localStorage.clear();
    window.location.href = "login.html";
}
