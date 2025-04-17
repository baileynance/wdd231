import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

async function getCards() {
    const response = await fetch("./data/cards.json");
    const data = await response.json();
    displayCards(data);
}

const favorites = document.getElementById("favorites");
const displayCards = (data) => {
    favorites.innerHTML = "";
    let list = localStorage.getItem("favorite-list");
    if (list) {
        list = JSON.parse(list);
        data.forEach(card => {
            if (list.includes(card.name)) {
                const li = document.createElement("li");
                li.innerHTML = `
                <h3>${card.name} <span><button class="remove-favorite">-</button></span></h3>
                <img src="${card.image}" alt="${card.name} Image" loading="lazy">
                `;

                const button = li.querySelector(".remove-favorite");
                button.addEventListener("click", () => {
                    list = list.filter(name => name !== card.name);
                    localStorage.setItem("favorite-list", JSON.stringify(list));
                    getCards();
                })

                favorites.appendChild(li);
            }
        });
    }
}

const deleteFavorites = document.getElementById("delete-favorites");
deleteFavorites.addEventListener("click", function() {
    localStorage.clear();
    getCards();
})

getCards();