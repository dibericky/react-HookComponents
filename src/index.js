import React, { useState } from "react";
import ReactDOM from "react-dom";

import Checkbox from "./components/Checkbox";

import useInputText from "./useInputText";
import useSelect from "./useSelect";

import "./styles.css";
import useMasterSlave from "./useMasterSlave";

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

  const [masterToggle, slaveToggle] = useMasterSlave({
    propSlave: "disabled"
  });

  const [masterReverse, slaveReverse] = useMasterSlave(
    {
      propSlave: "value",
      defaultProp: "defaultValue",
      defaultValue: "Default"
    },
    e =>
      e.target.value
        .split("")
        .reverse()
        .join("")
  );

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
      <br />
      <h2>Master-Slave with checkbox</h2>
      <Checkbox {...masterToggle} />
      <input type="text" {...slaveToggle} />
      <br />
      <h2>Master-Slave with 2 Input Text</h2>
      <input type="text" {...masterReverse} />
      <br />
      <input type="text" {...slaveReverse} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
