function wait(milliseconds, callback) {
    setTimeout(callback, milliseconds);
    // aqui eu acredito ter dado certo porque o callback vindo por
    // parâmetro não precisou do '()' porque o setTimeout já executa
    // ele lá dentro como função, precisando pegar apenas o nome.
}

wait(1000, () => console.log("Cristiano"))