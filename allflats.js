const user=JSON.parse(localStorage.getItem("loggedUser"));
if(!user){
    window.location.href="login.html";
}

let flats=JSON.parse(localStorage.getItem("flats"))||[];

const tableBody=document.getElementById("flatsTable");
const filterCity=document.getElementById("filterCity");
const filterButton=document.getElementById("filterButton");
const clearButton=document.getElementById("clearButton");

filterButton.addEventListener("click",function(){
    const city=filterCity.value.trim().toLowerCase();
    const filteredFlats=flats.filter(function(flat){
        return flat.city.toLowerCase().includes(city);
    });
    renderFilteredFlats(filteredFlats);
});

function renderFlats(){
    tableBody.innerHTML="";

    flats.forEach(function(flat, index){
        const row=document.createElement("tr");
        row.innerHTML=`
            <td>${flat.city}</td>
            <td>${flat.streetName}</td>
            <td>${flat.streetNumber}</td>
            <td>${flat.areaSize} m²</td>
            <td>${flat.hasAC?"Yes":"No"}</td>
            <td>${flat.yearBuilt}</td>
            <td>$${flat.rentPrice}</td>
            <td>${flat.dateAvailable}</td>
            <td>
                <button onclick="toggleFavorite(${flats.indexOf(flat)})">
                    ${flat.isFavorite ? "❤️" : "🤍"}
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    })
    }
function toggleFavorite(index){
    flats[index].isFavorite=!flats[index].isFavorite;
    localStorage.setItem("flats",JSON.stringify(flats));
    renderFlats();
    }


renderFlats();

function renderFilteredFlats(filteredFlats){
    tableBody.innerHTML="";

    filteredFlats.forEach(function(flat, index){
        const row=document.createElement("tr");
        row.innerHTML=`
            <td>${flat.city}</td>
            <td>${flat.streetName}</td>
            <td>${flat.streetNumber}</td>
            <td>${flat.areaSize} m²</td>
            <td>${flat.hasAC?"Yes":"No"}</td>
            <td>${flat.yearBuilt}</td>
            <td>$${flat.rentPrice}</td>
            <td>${flat.dateAvailable}</td>

            <td>
                <button onclick="toggleFavorite(${flats.indexOf(flat)})">
                    ${flat.isFavorite ? "❤️" : "🤍"}
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    })
};

clearButton.addEventListener("click",function(){
    filterCity.value="";
    renderFlats();
});

const sortPrice=document.getElementById("sortPrice");
sortPrice.addEventListener("change",function(){
    const order=sortPrice.value;

    let sortedFlats=[...flats];
        if (order === "asc") {
        sortedFlats.sort(function (a, b) {
            return a.rentPrice - b.rentPrice;
        });
    }

    if (order === "desc") {
        sortedFlats.sort(function (a, b) {
            return b.rentPrice - a.rentPrice;
        });
    }
    if (order==="") {
        renderFlats();
    } else{
        renderFilteredFlats(sortedFlats);
    }

});

const filterAC=document.getElementById("filterAC");
filterAC.addEventListener("change",function(){
    const hasAC=filterAC.value;

    let filteredFlats=[...flats];
    if (hasAC==="yes") {
        filteredFlats=filteredFlats.filter(flat=>flat.hasAC);
    } else if (hasAC==="no") {
        filteredFlats=filteredFlats.filter(flat=>!flat.hasAC);
    }
    renderFilteredFlats(filteredFlats);
});

function logOut(){
    localStorage.clear();
    window.location.href="login.html";
};
