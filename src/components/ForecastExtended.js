import React  from 'react';
import PropTypes from "prop-types";
import styles from './styles.module.css';
import ForecastItem from './ForecastItem/index'
import CircularProgress from '@material-ui/core/CircularProgress';



const renderForecastItemsDays = (forecastData) => {
    return forecastData.map(({ weekDay, hour, data }) => <ForecastItem key={`${weekDay}${hour}`} weekDay={weekDay} hour={hour} data={data}></ForecastItem>)
}

const renderProgress = () => {
    return <CircularProgress size={60} thickness={7}  />
}


const ForecastExtended = ({city,forecastData})=>{
         return (
            <div >
                <h2 className={styles.forecastTitle}>
                    {`Pronostico Extendido ${city}`}
                </h2>
                {forecastData ? renderForecastItemsDays(forecastData) : renderProgress()}
            </div>
        )
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
}

export default ForecastExtended;