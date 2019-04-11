const subtraction = require('../src/subtract')

describe('subtraction', function () {
    // describes a module with nested "describe" functions
    describe('subtract', function () {
        // specify the expected behavior
        it('should subtract 2 numbers', function () {

            var a = 27, b = 16;
            subtraction.subtract(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })

            var a = 'a', b = 6;
            subtraction.subtract(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })

            subtraction.subtract()
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
    })
})
