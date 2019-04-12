module.exports = {
    /**
     * This function divides two input numbers.
     * @param {number} input any number
     * @param {number} input any number
     * @returns {number} division of two given numbers.
     */
    divide: function (a, b) {
        return new Promise(function (resolve, reject) {
            if (isNaN(a) || isNaN(b))
                reject(new Error('2 numbers are required'))
            else {
                if (a == 0 && b == 0)
                    reject(new Error('please give atleast one non-zero number'));
                else {
                    const quotient = a / b;
                    resolve(quotient);
                }
            }
        })
    }
}
