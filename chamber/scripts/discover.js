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
        <div>
            <figure>
                <img src="${image}" alt="${alt}">
                <figcaption>${description}</figcaption>
            </figure>
            <address>${address}</address>
        </div>
        <button><a href="${url}" target="_blank">Learn More</a></button>
        `;

        container.appendChild(li);
    });
}

async function getLocations() {
    const response = await fetch('./data/discover.json');
    const data = await response.json();
    displayLocations(data);
}

getLocations();