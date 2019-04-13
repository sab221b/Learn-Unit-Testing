module.exports = {
    /**
     * This function multiplies two input numbers.
     * @param {number} input any number
     * @param {number} input any number
     * @returns {number} multiplication of two given numbers.
     */
    multiply: function (a, b) {
        return new Promise(function (resolve, reject) {
            if (isNaN(a) || isNaN(b))
                reject(new Error('2 numbers are required'));
            else {
                const product = a * b;
                resolve(product);
            }
        })
    }

}
