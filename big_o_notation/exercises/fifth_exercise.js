function ordenarPedidosPorValor(valores) {

  const n = valores.length; // [10,20,30,40] = 4

  for (let i = 0; i < n; i++) {

    // passa por 10, 20, 30 e 40.

    for (let j = 0; j < n - 1; j++) {

      // Vai até o 3, já que um valor desse é o mesmo do i
      // e começa do seguinte ao i, que é o atual.

      if (valores[j] > valores[j + 1]) { 
        // se i for 20, pega o próximo valor do j que é 30

        const temp = valores[j]; // guarda 20

        valores[j] = valores[j + 1]; 
        // o 20 é guardado antes do 30 por ser menor

        valores[j + 1] = temp;
        // o 20 
      }
    }
  }
  return valores;
}

const result = ordenarPedidosPorValor([40,10,30,20])
const resultWithSort = [40,10,30,20].sort()

console.log(result, resultWithSort)

// Big O antigo: __n²___ 
// Big O novo (sua versão): __(log n log)___

// Aqui o javascript já resolve isso aplicando log n log
// com a sua função "sort", mas eu poderia fazer na unha.