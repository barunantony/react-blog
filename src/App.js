import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import Button from './components/button/Button';
import * as appLogoActions from './redux/actions/appLogoActions';

import './App.scss';


function App({ appLogoSpeed, decreaseSpeed, increaseSpeed }) {

  const increaseLogoAnimationSpeed = () => {
    increaseSpeed();
  };
  
  const decreaseLogoAnimationSpeed = () => {
    decreaseSpeed();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={ {animationDuration: appLogoSpeed.speed+'s'} } />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='buttonContainer'>
          <div>{appLogoSpeed.speed}</div>
          <Button buttonName='increase speed' onClick={increaseLogoAnimationSpeed}/>
          <Button buttonName='decrease speed' onClick={decreaseLogoAnimationSpeed}/>
        </div>
      </header>
    </div>
  );
}

export default connect(
  (state) => state,
  { ...appLogoActions }
)(App);
