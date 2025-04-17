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
        <h3>${card.name} <span class="favorite-star"><button class="favorite-button">&#9734;</button></span></h3>
        <img src="${card.image}" alt="${card.name} Image" loading="lazy">
        `;

        const button = li.querySelector(".favorite-button");
        button.addEventListener("click", (e) => {
            const star = e.target.textContent;
            let data = localStorage.getItem("favorite-list");
            if (data) {
                data = JSON.parse(data);
            }

            if (star === "☆") {
                e.target.textContent = "★";
                if (data !== null) {
                    data.push(card.name);
                    localStorage.setItem("favorite-list", JSON.stringify(data));
                } else {
                    const singleItem = card.name;
                    const list = [singleItem];
                    localStorage.setItem("favorite-list", JSON.stringify(list));
                }
            } else if (star === "★") {
                e.target.textContent = "☆";
                if (data !== null) {
                    data = data.filter(name => name !== card.name);
                    localStorage.setItem("favorite-list", JSON.stringify(data));
                } 
            }
        })
        
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


