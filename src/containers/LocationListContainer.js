import React, { Component } from 'react'
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import LocationList from './../components/LocationList';


import {getWeatherCities,getCity} from './../reducers'
import * as actions from './../actions/index'

import { bindActionCreators } from "redux";

export class LocationListContainer extends Component {

    static propTypes = {
        setSelectedCity: PropTypes.func.isRequired,
        setWeather: PropTypes.func.isRequired,
        cities: PropTypes.array.isRequired,
        citiesWeather: PropTypes.array.isRequired,
        city: PropTypes.string.isRequired,
    }

    componentDidMount() {
        const { cities, city, setWeather, setSelectedCity } = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }


    render() {
        const { citiesWeather } = this.props;
        return (
            <div>
                <LocationList cities={citiesWeather} onSelectedLocation={this.handleSelectionLocation}></LocationList>
            </div>
        )
    }
}




const mapDispatchToPropsActions = (dispatch) => bindActionCreators(actions,dispatch)


// const mapDispatchToPropsActions = (dispatch) => ({
//     setCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities))
// });

const mapStateToProps = (state) => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)

})

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);