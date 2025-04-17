const header = document.querySelector("header");

const createHeader = () => {
    header.innerHTML = `
    <div>
        <img id="logo" src="images/R.png" alt="Randimé Logo">
        <h1>Randimé</h1>
        <div id="welcome"></div>
    </div>
    <nav id="header-nav">
        <ul id="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="browse.html">Browse</a></li>
            <li><a href="generate.html">Generate</a></li>
            <li><a href="join.html">Join</a></li>
        </ul>
    </nav>
    `;
}

const welcomeMessage = () => {
    const welcome = document.getElementById('welcome');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        welcome.innerHTML = `
            <p>Welcome, ${user.firstName}!</p>
            <button id="clear">x</button>
        `;
        const clear = document.getElementById("clear");
        clear.addEventListener('click', function() {
            localStorage.clear();
            document.getElementById('welcome').innerHTML = "";
        })
    }
}

export { createHeader, welcomeMessage };