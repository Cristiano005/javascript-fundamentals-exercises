function greetings(name, callback) {
    callback(name);   
}

greetings('Cristiano', (name) => {
   console.log(name)
});