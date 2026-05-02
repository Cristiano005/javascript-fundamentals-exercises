function division(a, b, callback) {

    if(b === 0) {
        callback("Erro: division by zero is a problem", null);
        return;
    }

    const result = a / b;

    callback(null, result);
}

division(10, 0, (error, result)  => {
    if(error) console.log(result);
    else throw new Error(error);
});