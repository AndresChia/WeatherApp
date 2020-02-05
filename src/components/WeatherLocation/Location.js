import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

const Location = (props) => {
    // const ciudad = props.city;
    const { city } = props;
    return (
        <div className="locationCont">
            <h1>
                {/* {ciudad} */}
                {city}
            </h1>
        </div>
    )
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;