# map-struct [![Build Status](https://travis-ci.org/bendrucker/map-struct.svg?branch=master)](https://travis-ci.org/bendrucker/map-struct)

> Map values in an observ-struct


## Install

```
$ npm install --save map-struct
```


## Usage

```js
var map = require('map-struct')
var Struct = require('observ-struct')

var numbers = Struct({
  a: 1,
  b: 2
})

map(numbers, function (value, key, struct) {
  return value * 2
})
//=> {a: 2, b: 4}
```

## API

#### `map(struct, fn)` -> `object`

##### struct

*Required*  
Type: `function`

An [observ-struct](https://github.com/raynos/observ-struct).

##### fn

Type: `function`  
Arguments: `value, key, struct`

A function to call with the value/key pairs and the original object. Each return value is stored at the key in the new object.


## License

MIT © [Ben Drucker](http://bendrucker.me)
