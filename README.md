## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @fabioalmeida/modulo11
```

## Usage

```js
var Modulo11 = require('@fabioalmeida/modulo11')
var modulo11 = new Modulo11(2,11)
var cpfDigit1 = modulo11.checkDigit([6,0,1,6,1,4,7,9,0])
var cpfDigit2 = modulo11.checkDigit([6,0,1,6,1,4,7,9,0, cpfDigit1])
```
