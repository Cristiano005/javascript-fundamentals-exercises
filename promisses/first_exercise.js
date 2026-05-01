function simulateDelay(statusCode = 200) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (statusCode < 300) resolve("finished")
            else reject("it's an error!");
        }, 2000)
    });
}

simulateDelay(201).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error)
});