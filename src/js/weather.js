function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "7d88b2d9bec3331892eb1be019f3ea6a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            const tmp =(data.main.temp-273.15).toFixed(1);
            const imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            weather.innerHTML = `<img src=${imgURL} alt=${data.weather[0].main} /> ${tmp}ºC`;
            city.innerText = " | "+data.name; 
        }).catch(() => console.log("not connect!"));
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);