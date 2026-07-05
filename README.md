## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i @fabioalmeida/modulo11
```

## Usage

CPF:

```js
var Modulo11 = require('@fabioalmeida/modulo11')
var modulo11 = new Modulo11(2,11)
var cpfDigit1 = modulo11.checkDigit([6,0,1,6,1,4,7,9,0])
var cpfDigit2 = modulo11.checkDigit([6,0,1,6,1,4,7,9,0, cpfDigit1])
```

CNPJ:

```js
var Modulo11 = require('@fabioalmeida/modulo11')
var modulo11 = new Modulo11(2,9)
var cnpjDigit1 = modulo11.checkDigit([1,2,3,4,5,6,7,8,0,0,0,1])
var cnpjDigit2 = modulo11.checkDigit([1,2,3,4,5,6,7,8,0,0,0,1, cnpjDigit1])
```

CNPJ alfanumerico:

```js
var Modulo11 = require('@fabioalmeida/modulo11')
var modulo11 = new Modulo11(2,9)
var cnpjBase = '12ABC34501DE'
var cnpjDigit1 = modulo11.checkDigit(cnpjBase)
var cnpjDigit2 = modulo11.checkDigit(cnpjBase + cnpjDigit1)
```

Para CNPJ alfanumerico, letras sao calculadas pelo valor do caractere em caixa alta
menos o valor do caractere `0`, seguindo a regra `charCodeAt(0) - '0'.charCodeAt(0)`.
