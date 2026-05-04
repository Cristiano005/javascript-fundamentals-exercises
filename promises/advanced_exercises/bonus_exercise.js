// Sistema de envio de e-mails em lote

// Você tem 8 e-mails pra enviar, mas seu servidor de e-mail só aguenta 2 conexões simultâneas.
// Crie a função enviarEmails(emails, limite) onde:

// Cada e-mail é um objeto { id, destinatario }
// A função enviarEmail(email) simula o envio — demora entre 1s e 3s (tempo aleatório) e resolve com "E-mail ${id} enviado para ${destinatario}"
// Use o esquema de workers com limite de concorrência
// No final exiba um relatório com todos os resultados e o tempo total

// js const emails = [
//   { id: 1, destinatario: "ana@email.com" },
//   { id: 2, destinatario: "bruno@email.com" },
//   { id: 3, destinatario: "carla@email.com" },
//   { id: 4, destinatario: "diego@email.com" },
//   { id: 5, destinatario: "elena@email.com" },
//   { id: 6, destinatario: "fabio@email.com" },
//   { id: 7, destinatario: "gabi@email.com" },
//   { id: 8, destinatario: "hugo@email.com" },
// ];
// O que validar:

// ✅ Nunca mais de 2 envios simultâneos
// ✅ Todos os 8 e-mails enviados ao final
// ✅ Resultados na ordem original
// ⏱️ Tempo total bem menor do que a soma individual

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

async function sendEmails(emails, limit) {

    const controls = {
        index: 0,
        results: [],
    };

    async function sendEmail() {

        while (controls.index < emails.length) {

            const myIndex = controls.index++;

            controls.results[myIndex] = await new Promise(resolve => {
                setTimeout(() => resolve(`E-mail ${emails[myIndex].id} enviado para ${emails[myIndex].destinatario}`), (Math.round(Math.random() * 2) + 1) * 1000) 
            })
        }

    }

    await Promise.all(Array.from({
        length: limit,
    }, sendEmail));

    return controls.results;
}

try {
    console.time("start")
    const results = await sendEmails(emails, 2);
    console.log(results);
    console.timeEnd("start");
} catch (error) {
    console.log(error);
}