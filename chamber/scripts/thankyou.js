document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

// Navigation
const nav = document.getElementById("nav");
nav.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="directory.html">Directory</a></li>
    <li><a href="join.html">Join</a></li>
    <li><a href="discover.html">Discover</a></li>
`;

const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", function() {
    nav.classList.toggle("show");
    if (navButton.textContent == "☰") {
        navButton.textContent = "-";
    } else if (navButton.textContent == "-") {
        navButton.textContent = "☰";
    }
})

const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

document.getElementById("appFName").textContent = myInfo.get("first-name");
document.getElementById("appLName").textContent = myInfo.get("last-name");
document.getElementById("appEmail").textContent = myInfo.get("email");
document.getElementById("appPhoneNumber").textContent = myInfo.get("phone-number");
document.getElementById("appDate").textContent = myInfo.get("formTimestamp");