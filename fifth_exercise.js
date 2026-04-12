
// fixed!

function searchUser(ms, callback) {
    return setTimeout(() => {
        const user = { name: "Cristiano", age: 21 }
        callback(user);
    }, ms);
}

searchUser(2000, user => console.log(user));