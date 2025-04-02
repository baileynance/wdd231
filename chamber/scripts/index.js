document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

const nav = document.getElementById("nav");
nav.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="directory.html">Directory</a></li>
    <li><a href="join.html">Join</a></li>
    <li><a href="join.html">Discover</a></li>
`;

const navButton = document.getElementById("nav-button");
navButton.addEventListener("click", function() {
    nav.classList.toggle("show");
    if (navButton.textContent == "☰") {
        navButton.textContent = "-";
    } else if (navButton.textContent == "-") {
        navButton.textContent = "☰";
    }
})

// ---------------
// Time Formatting
// ---------------

function convertTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
    return formattedTime
}

// ---------------
// Weather Section
// ---------------
const weatherContainer = document.getElementById("weather-container");

const apiKey = "4db0869447d669fb789e198a2c37899d"; 
const lat = "47.04483805198912";
const lon = "-122.89532885625951";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error("Weather data not found");
    }
    const data = await response.json();
    console.log(data);
    const icon = document.createElement("img");
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    icon.setAttribute("alt", "Weather Icon");
    icon.classList.add("icon");
    weatherContainer.prepend(icon);
    const temperature = document.getElementById("temperature");
    temperature.textContent = data.main.temp;
    const weatherDesc = document.getElementById("weather-desc");
    weatherDesc.textContent = data.weather[0].description;
    const highTemp = document.getElementById("high-temp");
    highTemp.textContent = data.main.temp_max;
    const lowTemp = document.getElementById("low-temp");
    lowTemp.textContent = data.main.temp_min;
    const humidity = document.getElementById("humidity");
    humidity.textContent = data.main.humidity;
    const sunrise = document.getElementById("sunrise");
    sunrise.textContent = convertTime(new Date(data.sys.sunrise * 1000));
    const sunset = document.getElementById("sunset");
    sunset.textContent = convertTime(new Date(data.sys.sunset * 1000));

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) {
      throw new Error("Forecast data not found");
    }
    const data = await response.json();
    console.log(data);
    const today = document.getElementById("today");
    today.textContent = data.list[0].main.temp;
    const tomorrow = document.getElementById("tomorrow");
    tomorrow.textContent = data.list[8].main.temp;
    const dayAfter = document.getElementById("day-after");
    dayAfter.textContent = data.list[16].main.temp;
  } catch (error) {
    console.error("Error fetching forecast:", error);
  }
}

getWeather();
getForecast();

// ---------------
// Company Section
// ---------------
const companies = document.getElementById("random-business");

const displayCompanies = (data) => {
    data.forEach(company => {
        const name = company.name;
        const address = company.address;
        const phoneNumber = company.phoneNumber;
        const url = company.url;
        const image = company.image;
        //const membership = company.membership;
        const other = company.other;

        const li = document.createElement("li");
        li.classList.add("company-container");
        li.innerHTML = `
        <h3>${name}</h3>
        <p class="catchphrase">${other}</p>
        <img src="${image}" alt="${name} Image">
        <div id="company-info">
        <p class="phone-number">PHONE: ${phoneNumber}</p>
        <a href="${url}" target="_blank" class="url">URL: ${url}</a>
        <div>
        `;

        companies.appendChild(li);
    });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

async function getCompanies() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    const shuffled = shuffleArray(data);
    const randomThree = shuffled.slice(0, 3);
    displayCompanies(randomThree);
}

getCompanies();
