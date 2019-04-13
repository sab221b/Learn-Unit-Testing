const { addition, subtraction, multiplication, division } = require('./index');

addition.add(54, 46)
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