import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.css';
import ForecastItem from './ForecastItem/index'
import { getUrlForecastByCity } from '../services/weatherApi.services';
import transformForecast from '../services/forecastTransform';
import CircularProgress from '@material-ui/core/CircularProgress';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo',

// ]

// const data = {

//     temperature: 5,
//     weatherState: "",
//     humidity: 7,
//     wind: "",
// }


class ForecastExtended extends Component {


    constructor() {
        super();
        this.state = {
            forecastData: null

        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }


    updateCity(city) {
        fetch(getUrlForecastByCity(city)).then(resolve => (resolve.json())).then((response) => {
            this.setState({
                forecastData: transformForecast(response)
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city)
        }
    }
    

    renderForecastItemsDays(forecastData) {
        return forecastData.map(({ weekDay, hour, data }) => <ForecastItem key={`${weekDay}${hour}`} weekDay={weekDay} hour={hour} data={data}></ForecastItem>)
    }

    renderProgress = () => {
        return <CircularProgress size={60} thickness={7}  />
    }



    render() {

        const { city } = this.props;
        const { forecastData } = this.state;


        return (
            <div >
                <h2 className={styles.forecastTitle}>
                    {`Pronostico Extendido ${city}`}
                </h2>

                {forecastData ? this.renderForecastItemsDays(forecastData) : this.renderProgress()}

            </div>
        )
    }


}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;