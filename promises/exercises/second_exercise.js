function verifyNumber(number = 0) {
    return new Promise((resolve, reject) => number > 10 ? resolve("High Number") : reject("Low Number"));
}

verifyNumber(15).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});