import React, { useState, useCallback } from "react";

export default function useInputText(initialValue) {
  const [val, setVal] = useState(initialValue);
  const inputText = useCallback(
    props => (
      <InputText {...props} initialValue={initialValue} onChange={setVal} />
    ),
    [initialValue]
  );

  return [val, inputText];
}

function InputText({ initialValue, onChange, ...others }) {
  const [val, setVal] = useState(initialValue);
  const onValueChange = e => {
    const { value } = e.target;
    setVal(value);
    return onChange(value);
  };
  return (
    <input type={"text"} {...others} value={val} onChange={onValueChange} />
  );
}
