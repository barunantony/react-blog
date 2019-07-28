import React from 'react';
import { connect } from 'react-redux';

import * as flightSearchActions from './redux/actions/flightSearchActions';
import { Button, Input } from './components';

import flight from './assets/flight.svg';
import './App.scss';


function App({ data, updateFlightNumber}) {

  return (
    <div className="App">
      <header className='header'>Find your flights here...</header>
      <img
        className='fit-picture'
        src={flight}
        alt='flight' />
      <div className='formContainer'>
        <Input inputName="Flight Number" onChange={(e) => { updateFlightNumber(e.target.value); }} classNames='flightNumber' />
        <Button buttonName='SEARCH' classNames='searchButton' onClick={() => { console.log('hi'); }} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFlightNumber: (flightNumber) => {
      dispatch(flightSearchActions.changeFightNumber(flightNumber))
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
