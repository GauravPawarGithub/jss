const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location_not_found');
const weather_body = document.querySelector('.weather-body')


//checkWeather function
async function checkWheather(city){
    const api_key = "13d8f26dbcabb00382a59b84e04e04a0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    //when error occur (city name incorrect)
    if(weather_data.cod === '404'){ //cod status code
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    //otherwise
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    //console.log(weather_data)

    //taking values from json(string->json) 
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    weather_img
    humidity.innerHTML = `${weather_data.main.humidity}`
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`

    //switch case for different weathers
    switch (weather_data.weather[0].main) {
      case "Clouds":
        weather_img.src = "/assets/cloud.png";
        break;
      case "Clear":
        weather_img.src = "/assets/clear.png";
        break;
      case "Snow":
        weather_img.src = "/assets/snow.png";
        break;
      case "Mist":
        weather_img.src = "/assets/mist.png";
        break;
      case "Rain":
        weather_img.src = "/assets/rain.png";
        break;
    }
}

//EventListener
searchBtn.addEventListener('click', ()=>{
    checkWheather(inputBox.value);
})