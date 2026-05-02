function calculate(a, b, callback) {
    return callback(a,b);
}

const result = calculate(5000,5,(a, b) => a * b);

console.log(result)