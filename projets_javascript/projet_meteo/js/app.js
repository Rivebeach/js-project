const weatherIcons = {
"Rain": "wi wi-day-rain",
"Clouds": "wi wi-day-cloudy",
"Clear": "wi wi-day-sunny",
"Snow": "wi wi-day-snow",
"Mist": "wi wi-day-fog",
"Drizzle": "wi wi-day-sleet",
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

async function main() {
const ip = await fetch("https://api.ipify.org?format=json")
    .then(resultat => resultat.json())
    .then(json => json.ip)
const ville = await fetch("http://freegeoip.app/json/" + ip)
    .then(resultat => resultat.json())
    .then(json => json.city)
const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=dbc704c3caeed2f8a8536e28b6453833&lang=fr&units=metric`)
    .then(resultat => resultat.json())
    .then(json => json)
console.log(ip);
console.log(ville);
console.log(meteo);
displayWeatherInfos(meteo);
}

function displayWeatherInfos(data) {
    const name = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].main;
    const description = data.weather[0].description;
    document.querySelector("#ville").textContent = name;
    document.querySelector("#temperature").textContent = Math.round(temperature);
    document.querySelector("#conditions").textContent = capitalize(description);
    document.querySelector("i.wi").className = weatherIcons[condition];
    document.body.className = condition.toLowerCase();
}

main();