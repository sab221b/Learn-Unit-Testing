const index = require('../src/index')

describe('subtraction', function () {
    // describes a module with nested "describe" functions
    describe('subtract', function () {
        // specify the expected behavior
        it('should subtract 2 numbers', function () {

            var a = 27, b = 16;
            index.subtraction.subtract(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })

            var a = 'a', b = 6;
            index.subtraction.subtract(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })

            index.subtraction.subtract()
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
    })
})
