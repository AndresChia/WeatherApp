const api_key = "3b6d6f47cb809536a6e30ff113c69cf7";
const url_base_weather = "api.openweathermap.org/data/2.5/weather";
const url_base_forecast = "api.openweathermap.org/data/2.5/forecast";


export const getUrlWeatherByCity = city => {
   return `https://${url_base_weather}?q=${city}&APPID=${api_key}`
}


export const getUrlForecastByCity = city => {
   return `https://${url_base_forecast}?q=${city}&APPID=${api_key}`
}


