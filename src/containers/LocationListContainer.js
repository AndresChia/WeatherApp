import React, { Component } from 'react'
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import LocationList from './../components/LocationList';


import { setCity } from './../actions/index'


export class LocationListContainer extends Component {


    constructor() {
        super();
        this.state = {
        };
    }


    handleSelectionLocation = city => {
        this.props.setCity(city);
    }



    static propTypes = {
        prop: PropTypes,
        setCity: PropTypes.func.isRequired,
        cities: PropTypes.array.isRequired,
    }

    render() {
        const { cities } = this.props;
        return (
            <div>
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
            </div>
        )
    }
}



const mapDispatchToPropsActions = (dispatch) => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);