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

const displayCards = (data) => {

}


getAnime();