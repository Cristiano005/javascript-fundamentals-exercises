function searchUser(callback) {
    setTimeout(callback, 2500);
}

searchUser(() => {
    console.log({
        name: "Cristiano",
        age: 21,
    })
});