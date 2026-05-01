🧪 Nível 1 — Fundamentos
1️⃣ Criar sua primeira Promise

Crie uma função simularDelay(ms) que:

Retorna uma Promise
Resolve após ms milissegundos
Retorna a string "Finalizado"

👉 Teste com then e com await

2️⃣ Promise com erro

Crie uma função verificarNumero(num):

Se num for maior que 10 → resolve("Número alto")
Senão → reject("Número baixo")

👉 Teste com .then/.catch

3️⃣ Converter callback em Promise

Você recebe isso:

function buscarDados(callback) {
  setTimeout(() => {
    callback("Dados recebidos");
  }, 1000);
}

👉 Transforme em uma função que retorna Promise

⚡ Nível 2 — Encadeamento
4️⃣ Encadeamento simples

Crie funções:

dobrar(num) → retorna Promise com num * 2
somar10(num) → retorna Promise com num + 10

👉 Encadeie com .then() começando de 5
👉 Resultado esperado: 20

5️⃣ Simular fluxo real

Crie funções:

buscarUsuario() → retorna { id: 1, nome: "Cristiano" }
buscarPedidos(userId) → retorna [pedido1, pedido2]

👉 Use .then() para encadear
👉 Depois refaça com async/await

🔥 Nível 3 — Tratamento de erros
6️⃣ Erro no meio do fluxo

Crie 3 funções em cadeia:

A primeira resolve
A segunda dá erro (reject)
A terceira nem deve rodar

👉 Trate o erro corretamente com .catch()

7️⃣ Try/Catch com async/await

Refaça o exercício anterior usando async/await

👉 Garanta que o erro seja capturado corretamente

🚀 Nível 4 — Concorrência
8️⃣ Promise.all (paralelismo)

Crie 3 funções:

tarefa1 → 2s
tarefa2 → 1s
tarefa3 → 3s

👉 Use Promise.all
👉 Mostre quanto tempo levou no total

💡 Dica: deve demorar ~3s (não 6s)

9️⃣ Promise.race

Use as mesmas tarefas acima

👉 Use Promise.race
👉 Veja qual resultado chega primeiro

🧠 Nível 5 — Avançado (nível pleno)
🔟 Criar seu próprio “fetch”

Crie uma função:

async function meuFetch(url)

Que:

Usa fetch
Se res.ok for false → lança erro
Retorna JSON direto
Trata erro com mensagem personalizada

👉 Objetivo: comportamento parecido com axios

🧩 Bônus (se quiser ir além)

Crie um sistema de retry:

async function fetchComRetry(url, tentativas)
Tenta buscar
Se falhar, tenta novamente até o limite
Se passar do limite → erro
🎯 Dica de ouro

Não só “faça funcionar”. Teste:

Com sucesso ✅
Com erro ❌
Com tempo diferente ⏱️