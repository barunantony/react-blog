import React, { useState } from 'react';
import logo from './logo.svg';
import Button from './components/button/Button';

import './App.scss';


function App() {

  // Declare a new state variable, which we'll call "speed"
  const [speed, setSpeed] = useState(50);

  const increaseLogoAnimationSpeed = () => {
    if (speed <= 9) {
      setSpeed(1);
    } else {
      setSpeed(speed - 5);
    }
    const logo = document.getElementsByClassName('App-logo')[0];
    logo.style.animationDuration = (speed)+'s';
  };
  
  const decreaseLogoAnimationSpeed = () => {
    setSpeed(speed + 5);
    const logo = document.getElementsByClassName('App-logo')[0];
    logo.style.animationDuration = (speed)+'s';
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          <div>{speed}</div>
          <Button buttonName='increase speed' onClick={increaseLogoAnimationSpeed}/>
          <Button buttonName='decrease speed' onClick={decreaseLogoAnimationSpeed}/>
        </div>
      </header>
    </div>
  );
}

export default App;
