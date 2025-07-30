document.addEventListener("DOMContentLoaded", () => {


    let baseUrl = 'https://api.weatherapi.com/v1/current.json?key=486d67f155704c51a8a225058252407&q=';
    let forecastUrl = 'https://api.weatherapi.com/v1/forecast.json?key=486d67f155704c51a8a225058252407&q=';

    let cityInput = document.querySelector('#cityInput');
    let getWeatherBtn = document.querySelector('#getWeather');
    let weatherResult = document.querySelector('#weatherResult');
    let forecastContainer = document.querySelector('#forecastContainer');

    // Fetch weather on button click
    getWeatherBtn.addEventListener('click', () => {
        let city = cityInput.value.trim();
        if (city !== "") {
            getWeather(city);
            getForecast(city);
        }
    });

    // Fetch weather on Enter key
    cityInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            getWeatherBtn.click();
        }
    });

    // Fetch current weather
    async function getWeather(location) {
        try {
            weatherResult.innerHTML = `<p class="loading">Loading weather for <strong>${location}</strong>...</p>`;
            let response = await fetch(`${baseUrl}${location}`);
            if (!response.ok) throw new Error("City not found");

            let data = await response.json();
            let iconUrl = `https:${data.current.condition.icon}`;

            weatherResult.innerHTML = `
            <div class="weather-info">
                <h3>${data.location.name}, ${data.location.country}</h3>
                <img src="${iconUrl}" alt="${data.current.condition.text}" class="weather-icon">
                <p class="temp">${data.current.temp_c}°C</p>
                <p class="desc">${data.current.condition.text}</p>
            </div>
        `;
        } catch (error) {
            weatherResult.innerHTML = `<p class="error">❌ ${error.message}</p>`;
        }
    }

    // Fetch 5-day forecast
    async function getForecast(location) {
        try {
            let response = await fetch(`${forecastUrl}${location}&days=5`);
            if (!response.ok) throw new Error("Forecast data not available");

            let data = await response.json();
            let forecast = data.forecast.forecastday;

            forecastContainer.innerHTML = "";

            forecast.forEach(day => {
                let dayName = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });
                let iconUrl = `https:${day.day.condition.icon}`;
                let max = day.day.maxtemp_c;
                let min = day.day.mintemp_c;

                let forecastCard = document.createElement('div');
                forecastCard.classList.add('forecast-day');
                forecastCard.innerHTML = `
                <h4>${dayName}</h4>
                <img src="${iconUrl}" alt="${day.day.condition.text}">
                <p>${max}°</p>/<p>${min}°</p>
            `;
                forecastContainer.appendChild(forecastCard);
            });

        } catch (error) {
            forecastContainer.innerHTML = `<p class="error">❌ ${error.message}</p>`;
        }
    }

    // Geolocation Weather on Page Load
    window.addEventListener('load', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            console.log("Geolocation is not supported.");
        }
    });

    function successCallback(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByCoords(lat, lon);
    }

    function errorCallback(error) {
        console.error("Geolocation error:", error.message);
    }

    // Weather by Coordinates
    async function fetchWeatherByCoords(lat, lon) {
        try {
            const url = `${forecastUrl}${lat},${lon}&days=5`;
            const response = await fetch(url);
            const data = await response.json();

            // Extract city name and display weather
            const locationName = data.location.name;
            getWeather(locationName);
            getForecast(locationName);
        } catch (error) {
            console.error("Failed to fetch weather:", error);
        }
    }
});
