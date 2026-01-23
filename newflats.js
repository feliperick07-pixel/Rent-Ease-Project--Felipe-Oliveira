const form=document.getElementById("newFlatsForm");
const errorMessage=document.getElementById("formMessage");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const city = document.getElementById("city").value.trim();
    const streetName = document.getElementById("streetName").value.trim();
    const streetNumber = document.getElementById("streetNumber").value;
    const areaSize = document.getElementById("areaSize").value;
    const hasAC = document.getElementById("hasAC").checked;
    const yearBuilt = document.getElementById("yearBuilt").value;
    const rentalPrice = document.getElementById("rentalPrice").value;
    const dateAvailable = document.getElementById("dateAvailable").value;
    errorMessage.textContent="";

    if(streetName===""||streetNumber===""||areaSize===""||yearBuilt===""||rentalPrice===""||dateAvailable===""){
        errorMessage.textContent="Please fill in all fields.";
        return;
    }

    let flats = JSON.parse(localStorage.getItem("flats")) || [];

    const flat={
        id: Date.now(),
        city: city,
        streetName: streetName,
        streetNumber: Number(streetNumber),
        areaSize: Number(areaSize),
        hasAC: hasAC,
        yearBuilt: Number(yearBuilt),
        rentPrice: Number(rentalPrice),
        dateAvailable: dateAvailable,
        isFavorite: false
    }

    flats.push(flat);
    localStorage.setItem("flats",JSON.stringify(flats));
    alert("Flat added successfully!");
    window.location.href="allflats.html";
});

function logOut() {
    localStorage.clear();
    window.location.href = "login.html";
}