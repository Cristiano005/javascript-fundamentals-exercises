function verifyAge(age, callback) {
    callback(age);
}

verifyAge(21, (age) => {
    if(age >= 18) console.log('Maior de idade');
    else console.log('Menor de idade');
});

