import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

let cardData = [];
let filteredData = [];

async function getCards() {
    const response = await fetch("./data/cards.json");
    const data = await response.json();
    cardData = data;
    displayCards(cardData);
}

getCards();

const cardList = document.getElementById("card-list");
const displayCards = (data) => {
    cardList.innerHTML = "";
    data.forEach(card => {
        let li = document.createElement("li");
        li.innerHTML = `
        <h3>${card.name}</h3>
        <img src="${card.image}" alt="${card.name} Image">
        `;
        cardList.appendChild(li);
    })
}

const sort = document.getElementById("sort");
sort.addEventListener("change", function(e) {
    const input = e.target.value;
    if (input == "disney") {
        filteredData = cardData.filter(card => card.type == "disney");
    } else if (input == "one-piece") {
        filteredData = cardData.filter(card => card.type == "one-piece");
    } else if (input == "yugi-oh") {
        filteredData = cardData.filter(card => card.type == "yugi-oh");
    } else if (input == "pokemon") {
        filteredData = cardData.filter(card => card.type == "pokemon");
    }
    displayCards(filteredData);
})


