import React from 'react';
import { connect } from 'react-redux';

import { checkStateIsValid, isNotEmpty } from './utils/validations';

import { Button, Input } from './components';
// import flight from './assets/flight.svg';
import './App.scss';

const validateSearch = (data) => {
  if(!data || !data.flightNumber) {
    return; 
  }
  const valid = checkStateIsValid(
    {'flightNumber': data.flightNumber.value},
    [
        {key: 'flightNumber', validations: [isNotEmpty]},
    ]
  );
  return valid;
};

function App({ data, updateFlightNumber, reportFlightNumberError}) {
  const onSubmit = () => {
    const valid = validateSearch(data);
    if (valid && valid.length > 0) {
      // updateErrorInFlightSearch();
      valid.forEach((fieldReport) => {
        switch(fieldReport.key){
          case 'flightNumber': {
            reportFlightNumberError(fieldReport.validation);
            break;
          }
          default: 
            break;
        }
      });
    } else {
      // fetch details and update the result in state
      console.log('make the api call');
    }
  };

  return (
    <div className="App">
      <header className='header'>Find your flights here...</header>
      <img
        className='fit-picture'
        // src={flight}
        alt='flight' />
      <form className='formContainer' onSubmit={
        (e) => {
          e.preventDefault();
          onSubmit();
        }
      }>
        <Input
          inputName="Flight Number"
          onChange={(e) => { updateFlightNumber(e.target.value); }}
          classNames='flightNumber'
          errors={data.flightNumber.errors}
        />
        <Button buttonName='SEARCH' classNames='searchButton' onClick={onSubmit} />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFlightNumber: (flightNumber) => {
      // dispatch(flightSearchActions.changeFightNumber(flightNumber))
    },
    reportFlightNumberError: (errors) => {
      // dispatch(flightSearchActions.updateFlightNumberValidationError(errors));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.flightDetails.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
