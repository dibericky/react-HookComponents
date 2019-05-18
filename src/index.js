import React, { useState } from "react";
import ReactDOM from "react-dom";

import useInputText from "./useInputText";
import useSelect from "./useSelect";

import "./styles.css";

const initialOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" }
];

function App() {
  const [options, setOptions] = useState(initialOptions);

  const [inputVal, InputText] = useInputText("initial");
  const [valSelected, Select] = useSelect(options, "3");

  return (
    <div className="App">
      <h1>{inputVal}</h1>
      <InputText placeholder={"Ciaone"} />
      <br />
      <button
        onClick={() =>
          setOptions([...options, { label: inputVal, value: inputVal }])
        }
      >
        {"Add"}
      </button>
      <h1>{`Selected: ${valSelected}`}</h1>
      <Select />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
