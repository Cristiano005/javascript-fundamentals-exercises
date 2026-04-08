function sum(a, b, callback) {
    callback(a,b)
}

sum(100,5,(a, b) => console.log(a * b))