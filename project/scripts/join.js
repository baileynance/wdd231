import { createHeader, welcomeMessage } from './header.js';
import { createFooter } from './footer.js';

createHeader();
createFooter();
welcomeMessage();

const button = document.getElementById('join-button');
button.addEventListener('click', () => {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        alert('User already exists! Please log in instead.');
        return;
    } else {
        localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, password }));
    }
});
