const user=JSON.parse(localStorage.getItem("loggedUser"))||{};

if(!user){
    window.location.href="login.html";
}

document.getElementById("welcomeUser").innerText=`Welcome, ${user.firstName} ${user.lastName}!`;

document.getElementById("firstName").value = user.firstName;
document.getElementById("lastName").value = user.lastName;
document.getElementById("birthDate").value = user.birthDate;

const form=document.getElementById("updateProfileForm");
const message=document.getElementById("updateMessage");

document.getElementById("updateProfileForm").addEventListener("submit",function(e){
    e.preventDefault();

    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const birthDate=document.getElementById("birthDate").value;

    user.firstName=firstName;
    user.lastName=lastName;
    user.birthDate=birthDate;

    localStorage.setItem("loggedUser", JSON.stringify(user));
    localStorage.setItem("user",JSON.stringify(user));
    

    message.innerText="Profile updated successfully!";
    

});

function logOut() {
    localStorage.clear();
    window.location.href = "login.html";
}
