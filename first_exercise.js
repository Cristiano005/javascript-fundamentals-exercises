function sum(numberA, numberB) {
    return numberA + numberB;
}

function execute(sum) {
    console.log(sum());
}

execute(() => sum(5,5));