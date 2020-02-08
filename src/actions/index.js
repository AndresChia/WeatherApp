import { getUrlForecastByCity } from '../services/weatherApi.services';
import transformForecast from '../services/forecastTransform';
import { transformWeather } from "../services/weatherTransform.services";
import { getUrlWeatherByCity } from "../services/weatherApi.services";

export const SET_CITY = 'SET_CITY';
export const setCity = (value) => ({ type: SET_CITY, value });

export const SET_FORECAST_DATA = "SET_FORECAST_DATA"
export const setForecastData = (value) => ({ type: SET_FORECAST_DATA, value });


export const GET_WEATHER_CITY = "GET_WEATHER_CITY"
export const getWeatherCity = (value) => ({ type: GET_WEATHER_CITY, value });


export const SET_WEATHER_CITY = "SET_WEATHER_CITY"
export const setWeatherCity = (value) => ({ type: SET_WEATHER_CITY, value });


export const setSelectedCity = (value) => {
    return (dispatch, getState) => {
        dispatch(setCity(value));
        const state = getState();
        const date = state.cities[value] && state.cities[value].forecastDataDate;
        const now = new Date();

        if (!date || (now - date) > 1 * 60 * 1000) {
            return fetch(getUrlForecastByCity(value)).then(resolve => (resolve.json())).then((response) => {
                const forecastData = transformForecast(response);
                dispatch(setForecastData({ city: value, forecastData }));
            });

        }

        
        return;





    };
}

export const setWeather = (value) => {
    return dispatch => {
        value.forEach(city => {
            dispatch(getWeatherCity(city));
            fetch(getUrlWeatherByCity(city)).then(resolve => (resolve.json())).then((response) => {
                const weather = transformWeather(response)
                dispatch(setWeatherCity({ city, weather }));
            });
        })
    }
}




