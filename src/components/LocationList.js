import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from "prop-types";
import './styles.css';



const LocationList = ({ cities, onSelectedLocation }) => {


    const handleWeatherLocationClick = (city) => {
        onSelectedLocation(city);
    }


    const strToComponents = cities => {
        return cities.map((city) => (
            <WeatherLocation
                key={city.key}
                city={city.name}
                data={city.data}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} />
        )
        )
    }



    return (
        <div className="locationListCont">
            {strToComponents(cities)}
        </div>
    )
}

LocationList.propTypes = {

    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;