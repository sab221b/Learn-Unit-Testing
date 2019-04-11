const addition = require('../src/sum')

describe('addition', function () {
    // describes a module with nested "describe" functions
    describe('add', function () {
        // specify the expected behavior
        it('should add 2 numbers', function () {
            var a = 27, b = 16;
            addition.add(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })

            var a = 'a', b = 6;
            addition.add(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })

            addition.add()
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
    })
})
