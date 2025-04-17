const footer = document.querySelector("footer");

const createFooter = () => {
    footer.innerHTML = `
        <div>
            <p>&copy; <span id="currentyear"></span> Bailey Nance</p>
            <p>WDD 131 - Project</p>
            <p>All rights reserved. Privacy Policy</p>
        </div>
        <div>
            <a href="https://www.youtube.com/@baileynance7715" target="_blank">YouTube</a>
            <a href="https://github.com/baileynance/wdd131" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/bailey-nance-b864b1243/" target="_blank">LinkedIn</a>
        </div>
        <div>
            <a href="index.html">Home</a>
            <a href="browse.html">Browse</a>
            <a href="join.html">Join</a>
        </div>
    `;
    document.getElementById('currentyear').innerText = new Date().getFullYear();
}


export { createFooter };