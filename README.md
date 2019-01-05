# react-random-numpad

[![dependencies Status](https://david-dm.org/nutboltu/react-random-numpad/status.svg)](https://david-dm.org/nutboltu/react-random-numpad)  [![Build Status](https://travis-ci.org/nutboltu/react-random-numpad.svg?branch=master)](https://travis-ci.org/nutboltu/react-random-numpad) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/react-random-numpad.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-random-numpad/)

A random genarated number pad for react

![Screenshot](/docs/react-random-numpad.png)

See [Demo and Documentation](https://nutboltu.github.io/react-random-numpad).

## Props

The component takes the following props.

| Prop              | Type       | Default | Description |
|-------------------|------------|-------------|-------------|
| `className`       | string  | - | Additional classnames for the component |
| `supportDecimal`  | boolean | false| Include decimal point support in the numpad|
| `onChange`        | _function_ | - |Callback function to invoke when a number is pressed |

## Installation

```bash
npm install react-random-numpad --save
```

## Usage

```javascript
import RandomNumpad from "react-random-numpad";
import "react-random-numpad/dist/style.min.css";

<RandomNumpad
  supportDecimal={false}
  onChange={() => {}}
  classNames="custom-class"
/>
```

## License

MIT Licensed. Copyright (c) Farhad Yasir 2019.
