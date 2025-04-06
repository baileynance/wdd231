document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

const nav = document.getElementById("nav");
nav.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="directory.html">Directory</a></li>
    <li><a href="join.html">Join</a></li>
    <li><a href="join.html">Discover</a></li>
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


// Modal for membership levels
const memberDetails = document.getElementById("member-details");
const displayMemberDetails = (member) => {
    courseDetails.innerHTML = ``; 
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${member.level}</h2>
    <p><strong>Cost</strong>: ${member.cost}</p>
    <p><strong>Benefits</strong>: ${member.benefits}</p>
    `;

    courseDetails.showModal();
    closeModal.addEventListener("click", function() {
        memberDetails.close();
    })
}