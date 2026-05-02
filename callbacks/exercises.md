🟢 Nível 1 — Básico

1️⃣ Executando um callback

Crie uma função executar que recebe um callback e simplesmente executa ele.

👉 Esperado:

    executar(() => console.log("Oi"));
    
2️⃣ Callback com parâmetro

Crie uma função:

    saudacao(nome, callback) 
    
que chama o callback passando o nome.

3️⃣ Operação matemática com callback

Crie uma função calcular(a, b, callback) que usa o callback pra definir a operação.

🟡 Nível 2 — Intermediário

4️⃣ Simulando atraso

Crie uma função esperar(ms, callback) que executa o callback depois de X milissegundos.

👉 Dica: use setTimeout

5️⃣ Buscar usuário (simulado)S

Crie:

    buscar Usuario(callback) 
    
que após 2 segundos retorna um objeto:

    { nome: "Cristiano", idade: 21 }

6️⃣ Callback com condição

Crie uma função verificarIdade(idade, callback):

    Se idade >= 18 → callback("Maior de idade")
    Senão → callback("Menor de idade")

🟠 Nível 3 — Começando a complicar

7️⃣ Lista com callback

Crie uma função 

    processarLista(lista, callback) 
    
que percorre a lista e aplica o callback em cada item.

👉 Tipo um .forEach manual

8️⃣ Filtrando com callback

Crie 
    
    filtrar(lista, callback) 
    
que retorna uma nova lista com base na condição do callback.

👉 Tipo um .filter

🔴 Nível 4 — Preparação pra Promises

9️⃣ Callback em sequência

Simule:

    buscarUsuario
    buscarPedidos(usuario)
    buscarDetalhes(pedidos)

Encadeie tudo usando callbacks.

🔟 Tratamento de erro (estilo Node.js)

Crie uma função:

    dividir(a, b, callback):

    Se b === 0 → callback("Erro: divisão por zero", null)
    Senão → callback(null, resultado)
