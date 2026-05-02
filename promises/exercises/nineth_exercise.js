const taskOne = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("task one"), 10000);
    });
}

const taskTwo = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("task two"), 5000);
    });
}

const taskThree = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("task three"), 3000);
    });
}

console.time("loop-timer"); // Start

Promise.race([
    taskOne(), taskTwo(), taskThree()
]).then(result => {
    console.log(result);
    console.timeEnd("loop-timer"); // End and print result
});