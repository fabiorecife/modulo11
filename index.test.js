const Modulo11 = require('./')

test('check digit base 2 size 9', () => {
    let modulo11 = new Modulo11(2,9)
    expect(modulo11.checkDigit([1])).toBe(9)
    expect(modulo11.checkDigit([1,1])).toBe(6)
    expect(modulo11.checkDigit([1,1,1,0])).toBe(0)
    expect(modulo11.checkDigit([1,1,1])).toBe(2)
})

test('check digit base 2 size 11 , all 0', () => {
    let modulo11 = new Modulo11(2,11)
    expect(modulo11.checkDigit([0,0,0,0,0,0,0,0,0,0,0])).toBe(0)
})

test('check digit', () => {
    let modulo11 = new Modulo11(2,11)
    expect(modulo11.checkDigit([9,1,8,7,6,4,4,4,7])).toBe(9)
    expect(modulo11.checkDigit([9,1,8,7,6,1,7,8,9,0,1])).toBe(5)
    expect(modulo11.checkDigit([6,0,1,6,1,4,7,9,0])).toBe(7)
    expect(modulo11.checkDigit([6,0,1,6,1,4,7,9,0,7])).toBe(3)
    expect(modulo11.checkDigit([6,5,1,5,9,4,4,4,7])).toBe(0)
})
