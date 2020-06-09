import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function Room() {
    //const [isLit, setLit] = React.useState(false);
    const [isLit, setLit] = React.useState(true);
    //const brightness = isLit ? "lit" : "dark";
    const [isTemp, setTemp] = React.useState(22);
    
    return (
      <div className={`room ${isLit ? "lit" : "dark"}`}>
        The room is {isLit ? "lit" : "dark"}
        <br />
        The temperature is {isTemp} C
        <br />
        <button onClick={() => setLit(!isLit)}>Toggle light</button>
        <br />
        <button onClick={() => setLit(true)}>Turn on lights</button>
        <br />
        <button onClick={() => setLit(false)}>Turn off lights</button>
        <br />
        <button onClick={() => setTemp(isTemp + 1)}>+</button>
        <button onClick={() => setTemp(isTemp - 1)}>-</button>
      </div>
    );
  }
export default Room;
