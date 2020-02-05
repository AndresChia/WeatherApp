import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import { transformWeather } from "./../../services/weatherTransform.services";
import { getUrlWeatherByCity } from "../../services/weatherApi.services";

class WeatherLocation extends Component {

   constructor(props) {
      super(props);
      const { city } = props;
      this.state = {
         city,
         data: null,
      };
   }

   componentDidMount() {
      this.handleUpdateClick();
   }


   handleUpdateClick = () => {
      fetch(getUrlWeatherByCity(this.state.city)).then(resolve => (resolve.json())).then((response) => {
         this.setState(transformWeather(response))
      });
   }

   render() {
      const { onWeatherLocationClick } = this.props;
      const { city, data } = this.state;
      return (
         <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city} />
            {data ? <WeatherData data={data} />
               : <CircularProgress size={60} thickness={7} />}
         </div>
      )
   }

   // componentDidUpdate() {

   // }

}


WeatherLocation.propTypes = {
   city: PropTypes.string,
   onWeatherLocationClick: PropTypes.func,

}

export default WeatherLocation;
