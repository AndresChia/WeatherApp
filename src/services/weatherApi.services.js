const api_key = "7a3ab1cba0a70416e4a44df9d9b205c2";
const url_base_weather = "api.openweathermap.org/data/2.5/weather";
const url_base_forecast = "api.openweathermap.org/data/2.5/forecast";


export const getUrlWeatherByCity = city => {
   return `https://${url_base_weather}?q=${city}&APPID=${api_key}`
}


export const getUrlForecastByCity = city => {
   return `https://${url_base_forecast}?q=${city}&APPID=${api_key}`
}


