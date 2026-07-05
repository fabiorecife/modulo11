const test = require('node:test')
const assert = require('node:assert/strict')
const Modulo11 = require('./')

test('check digit base 2 size 9', () => {
    let modulo11 = new Modulo11(2,9)
    assert.equal(modulo11.checkDigit([1]), 9)
    assert.equal(modulo11.checkDigit([1,1]), 6)
    assert.equal(modulo11.checkDigit([1,1,1,0]), 0)
    assert.equal(modulo11.checkDigit([1,1,1]), 2)
})

test('check digit base 2 size 11 , all 0', () => {
    let modulo11 = new Modulo11(2,11)
    assert.equal(modulo11.checkDigit([0,0,0,0,0,0,0,0,0,0,0]), 0)
})

test('check digit', () => {
    let modulo11 = new Modulo11(2,11)
    assert.equal(modulo11.checkDigit([9,1,8,7,6,4,4,4,7]), 9)
    assert.equal(modulo11.checkDigit([9,1,8,7,6,1,7,8,9,0,1]), 5)
    assert.equal(modulo11.checkDigit([6,0,1,6,1,4,7,9,0]), 7)
    assert.equal(modulo11.checkDigit([6,0,1,6,1,4,7,9,0,7]), 3)
    assert.equal(modulo11.checkDigit([6,5,1,5,9,4,4,4,7]), 0)
})

test('check digit cnpj with letters', () => {
    let modulo11 = new Modulo11(2,9)

    let cnpjBase = '12ABC34501DE'
    let digit1 = modulo11.checkDigit(cnpjBase)
    let digit2 = modulo11.checkDigit(cnpjBase + digit1)

    assert.equal(digit1, 3)
    assert.equal(digit2, 5)
})

test('check digit cnpj with lowercase letters', () => {
    let modulo11 = new Modulo11(2,9)

    let cnpjBase = '12abc34501de'
    let digit1 = modulo11.checkDigit(cnpjBase)
    let digit2 = modulo11.checkDigit(cnpjBase + digit1)

    assert.equal(digit1, 3)
    assert.equal(digit2, 5)
})
