const searchForm = document.querySelector('.search-loaction');
const cityValue = document.querySelector('.search-loaction input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

// Function to update weather details in the UI
const updateWeatherApp = (data) => {
    console.log(data);

    const { location, current } = data;
    const { name, region, country } = location;
    const { temp_c, feelslike_c, condition, humidity, is_day } = current;

    // Update city name and region
    cityName.textContent = `${name}, ${region}, ${country}`;

    // Update weather details
    cardBody.innerHTML = `
    <div class="card-mid row">
        <div class="col-8 text-center temp">
            <span>${temp_c}&deg;C</span>
        </div>
        <div class="col-4 condition-temp">
            <p class="condition">${condition.text}</p>
            <p class="high">${temp_c}&deg;C</p>
            <p class="low">${feelslike_c}&deg;C</p>
        </div>
    </div>
    <div class="icon-container card shadow mx-auto">
        <img src="https:${condition.icon}" alt="${condition.text}" />
    </div>
    <div class="card-bottom px-5 py-4 row">
        <div class="col text-center">
            <p>${feelslike_c}&deg;C</p>
            <span>Feels Like</span>
        </div>
        <div class="col text-center">
            <p>${humidity}%</p>
            <span>Humidity</span>
        </div>
    </div>
    `;

    // Update background image for day/night
    timeImage.setAttribute('src', is_day ? 'img/day_image.svg' : 'img/night_image.svg');

    // Show the card
    cardInfo.classList.remove('d-none');
};

// Event listener for search form submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const citySearched = cityValue.value.trim();
    searchForm.reset();

    requestCity(citySearched)
        .then((data) => {
            if (data) {
                updateWeatherApp(data);
            } else {
                alert('City not found. Please try again!');
            }
        })
        .catch((error) => console.error(error));
});
