module.exports = {
    /**
     * This function adds two input numbers.
     * @param {number} input any number
     * @param {number} input any number
     * @returns {number} summation of two given numbers.
     */
    add: function (a, b) {
        return new Promise(function (resolve, reject) {
            if (isNaN(a) || isNaN(b))
                reject(new Error('2 numbers are required'));
            else {
                const quotient = a + b;
                resolve(quotient);
            }
        })
    }

};