🟢 Nível 1 — Básico

1️⃣ Executando um callback

Crie uma função executar que recebe um callback e simplesmente executa ele.

👉 Esperado:

    executar(() => console.log("Oi"));
    
2️⃣ Callback com parâmetro

Crie uma função saudacao(nome, callback) que chama o callback passando o nome.

👉 Exemplo esperado:

    saudacao("Cristiano", (nome) => {
    console.log("Olá " + nome);
    });

3️⃣ Operação matemática com callback

Crie uma função calcular(a, b, callback) que usa o callback pra definir a operação.

👉 Exemplo:

    calcular(5, 3, (a, b) => a + b); // 8
    calcular(5, 3, (a, b) => a * b); // 15

🟡 Nível 2 — Intermediário

4️⃣ Simulando atraso

Crie uma função esperar(ms, callback) que executa o callback depois de X milissegundos.

👉 Dica: use setTimeout

5️⃣ Buscar usuário (simulado)S

Crie buscar Usuario(callback) que após 2 segundos retorna um objeto:

    { nome: "Cristiano", idade: 21 }

6️⃣ Callback com condição

Crie uma função verificarIdade(idade, callback):

Se idade >= 18 → callback("Maior de idade")
Senão → callback("Menor de idade")