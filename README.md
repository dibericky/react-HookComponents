# react-HookComponent

## InputText

```
  const [inputVal, InputText] = useInputText("initial Value");

  //InputText is the component.
  <InputText placeholder={'foobar'} />

  // inputVal is the current value inside your inputText
  <span>Current value: {inputVal}</span>
```

## Select

```
    const options = [
      {label: 'Foo', value: 'foo'},
      {label: 'Bar', value: 'bar'}
    ]

    // the second argument of useSelect is the defaultValue
    const [valSelected, Select] = useSelect(options, "foo");

    // Select is the component.
    <Select />

    // valSelected is the current value selected
    <span>'Selected :' {valSelected}</span>
```

## Master-Slave Basic

```
  const [masterToggle, slaveToggle] = useMasterSlave({
    propSlave: "disabled"
  });

  <Checkbox {...masterToggle} />
  <input type="text" {...slaveToggle} />
```

## Master-Slave with transform and default value

```
//The first argument is the configuration of the Master
//The second argument is the transform function applied to the onChange function of the master

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

  <input type="text" {...masterReverse} />  // ABCD
  <br />
  <input type="text" {...slaveReverse} />  // DCBA, with defaultValue === Default

```
