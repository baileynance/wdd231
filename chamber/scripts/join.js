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

// Get timestamp
document.addEventListener("DOMContentLoaded", function () {
    const now = new Date().toISOString(); // 
    document.getElementById("formTimestamp").value = now;
})

// Display the membership levels
const membershipDetailsElement = document.getElementById("membership-levels");

const displayMemberships = (memberships) => {
    memberships.forEach(function(membership) {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.textContent = `${membership.level} Membership Level`;
        let button = document.createElement("button");
        button.textContent = "Learn More";

        button.addEventListener("click", function() {
        displayMembershipDetails(membership);
        });

        div.classList.add("membership-details");
        div.classList.add("appear");
        div.appendChild(h3);
        div.appendChild(button);
        membershipDetailsElement.appendChild(div);
    })
}

async function getMemberships() {
    const response = await fetch('./data/membership.json');
    const data = await response.json();
    displayMemberships(data);
}


// Modal for membership levels
const membershipDetails = document.getElementById("member-details");
const displayMembershipDetails = (membership) => {
    membershipDetails.innerHTML = ``; 
    membershipDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${membership.level}</h2>
    <p><strong>Cost</strong>: ${membership.cost}</p>
    <p><strong>Benefits</strong>: ${membership.benefits}</p>
    `;

    membershipDetails.showModal();
    closeModal.addEventListener("click", function() {
        membershipDetails.close();
    })
}

getMemberships();