module.exports = {
    /**
     * This function subtracts two input numbers.
     * @param {number} input any number
     * @param {number} input any number
     * @returns {Promise<number>} promise with subtraction of two numbers
     */
    subtract: function (a, b) {
        return new Promise(function (resolve, reject) {
            if (isNaN(a) || isNaN(b))
                reject(new Error('2 numbers are required'));
            else {
                const quotient = a - b;
                resolve(quotient);
            }

        })
    }

};
