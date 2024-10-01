const searchCityForm = document.querySelector("#search-city-form");
const cityInput = document.querySelector("#city-search-input");
const weatherOutputBox = document.querySelector("#display-field");
const displayTitle = document.querySelector("#display-box-title");
const resultOutput = document.querySelector("#result-field");
const spinner = document.querySelector(".loader");
const citySearchButton = document.querySelector("#city-search-button");

const APP_ID = "cb8949512c5f49588b3735c24ccab5c3";

const getWeather = async (event) => {

    event.preventDefault();

    let cityName = cityInput.value.trim();
    if (cityName === ""){
        alert("Please enter city name");
        return;
    }

    citySearchButton.setAttribute("disabled", "");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`;
    weatherOutputBox.classList.remove("error");
    spinner.classList.remove("hide");
    resultOutput.textContent = "";

    try{
        const response = await fetch (url,
            {method: "GET",});

        const weatherGet = await response.json();

        if (response.ok) {
            displayTitle.textContent = `${weatherGet.name}`;
            let temp = Math.round(weatherGet.main.temp - 273.15);
            resultOutput.innerHTML = `
    <div id="result-info">
        <img id="weather-image" src="http://openweathermap.org/img/w/${weatherGet.weather[0].icon}.png" alt="Weather icon">
        <p class="data-output"><span>Temperature:</span> ${temp} °C</p>
    </div>`
        }
        else {
            throw Object.assign(new Error("Error"), {responseError: weatherGet});
        }
    }

    catch(error){
        weatherOutputBox.classList.add("error");
        displayTitle.textContent = "ERROR";
        if (error.responseError) {
                resultOutput.textContent = `${error.responseError.cod} ${error.responseError.message}`;
        }
        else {
            resultOutput.textContent = "Error of weather fetching. Please try again.";
            console.error(error);
        }
    }

    finally{
        spinner.classList.add("hide");
        citySearchButton.removeAttribute("disabled");
        searchCityForm.reset();
    }
}

searchCityForm.addEventListener("submit", getWeather);