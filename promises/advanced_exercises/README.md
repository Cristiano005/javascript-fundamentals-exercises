# 🚀 Exercícios Finais — Promises em JavaScript

> Exercícios de nível pleno para consolidar o domínio de Promises. Cada um representa um padrão real usado em produção.

---

## Exercício 11 — Fila de execução com limite de concorrência

**Conceitos:** `Promise.all` · concorrência controlada · algoritmo

### Contexto

Você tem 10 tarefas assíncronas, mas quer rodar no máximo 3 ao mesmo tempo — como um pool de workers.

### O que implementar

Crie uma função `executarComLimite(tarefas, limite)` que:

- Recebe um array de funções que retornam Promises
- Executa no máximo `limite` Promises simultaneamente
- Quando uma termina, a próxima da fila começa automaticamente
- Retorna todos os resultados na ordem original

### Testes esperados

```js
const tarefas = Array.from({ length: 10 }, (_, i) =>
  () => new Promise(res => setTimeout(() => res(`tarefa ${i}`), Math.random() * 2000))
);

const resultados = await executarComLimite(tarefas, 3);
console.log(resultados); // ['tarefa 0', 'tarefa 1', ..., 'tarefa 9']
```

> 💡 **Dica:** pense em como usar um índice global para controlar qual tarefa começa em seguida. Não use `Promise.all` diretamente sobre tudo — o controle é manual.

---

## Exercício 12 — Cache de requisições assíncronas

**Conceitos:** `async/await` · memoização · padrão real

### Contexto

Em apps reais, chamamos a mesma API várias vezes com os mesmos parâmetros. O ideal é cachear a primeira resposta e não repetir a chamada.

### O que implementar

Crie uma função `criarFetchComCache(fn)` que:

- Recebe uma função assíncrona qualquer
- Retorna uma versão "cacheada" dessa função
- Se a mesma chave for pedida novamente, retorna do cache sem chamar a função original
- **Bônus:** adicione expiração de cache por tempo (TTL)

### Testes esperados

```js
const buscarUsuario = criarFetchComCache(async (id) => {
  console.log(`Buscando usuário ${id}...`); // deve aparecer só uma vez por id
  return { id, nome: `Usuário ${id}` };
});

await buscarUsuario(1); // faz a chamada
await buscarUsuario(1); // retorna do cache — sem log
await buscarUsuario(2); // faz nova chamada (id diferente)
```

> 💡 **Dica:** guarde os resultados em um `Map`. O segredo está em cachear a própria Promise, não só o resultado — assim você evita chamadas duplicadas simultâneas.

---

## Exercício 13 — Promise com timeout

**Conceitos:** `Promise.race` · timeout · resiliência

### Contexto

Uma requisição que demora muito é tão ruim quanto uma que falha. Crie um wrapper que rejeita automaticamente se a operação demorar mais do que o esperado.

### O que implementar

Crie uma função `comTimeout(promise, ms)` que:

- Se a promise resolver antes de `ms` → retorna o resultado normalmente
- Se demorar mais que `ms` → rejeita com o erro `"Timeout após Xms"`

### Testes esperados

```js
// Deve rejeitar — a operação demora mais que o timeout
const lenta = new Promise(res => setTimeout(() => res('ok'), 3000));
await comTimeout(lenta, 1000); // ❌ "Timeout após 1000ms"

// Deve resolver — a operação termina antes do timeout
const rapida = new Promise(res => setTimeout(() => res('ok'), 500));
await comTimeout(rapida, 3000); // ✅ 'ok'
```

> 💡 **Dica:** `Promise.race` resolve com o que chegar primeiro. Basta criar uma promise que rejeita após `ms` milissegundos e colocá-la em disputa com a original.

---

## Exercício 14 — Pipeline assíncrono

**Conceitos:** composição de funções · `async/await` · arquitetura

### Contexto

Em vez de encadear `.then()` manualmente a cada vez, crie uma função que monta o pipeline automaticamente a partir de uma lista de etapas.

### O que implementar

Crie uma função `pipeline(...fns)` que:

- Recebe N funções assíncronas como argumento
- Retorna uma função que aceita um valor inicial
- Passa o resultado de cada etapa para a próxima automaticamente
- Se qualquer etapa falhar, o erro deve propagar corretamente

### Testes esperados

```js
const buscarUsuario  = async (id)      => ({ id, nome: 'Cristiano' });
const validar        = async (usuario) => {
  if (!usuario.nome) throw new Error('Nome inválido');
  return usuario;
};
const formatar       = async (usuario) => ({ ...usuario, nome: usuario.nome.toUpperCase() });
const salvar         = async (usuario) => `Salvo: ${JSON.stringify(usuario)}`;

const processar = pipeline(buscarUsuario, validar, formatar, salvar);

console.log(await processar(1));
// ✅ 'Salvo: {"id":1,"nome":"CRISTIANO"}'
```

> 💡 **Dica:** `Array.reduce` com `await` é seu melhor amigo aqui. O acumulador deve ser uma Promise.

---

## Exercício 15 — Promise.allSettled: relatório de resultados

**Conceitos:** `Promise.allSettled` · tolerância a falhas · dados reais

### Contexto

Diferente de `Promise.all`, o `allSettled` não cancela tudo quando um item falha. É ideal para processar lotes onde cada item pode ter sucesso ou falha de forma independente.

### O que implementar

- Simule um array com 5 IDs de usuários (alguns existem, outros não)
- Crie `buscarUsuario(id)` que resolve para IDs pares e rejeita para ímpares
- Use `Promise.allSettled` para buscar todos de uma vez
- Ao final, exiba um relatório com: quantidade de sucessos, quantidade de falhas e os motivos
- **Bônus:** implemente o mesmo comportamento sem usar `allSettled`

### Testes esperados

```js
const ids = [1, 2, 3, 4, 5];
const resultados = await Promise.allSettled(ids.map(buscarUsuario));

// Relatório esperado:
// ✅ Sucessos (2): usuário 2, usuário 4
// ❌ Falhas (3): id 1 - "não encontrado", id 3 - "não encontrado", id 5 - "não encontrado"
```

> 💡 **Dica:** `allSettled` retorna um array de objetos com `status: "fulfilled"` ou `"rejected"`. Filtre e agrupe para montar o relatório.

---

## 🎁 Bônus — Sistema de envio de e-mails em lote

**Conceitos:** concorrência com limite · workers · `Promise.all`

### Contexto

Você tem 8 e-mails pra enviar, mas seu servidor de e-mail só aguenta **2 conexões simultâneas**. Use o esquema de workers com limite de concorrência para processar o lote com eficiência.

### O que implementar

Crie uma função `enviarEmails(emails, limite)` onde:

- Cada e-mail é um objeto `{ id, destinatario }`
- A função `enviarEmail(email)` simula o envio — demora entre 1s e 3s (tempo aleatório) e resolve com `"E-mail ${id} enviado para ${destinatario}"`
- Use o esquema de workers com limite de concorrência
- No final exiba um relatório com todos os resultados e o tempo total

### Dados de entrada

```js
const emails = [
  { id: 1, destinatario: "ana@email.com" },
  { id: 2, destinatario: "bruno@email.com" },
  { id: 3, destinatario: "carla@email.com" },
  { id: 4, destinatario: "diego@email.com" },
  { id: 5, destinatario: "elena@email.com" },
  { id: 6, destinatario: "fabio@email.com" },
  { id: 7, destinatario: "gabi@email.com" },
  { id: 8, destinatario: "hugo@email.com" },
];
```

### O que validar

```js
console.time("total");
const results = await enviarEmails(emails, 2);

console.log("\n📬 Relatório de envio:");
results.forEach(r => console.log(" ✅", r));
console.timeEnd("total");

// ✅ Nunca mais de 2 envios simultâneos
// ✅ Todos os 8 e-mails enviados ao final
// ✅ Resultados na ordem original
// ⏱️ Tempo total bem menor do que a soma individual
```

> 💡 **Dica:** o `setTimeout` não retorna uma Promise — envolva-o em `new Promise` para que o `await` consiga esperar. O tempo em ms é `(Math.random() * 2 + 1) * 1000`.

---

## 🎯 Checklist de qualidade

Para cada exercício, valide nos três cenários:

| Cenário | O que testar |
|---|---|
| ✅ Sucesso | O fluxo normal funciona corretamente? |
| ❌ Erro | Os erros são capturados e propagados certo? |
| ⏱️ Tempo | O comportamento com delays diferentes é o esperado? |

---

*Boa sorte! Esses padrões aparecem constantemente em código de produção.*
