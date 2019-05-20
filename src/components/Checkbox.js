import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Checkbox({ enabled, onChange, ...others }) {
  const [checked, setChecked] = useState(enabled);

  return (
    <input
      type="checkbox"
      {...others}
      onChange={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
      checked={checked}
    />
  );
}

Checkbox.propTypes = {
  enabled: PropTypes.bool
};
Checkbox.defaultProps = {
  enabled: false
};
