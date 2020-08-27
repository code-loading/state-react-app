import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//https://codesandbox.io/s/cranky-leftpad-cnnry?file=/src/index.css:0-165

function Room() {
  //const [isLit, setLit] = React.useState(false);
  const [isLit, setLit] = React.useState(true);
  //const brightness = isLit ? "lit" : "dark";
  const [isTemp, setTemp] = React.useState(true);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>
      <br />
      <button onClick={() => setLit(true)}>Turn on lights</button>
      <br />
      <button onClick={() => setLit(false)}>Turn off lights</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
