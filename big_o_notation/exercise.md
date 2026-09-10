# Exercícios de Big O Notation

Este material contém **10 exercícios práticos** sobre complexidade de algoritmos (Big O).

Cada exercício apresenta uma implementação **antiga/ingênua** (sem preocupação com performance), junto com uma explicação do que o código faz. O seu desafio é:

1. Analisar a complexidade de tempo (e, quando fizer sentido, de espaço) da versão original.
2. Reescrever o código aplicando uma versão mais eficiente.
3. Comparar a complexidade da versão nova com a antiga.

No final de cada exercício há um espaço para você anotar sua análise (`Big O antigo` / `Big O novo`).

---

## Exercício 1 — Buscar um elemento em uma lista

**O que o código faz:** recebe uma lista de números e um valor alvo, e percorre a lista item por item até encontrar o valor, retornando `true` se encontrar e `false` caso contrário.

```javascript
function contemValor(lista, alvo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === alvo) {
      return true;
    }
  }
  return false;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 2 — Verificar duplicatas em uma lista

**O que o código faz:** recebe uma lista e verifica se existe algum valor duplicado, comparando cada elemento com todos os outros elementos da lista.

```javascript
function temDuplicado(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      if (i !== j && lista[i] === lista[j]) {
        return true;
      }
    }
  }
  return false;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 3 — Somar o valor de todas as combinações de produtos em kits

**O que o código faz:** um sistema de e-commerce quer simular o valor de **todos os kits possíveis** formados por 2 produtos do catálogo (para depois escolher os kits mais baratos de anunciar). A função recebe os preços dos produtos e soma o valor combinado de cada par possível (incluindo repetir o mesmo produto duas vezes).

```javascript
function somaDeTodosOsKits(precos) {
  let somaTotal = 0;
  for (let i = 0; i < precos.length; i++) {
    for (let j = 0; j < precos.length; j++) {
      somaTotal += precos[i] + precos[j];
    }
  }
  return somaTotal;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 4 — Contar de quantas formas um cliente pode pagar um valor

**O que o código faz:** um caixa de loja só aceita notas de **R$1** e **R$2**. A função calcula de **quantas formas diferentes** um cliente pode compor um valor `n` usando essas notas (a ordem importa: pagar "1+2" é diferente de "2+1"). A solução é recursiva e, sem perceber, acaba recalculando os mesmos subtotais várias vezes.

```javascript
function formasDePagamento(n) {
  if (n <= 1) {
    return 1;
  }
  return formasDePagamento(n - 1) + formasDePagamento(n - 2);
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 5 — Ordenar pedidos do maior para o menor valor

**O que o código faz:** um painel administrativo precisa listar os **pedidos de um dia**, ordenados do menor para o maior valor total, para o gerente identificar rapidamente as maiores vendas. A função recebe os valores dos pedidos e os ordena comparando pares vizinhos repetidamente e trocando de posição quando necessário.

```javascript
function ordenarPedidosPorValor(valores) {
  const n = valores.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (valores[j] > valores[j + 1]) {
        const temp = valores[j];
        valores[j] = valores[j + 1];
        valores[j + 1] = temp;
      }
    }
  }
  return valores;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 6 — Descobrir o produto mais vendido do mês

**O que o código faz:** recebe uma lista com o **ID do produto** de cada item vendido no mês (um ID aparece repetido uma vez para cada venda) e precisa descobrir qual produto vendeu mais. Para cada ID, a função conta quantas vezes ele aparece na lista inteira, guardando o que tiver a maior contagem.

```javascript
function produtoMaisVendido(idsDeVendas) {
  let maiorContagem = 0;
  let produtoMaisVendidoId = null;

  for (let i = 0; i < idsDeVendas.length; i++) {
    let contagem = 0;
    for (let j = 0; j < idsDeVendas.length; j++) {
      if (idsDeVendas[j] === idsDeVendas[i]) {
        contagem++;
      }
    }
    if (contagem > maiorContagem) {
      maiorContagem = contagem;
      produtoMaisVendidoId = idsDeVendas[i];
    }
  }

  return produtoMaisVendidoId;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 7 — Verificar se o carrinho do celular é igual ao do site

**O que o código faz:** um usuário adiciona produtos ao carrinho tanto pelo app quanto pelo site, e o sistema precisa sincronizar os dois. Antes de sincronizar, a função verifica se os dois carrinhos (representados por listas de IDs de produtos) já têm **exatamente os mesmos itens** (independente da ordem), comparando cada item de um carrinho com cada item do outro.

```javascript
function carrinhosIguais(carrinhoApp, carrinhoSite) {
  if (carrinhoApp.length !== carrinhoSite.length) {
    return false;
  }

  for (let i = 0; i < carrinhoApp.length; i++) {
    let encontrou = false;
    for (let j = 0; j < carrinhoSite.length; j++) {
      if (carrinhoApp[i] === carrinhoSite[j]) {
        encontrou = true;
        break;
      }
    }
    if (!encontrou) {
      return false;
    }
  }

  return true;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 8 — Somar as vendas de todos os períodos possíveis

**O que o código faz:** recebe uma lista com o **valor vendido em cada dia do mês** e precisa gerar um relatório somando o faturamento de **todo período possível** (dia 1 sozinho, dias 1–2, dias 1–3, dias 2–3, dias 2–4... todos os intervalos contíguos), acumulando tudo em um total geral.

```javascript
function somaDeTodosOsPeriodos(vendasPorDia) {
  let somaTotal = 0;

  for (let i = 0; i < vendasPorDia.length; i++) {
    for (let j = i; j < vendasPorDia.length; j++) {
      let somaDoPeriodo = 0;
      for (let k = i; k <= j; k++) {
        somaDoPeriodo += vendasPorDia[k];
      }
      somaTotal += somaDoPeriodo;
    }
  }

  return somaTotal;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 9 — Encontrar dois produtos que somam exatamente o valor de um cupom

**O que o código faz:** uma loja quer sugerir automaticamente **dois produtos** cujo preço somado bata exatamente o valor de um cupom de desconto (ex: cupom de R$150 → sugerir dois produtos que somem R$150). A função recebe os preços do catálogo e o valor do cupom, e testa todos os pares possíveis até achar um que combine, retornando os índices desses dois produtos.

```javascript
function produtosParaCupom(precos, valorDoCupom) {
  for (let i = 0; i < precos.length; i++) {
    for (let j = 0; j < precos.length; j++) {
      if (i !== j && precos[i] + precos[j] === valorDoCupom) {
        return [i, j];
      }
    }
  }
  return null;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Exercício 10 — Remover e-mails duplicados antes de enviar uma campanha

**O que o código faz:** uma lista de assinantes foi importada de duas planilhas diferentes e pode ter **e-mails repetidos**. Antes de disparar uma campanha de marketing (pra não mandar o mesmo e-mail duas vezes pra mesma pessoa), a função remove as duplicatas, verificando para cada e-mail se ele já foi adicionado à lista final antes de inseri-lo.

```javascript
function removerEmailsDuplicados(emails) {
  const emailsUnicos = [];

  for (let i = 0; i < emails.length; i++) {
    let jaExiste = false;
    for (let j = 0; j < emailsUnicos.length; j++) {
      if (emailsUnicos[j] === emails[i]) {
        jaExiste = true;
        break;
      }
    }
    if (!jaExiste) {
      emailsUnicos.push(emails[i]);
    }
  }

  return emailsUnicos;
}
```

**Big O antigo:** `_____`
**Big O novo (sua versão):** `_____`

---

## Dicas gerais para a análise

- Conte quantos **loops aninhados** dependem do tamanho da entrada (`n`).
- Estruturas como `Set`, `Map` ou objetos (`{}`) em JavaScript têm busca/inserção em **O(1)** em média, e costumam ser a chave para otimizar loops aninhados de busca.
- Um algoritmo recursivo que se ramifica em 2 chamadas a cada passo, sem memoização, tende a ter complexidade **exponencial O(2ⁿ)**.
- Ordenar uma lista antes de processá-la custa **O(n log n)** — às vezes vale a pena pagar esse custo para simplificar um problema depois.
- Nem todo exercício precisa chegar em O(n): o objetivo é entender **por que** a versão original tem a complexidade que tem, e onde há espaço real de melhoria.