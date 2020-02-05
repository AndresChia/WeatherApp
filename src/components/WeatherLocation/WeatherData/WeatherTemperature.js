import React from 'react';
import { CLOUD,WINDY,SUN,RAIN,SNOW,FOG,CLOUDY,THUNDER,DRIZZEL } from "../../../Constants/weather";
import Weathericons from 'react-weathericons';
import  PropTypes  from "prop-types";
import './styles.css';

const icons = {
     [CLOUD] : "cloud",
     [CLOUDY] : "cloudy",
     [SUN] : "day-sunny",
     [RAIN] : "rain",
     [SNOW] : "snow",
     [WINDY] : "windy",
     [FOG] : "day-fog",
     [THUNDER] : "day-thunderstorm",
     [DRIZZEL] : "day-showers",
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    const sizeIcon="4x";
    if (!icon) {
        return <Weathericons className="wicon" name="day-sunny" size={sizeIcon}></Weathericons>;
    }
    return <Weathericons className="wicon" name={icon} size={sizeIcon}></Weathericons>;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType"> {`℃`} </span>
    </div>
);

WeatherTemperature.propTypes={

    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;
