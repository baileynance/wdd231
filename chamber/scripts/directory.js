document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

const nav = document.getElementById("nav");
nav.innerHTML = `
    <li>Home</li>
    <li>Directory</li>
    <li>Join</li>
    <li>Discover</li>
`;

const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");

const companies = document.getElementById("company-list");

const displayCompanies = (data) => {
    data.forEach(company => {
        const name = company.name;
        const address = company.address;
        const phoneNumber = company.phoneNumber;
        const url = company.url;
        const image = company.image;
        const membership = company.membership;
        const other = company.other;

        const li = document.createElement("li");
        li.innerHTML = `
        <h3>${name}</h3>
        <p>${address}</p>
        <p>${phoneNumber}</p>
        <a href="${url}" target="_blank">${url}</a>
        <img src="${image}">
        <p>${membership}</p>
        <p>${other}</p>
        `;

        companies.appendChild(li);
    });
}

async function getCompanies() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayCompanies(data);
}

getCompanies();