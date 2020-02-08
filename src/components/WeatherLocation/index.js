import React from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";


// const handleUpdateClick = () => {
//    fetch(getUrlWeatherByCity(this.state.city)).then(resolve => (resolve.json())).then((response) => {
//       this.setState(transformWeather(response))
//    });
// }


const WeatherLocation = ({ onWeatherLocationClick, city, data }) => {
   debugger
   return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
         <Location city={city} />
         {data ? <WeatherData data={data} />
            : <CircularProgress size={60} thickness={7} />}
      </div>
   )
}




WeatherLocation.propTypes = {
   city: PropTypes.string,
   onWeatherLocationClick: PropTypes.func,
   data: PropTypes.shape(
      {
         temperature: PropTypes.number.isRequired,
         weatherState: PropTypes.string.isRequired,
         humidity: PropTypes.number.isRequired,
         wind: PropTypes.string.isRequired,
      }
   ),
}

export default WeatherLocation;
