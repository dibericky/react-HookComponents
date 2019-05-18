import React, { useState, useCallback, useEffect } from "react";

export default function useSelect(options, defaultValue) {
  const [selected, setSelected] = useState(defaultValue);
  const [_options, setOptions] = useState(options);

  useEffect(() => {
    // do not recreate Select component if options are strictEqual
    const areDifferent =
      options.length !== _options.length ||
      options.some((opt, index) => {
        return (
          opt.value !== _options[index].value ||
          opt.label !== _options[index].label
        );
      });
    if (areDifferent) {
      setOptions(options);
    }
  }, [options, _options]);

  const select = useCallback(
    props => (
      <Select
        {...props}
        defaultValue={defaultValue}
        options={_options}
        onChange={setSelected}
      />
    ),
    [_options, defaultValue]
  );
  return [selected, select];
}

function Select({ options, onChange, defaultValue, ...others }) {
  const [selected, setSelected] = useState(defaultValue);

  /**
   * It's done in order to reset parent 'selected' to defaultValue when
   * this component it's recreated (on options change).
   */
  useEffect(() => onChange(defaultValue), [defaultValue, onChange]);
  /** */

  const onSelectedChange = e => {
    const { value } = e.target;
    setSelected(value);
    return onChange(value);
  };

  return (
    <select {...others} onChange={onSelectedChange} defaultValue={selected}>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
