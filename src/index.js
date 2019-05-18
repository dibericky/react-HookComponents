import React from "react";
import ReactDOM from "react-dom";

import useInputText from "./useInputText";

import "./styles.css";

function App() {
  const [inputVal, InputText] = useInputText("initial");

  return (
    <div className="App">
      <h1>{inputVal}</h1>
      <InputText placeholder={"Ciaone"} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
