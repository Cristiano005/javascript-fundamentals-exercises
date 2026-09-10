function somaDeTodosOsKits(precos) {
  let somaTotal = 0;
  for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      somaTotal += precos[i] + precos[j];
    }
  }
  return somaTotal;
}

function sumAllOfTheKits(prices) {
  let total = 0
  for(let index = 0; index < prices.length; index++) {
    total += prices[index]
  }
  return total * (prices.length - 1)
}

const prices = [25, 35, 33, 60, 54, 71]

const oldWay = somaDeTodosOsKits(prices)
const result = sumAllOfTheKits(prices)

console.log(oldWay, result)

// Big O antigo: ___n²__ Big O novo (sua versão): __n___