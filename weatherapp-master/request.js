const apikey = 'YOUR_API_KEY';

const requestCity = async (city) => {
    const baseURL = 'https://api.weatherapi.com/v1/current.json';
    const query = `?key=${apikey}&q=${city}&aqi=yes`;

    try {
        // Make fetch call (promise call)
        const response = await fetch(baseURL + query);
        // Handle response
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse and return JSON data
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching city weather:', error);
    }
};
