
# Weather App

The Weather App is a simple yet powerful web application that allows users to search for current weather information of any city across the globe. The application fetches real-time weather data using the WeatherAPI and presents it in a clean, responsive, and user-friendly interface.

With this app, users can quickly access details like temperature, weather condition, humidity, and "feels like" temperature. The app also dynamically updates its UI with day or night images based on the time of the queried location.


## Features

- City Search: Users can input any city's name to fetch its current weather details.

- Real-Time Weather Data: Fetches accurate and up-to-date weather information via the WeatherAPI.

- Dynamic UI Updates:

- Updates weather condition icons dynamically.

- Displays day or night background images based on the location's current time.

- Responsive Design: Fully responsive layout for seamless use on desktop and mobile devices.


## Technologies Used

**Frontend:**  
- HTML
- CSS
- JavaScript

**API Integration:** 
- WeatherAPI (https://www.weatherapi.com/)

**Deployment:**
- Hosted on Netlify


## Folder Structure

```javascript
WeatherApp/
├── index.html        # Main HTML structure
├── style.css         # CSS for styling the app
├── index.js          # JavaScript for app interactivity and event handling
├── request.js        # API request handling logic
├── img/              # Images for day and night backgrounds
└── README.md         # Documentation
```


## How It Works

**1. Search for a City:**

- Enter the name of a city in the search field.
- The app sends a request to the WeatherAPI to fetch the current weather data for the city.

**2. Weather Details:**

- Once the data is retrieved, the app displays:
- City name, region, and country.
- Current temperature and "feels like" temperature.
- Weather condition (e.g., Clear, Cloudy, Rainy).
- Humidity level.

**3. Dynamic Updates:**

- Displays day or night images based on the time of the searched location.
- Weather condition icons update dynamically for better visual representation.

**4. Error Handling:**
- If the city is not found or there's an issue with the API, the app alerts the user with a "City not found" message.




## API Integration

The app uses the WeatherAPI for fetching weather data. Below is an example of the API request format:


```javascript
Base URL: http://api.weatherapi.com/v1/current.json
Query: ?key=YOUR_API_KEY&q=CITY_NAME&aqi=yes
```
## How to Run the Project Locally

Clone the repository:

```bash
  git clone <repository-url>
```

Navigate to the project directory:

```bash
  cd WeatherApp
```

Open the ``` index.html ```  file in your browser.

To use your own API key, replace the placeholder API key in ```request.js ```:

```bash
  const apikey = 'YOUR_API_KEY';
```




## Deployment

To deploy this project run

The project is deployed on Netlify and can be accessed via the following link: 

Live: https://transcendent-macaron-a59bf0.netlify.app/


## Screenshots

**Home Page (Before Search)**

![Logo](https://github.com/Uditsingh1234/Wheather-App/blob/main/weatherapp-master/output_img/Landing%20Page.png?raw=true)

**Weather Details (After Search)**

![Logo](https://github.com/Uditsingh1234/Wheather-App/blob/main/weatherapp-master/output_img/After%20Search%20Page.png?raw=true)


## Future Enhancements

- **Multiple Language Support:** Provide weather details in different languages.

- **7-Day Forecast:** Extend functionality to display weekly weather forecasts.

- **Geolocation:** Automatically fetch weather data for the user's current location.

- **Improved UI/UX:** Add animations and a more visually engaging interface.





