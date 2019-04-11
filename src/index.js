const addition = require('./sum.js');
const subtraction = require('./subtract');
const multiplication = require('./multiply');
const division = require('./divide');

addition.add(58, 42)
    .then(function (res) {
        console.log(res)
    })

subtraction.subtract(19,6)
.then(function(res) {
    console.log(res)
})

multiplication.multiply(23,12)
.then(function(res) {
    console.log(res)
})

division.divide(22,7)
.then(function(res) {
    console.log(res)
})
.catch(function(err) {
    console.log('error', err)
})

module.exports = {
    addition, subtraction, multiplication, division
}
