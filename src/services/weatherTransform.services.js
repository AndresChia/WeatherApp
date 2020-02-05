import { THUNDER, DRIZZEL, SUN, SNOW, CLOUD } from "../Constants/weather";


export const getWeatherState = weather_data => {
    const { id } = weather_data;
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZEL;
    } else if (id < 500) {
        return SUN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SNOW;
    } else {
        return CLOUD;
    }
}



export const transformWeather = ({ wind: { speed }, name, main: { humidity, temp }, weather: [dato] }) => {
    const data = {
        city: name,
        data: {
            temperature: Math.round(temp - 273.15),
            weatherState: getWeatherState(dato),
            humidity: humidity,
            wind: `${speed} m/s`
        }
    }
    return data;
}


export const transformWeatherOnlyData = ({ wind: { speed }, name, main: { humidity, temp }, weather: [dato] }) => {
    const data = {
        temperature: Math.round(temp - 273.15),
        weatherState: getWeatherState(dato),
        humidity: humidity,
        wind: `${speed} m/s`
    }
    return data;
}