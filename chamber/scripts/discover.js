document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

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

const container = document.getElementById("discover-container");
const displayLocations = (data) => {
    data.forEach(location => {
        let title = location.title;
        let image = location.image;
        let alt = location.alt;
        let address = location.address;
        let description = location.description;
        let url = location.url;

        let li = document.createElement("li");
        li.innerHTML = `
        <h2>${title}</h2>
        <div id="image-container">
            <figure>
                <img src="${image}" alt="${alt}" loading="lazy">
            </figure>
            <div>
                <p>${description}</p>
                <address>${address}</address>
            </div>
        </div>
        <button>Learn More</button>
        `;
        li.querySelector("button").addEventListener("click", () => {
            window.open(url, "_blank");
        });

        container.appendChild(li);
    });
}

async function getLocations() {
    const response = await fetch('./data/discover.json');
    const data = await response.json();
    displayLocations(data);
}

getLocations();

// Function to display a welcome message based on the last visit
const messageDiv = document.getElementById('welcome-message');
let now = new Date();
let lastVisit = localStorage.getItem('lastVisit');
if (lastVisit) {
    let lastDate = new Date(lastVisit);
    let timeDiff = now - lastDate; // in milliseconds
    let daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // convert to full days
    if (daysAgo < 1) {
        messageDiv.textContent = 'Back so soon! Awesome!';
    } else if (daysAgo === 1) {
        messageDiv.textContent = 'You last visited 1 day ago.';
    } else {
        messageDiv.textContent = `You last visited ${daysAgo} days ago.`;
    }
} else {
    messageDiv.textContent = 'Welcome! Let us know if you have any questions.';
}
// Update last visit
localStorage.setItem('lastVisit', now.toISOString());