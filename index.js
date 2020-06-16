function Modulo11( base, size) {
    this.base = base
    this.size = size
}

function sumDigits (modulo11, value) {
    var  mult = modulo11.base
    var sum = 0
    var i
    for ( i = value.length-1; i >= 0; i--) {
        sum += (mult*value[i])
        if (mult == modulo11.size) mult = modulo11.base; else mult++
    }
    return sum
}

Modulo11.prototype.checkDigit = function (value) {
    var sum = sumDigits(this, value)
    var remainder = (sum % 11)
    var result =  remainder < 2 ? 0 : 11 - remainder
    return result
}

module.exports = Modulo11
