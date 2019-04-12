const index = require('../src/index')

describe('division', function () {
    // describes a module with nested "describe" functions
    describe('divide', function () {
        // specify the expected behavior
        it('should divide 2 numbers', function () {
            var a = 50, b = 3;
            index.division.divide(a, b)
                .then(function (res) {
                    console.log(a + ' / ' + b + ' =', res)
                })
            var a = 0, b = 0;
            index.division.divide(a, b)
                .then(function (res) {
                    console.log(a + ' / ' + b + ' =', res)
                })
            index.division.divide()
                .then(function (res) {
                    console.log(a + ' / ' + b + ' =', res)
                })
        })
    })
})
