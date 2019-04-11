const multiplication = require('../src/multiply')

describe('multiplication', function () {
    // describes a module with nested "describe" functions
    describe('multiply', function () {
        // specify the expected behavior
        it('should multiply 2 numbers', function () {
            var a = 59, b = 37;
            multiplication.multiply(a, b)
                .then(function (res) {
                    console.log(a + ' x ' + b + ' =', res)
                })
            var a = '', b = 37;
            multiplication.multiply(a, b)
                .then(function (res) {
                    console.log(a + ' x ' + b + ' =', res)
                })

            multiplication.multiply()
                .then(function (res) {
                    console.log(a + ' x ' + b + ' =', res)
                })
        })
    })
})
