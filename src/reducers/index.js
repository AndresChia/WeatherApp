import { combineReducers } from 'redux';
import { city } from "./city";
import { createSelector } from 'reselect'
import { cities, getforecastDataFormCities as _getforecastDataFormCities, getWeatherCities as _getWeatherCities } from "./cities";


export default combineReducers({ cities, city });


export const getCity = createSelector(state => state.city, city => city);
export const getforecastDataFormCities = createSelector(state => state.cities, getCity, _getforecastDataFormCities);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);

// export const getforecastDataFormCities = (state) => _getforecastDataFormCities(state);
// export const getCity = (state) => state.city;