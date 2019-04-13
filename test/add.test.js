const index = require('../src/index')

describe('addition', function () {
    // describes a module with nested "describe" functions
    describe('add', function () {
        // specify the expected behavior
        it('should add 2 numbers', function () {
            var a = 27, b = 16;
            index.addition.add(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })

            var a = 'a', b = 6;
            index.addition.add(a, b)
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res) 
                })
                .catch(function(err) {
                    console.log('error', err)
                })

            index.addition.add()
                .then(function (res) {
                    console.log(a + ' + ' + b + ' =', res)
                })
                .catch(function(err) {
                    console.log('error', err)
                })
        })
    })
})
