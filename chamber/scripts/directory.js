const nav = document.getElementById("nav");

nav.innerHTML = `
    <li>Home</li>
    <li>Directory</li>
    <li>Join</li>
    <li>Discover</li>
`;

const gridView = document.getElementById("grid-view");
const listView = document.getElementById("list-view");

const companies = getElementById("companies");

const displayCompanies = (data) => {
    data.forEach(company => {
        const name = company.name;
        const address = company.address;
        const phoneNumber = company.phone-number;
        const url = company.url;
        const image = company.image;
        const membership = company.membership;
        const other = company.other;

        document.createElement("li");
        li.innerHTML = `
        <h3>${name}</h3>
        <p>${address}</p>
        <p>${phoneNumber}</p>
        <a>${url}</a>
        <img src="${image}">
        <p>${membership}</p>
        <p>${other}</p>
        `;

        companies.appendChild(li);
    });
}

async function getCompanies() {
    const response = await fetch('./data.json');
    const data = await response.json();
    displayCompanies(data);
}