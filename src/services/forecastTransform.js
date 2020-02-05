import moment from 'moment'
import 'moment/locale/es'
import {transformWeatherOnlyData} from './weatherTransform.services'

const transformForecast = (data) => {
    let dataFilter = data.list.filter(element => moment.unix(element.dt).utc().hour() === 6 ||
        moment.unix(element.dt).utc().hour() === 12 ||
        moment.unix(element.dt).utc().hour() === 18).map(element =>
            (
                {
                    weekDay: moment.unix(element.dt).format('ddd'),
                    hour: moment.unix(element.dt).hour(),
                    data: transformWeatherOnlyData(element)

                }
            )
        )

    return dataFilter;
}

export default transformForecast;