const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherInfo = document.querySelector('.weather-info');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value;
  const api_key = "37aff644b8a8be7edee4c2e557e77e0e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather, wind } = data;
      weatherInfo.style.display = 'block';
      weatherInfo.querySelector('h2').textContent = name;
      weatherInfo.querySelector('p:nth-child(1) span').textContent = `${main.temp}°C`;
      weatherInfo.querySelector('p:nth-child(2) span').textContent = weather[0].description;
      weatherInfo.querySelector('p:nth-child(3) span').textContent = `${main.humidity}%`;
      weatherInfo.querySelector('p:nth-child(4) span').textContent = `${wind.speed} m/s`;
    })
    .catch(error => console.log(error));
});
