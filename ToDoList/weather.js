const API_KEY = "cd2e1d109dd7a1a3f345a9f6d42b8895";
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(lat + ' ' + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}
function onGeoError(){
    alert("위치 추적을 허락하지 않으면 날씨정보를 불러올 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);