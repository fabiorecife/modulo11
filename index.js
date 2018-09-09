function Modulo11( base, size) {
    this.base = base
    this.size = size
}

function sumDigits (modulo11, value) {
    let  mult = modulo11.base
    let sum = 0
    for (let i = value.length-1; i >= 0; i--) {
        sum += (mult*value[i])
        if (mult == modulo11.size) mult = modulo11.base; else mult++
    }
    return sum
}

Modulo11.prototype.checkDigit = function (value) {
    let sum = sumDigits(this, value)
    let remainder = (sum % 11)
    let result =  remainder < 2 ? 0 : 11 - remainder
    return result
}

module.exports = Modulo11
