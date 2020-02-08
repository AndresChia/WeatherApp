import React, { Component } from 'react';

import './App.css';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import LocationListContainer from './containers/LocationListContainer';

const cities = ['Buenos aires,ar', 'London,uk', 'Bogota,col', 'barcelona,es']



class App extends Component {

constructor(){
  super();
  this.state={city:null}
}


  render() {
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
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6} className={'ColumnaForecastExtended'}>
            <Paper zdepth={4}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

