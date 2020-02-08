import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForecastExtended from "./../components/ForecastExtended";
import { connect } from "react-redux";
import { getforecastDataFormCities,getCity } from './../reducers'

export class ForecastExtendedContainer extends Component {
    static propTypes = {
        // city: PropTypes.string.isRequired,
        forecastData: PropTypes.array,
    }

    render() {
        const { city, forecastData } = this.props;
        return (
            city && <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        )
    }
}

//propiedad interna en el state 
const mapStateToProps = (state) => ({ city: getCity(state) , forecastData: getforecastDataFormCities(state) });
export default connect(mapStateToProps, null)(ForecastExtendedContainer)