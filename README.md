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
