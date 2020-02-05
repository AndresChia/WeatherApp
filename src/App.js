import React, { Component } from 'react';

import './App.css';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';

import LocationListContainer  from './containers/LocationListContainer';

const cities = ['Buenos aires,ar', 'London,uk', 'Bogota,col', 'barcelona,es']



export default class App extends Component {


  constructor() {
    super();
    this.state = {
      city: null
    };
  }


  handleSelectionLocation = city => {
    this.setState({ city })
    this.props.setCity(city);
  }



  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit">
                weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationListContainer>
          </Col>
          <Col xs={12} md={6} className={'ColumnaForecastExtended'}>
            <Paper zdepth={4}>
              <div className="details">
                {city ? <ForecastExtended city={city}></ForecastExtended> : <h1>Seleccione una ciudad</h1>}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}




