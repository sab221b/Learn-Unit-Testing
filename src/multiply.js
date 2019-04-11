module.exports = {
    multiply: function (a, b) {
        return new Promise(function (resolve, reject) {
            if (isNaN(a) || isNaN(b))
                reject(new Error('2 numbers are required'));
            else {
                const quotient = a * b;
                resolve(quotient);
            }
        })
    }

}
