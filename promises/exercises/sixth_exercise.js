function testResolve(userId) {

    return new Promise(resolve => {
        resolve([
            {
                id: 5,
                fullName: "João",
            },
            {
                id: 10,
                fullName: "Cristiano"
            },
            {
                id: 50,
                fullName: "Gustavo"
            }
        ].find(user => user.id === userId));
    });

}

function testReject(userData) {

    return new Promise((resolve, reject) => {

        if(!userData) {
            reject("User not found!");
            return;
        }

        resolve(userData);
    });

}

function testDoesNotRun(response) {
    return new Promise((resolve, reject) => {
        resolve("The Found User is: " + response.fullName);
    });
}

testResolve(2).then(userData => {
    return testReject(userData);
}).then(response => {
    return testDoesNotRun(response);
}).then(response => {
    console.log(response)
}).catch(error => {
    console.log("Error: "  + error);
})