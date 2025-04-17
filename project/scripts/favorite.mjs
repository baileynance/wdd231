import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

let animeData = [];

async function getAnime() {
    const response = await fetch("./data/anime.json");
    const data = await response.json();
    animeData = data;
}

getAnime();

// Button for Generator
const random = document.getElementById("random-anime");
const button = document.getElementById("random-button");
button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * animeData.length);
    const randomItem = animeData[randomIndex];
    random.innerHTML = "";
    random.innerHTML = `
        <div>
            <h3>${randomItem.name}</h3>
            <p>${randomItem.rating} &starf;</p>
            <p>${randomItem.seasons} Season(s)</p>
            <p>${randomItem.episodes} Episodes</p>
            <p>${randomItem.synopsis}</p>
        </div>
        <a href="${randomItem.url}" target="_blank" loading="lazy"><img src="${randomItem.image}" alt="${randomItem.alt}"></a>
    `;
});