import { useState, useCallback, useEffect } from "react";

export default function useMasterSlave(
  { propSlave, defaultProp, defaultValue },
  transformMaster
) {
  const [slave, setSlave] = useState();
  const [defaultSlaveValue, setDefaultSlaveValue] = useState({});

  const onChange = useCallback(
    val => setSlave(transformMaster ? transformMaster(val) : val),
    [transformMaster]
  );

  useEffect(() => {
    if (slave === undefined && defaultProp) {
      setDefaultSlaveValue({
        [defaultProp]: defaultValue
      });
    }
  }, [slave, defaultValue, defaultProp]);
  return [
    { onChange },
    {
      ...(slave !== undefined ? { [propSlave]: slave } : {}),
      ...defaultSlaveValue
    }
  ];
}
