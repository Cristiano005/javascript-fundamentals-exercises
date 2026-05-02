// function sum(numberA, numberB) {
//     return numberA + numberB;
// }

// function execute(sum) {
//     console.log(sum());
// }

// execute(() => sum(5,5));

// Improved Version

function sum(numberA, numberB) {
    return numberA + numberB;
}

function execute(callback, numberA, numberB) {
    callback(numberA, numberB);
}

execute(sum, 10, 5);