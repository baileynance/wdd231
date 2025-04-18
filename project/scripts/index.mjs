import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

async function getCards() {
    try {
        const response = await fetch("./data/cards.json");
        const data = await response.json();
        displayPokemon(data);
        displayYugiOh(data);
        displayOnePiece(data);
        displayDisney(data);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

const displayPokemon = (data) => {
    const pokemon = document.getElementById("pokemon");
    let pokemonCards = data.filter(card => card.type == "Pokemon");
    pokemonCards = pokemonCards.sort(() => 0.5 - Math.random());
    pokemonCards = pokemonCards.slice(0, 3);
    pokemonCards.forEach(card => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name} Image" loading="lazy">
        `;
        pokemon.appendChild(li);
    });
}

const displayYugiOh = (data) => {
    const yugiOh = document.getElementById("yugi-oh");
    let yugiOhCards = data.filter(card => card.type == "Yugi-Oh");
    yugiOhCards = yugiOhCards.sort(() => 0.5 - Math.random());
    yugiOhCards = yugiOhCards.slice(0, 3);
    yugiOhCards.forEach(card => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name} Image" loading="lazy">
        `;
        yugiOh.appendChild(li);
    });
}

const displayOnePiece = (data) => {
    const onePiece = document.getElementById("one-piece");
    let onePieceCards = data.filter(card => card.type == "One-Piece");
    onePieceCards = onePieceCards.sort(() => 0.5 - Math.random());
    onePieceCards = onePieceCards.slice(0, 3);
    onePieceCards.forEach(card => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name} Image" loading="lazy">
        `;
        onePiece.appendChild(li);
    });
}

const displayDisney = (data) => {
    const disney = document.getElementById("disney");
    let disneyCards = data.filter(card => card.type == "Disney");
    disneyCards = disneyCards.sort(() => 0.5 - Math.random());
    disneyCards = disneyCards.slice(0, 3);
    disneyCards.forEach(card => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name} Image" loading="lazy">
        `;
        disney.appendChild(li);
    });
}


getCards();