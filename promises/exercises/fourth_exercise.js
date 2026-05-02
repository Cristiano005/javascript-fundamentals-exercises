function double(numberParam) {
    return new Promise((resolve, reject) => {
        if(typeof numberParam !== "number") reject("It's not a number!");
        else resolve(numberParam * 2);
    });
}

function plusTen(numberParam) {
    return new Promise((resolve, reject) => {
        if(typeof numberParam !== "number") reject("It's not a number!");
        else resolve(numberParam + 10);
    });
}

double(5).then(response => {
    return plusTen(response);
}).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})