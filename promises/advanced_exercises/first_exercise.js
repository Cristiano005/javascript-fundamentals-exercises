// const tasks = [
//     () => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3),
//     () => Promise.resolve(4), () => Promise.resolve(5), () => Promise.resolve(6),
//     () => Promise.resolve(7), () => Promise.resolve(8), () => Promise.resolve(9),
//     () => Promise.resolve(10),
// ]

// async function executeWithLimit(tasks, limit) {

//     let result = [];

//     // vai executar 3 valores dentro de um array de uma vez, depois pula pra outra

//     for (let currentQueue = 0; tasks.length > 0; currentQueue++) {
//         let onlyValuesInLimit = tasks.splice(0, limit);
//         result.push(...await Promise.all(onlyValuesInLimit)); 
//     }

//     return result;
// }

// executeWithLimit(tasks, 3);

// fixed:

// let index = 0; // esse índice é o contador atual da lista de tasks

// const results = [];
// const myTask = tasks[index];

// index++;

// async function worker(tasks, index, results) {

//     while(index < tasks.length) {

//         const result = await 

//     }

// }

const tasks = [
    () => Promise.resolve(1), () => Promise.resolve(2), () => Promise.resolve(3),
    () => Promise.resolve(4), () => Promise.resolve(5), () => Promise.resolve(6),
    () => Promise.resolve(7), () => Promise.resolve(8), () => Promise.resolve(9),
    () => Promise.resolve(10),
];

async function executeWithLimit(tasks, limit) {

    const results = [];
    let index = 0;

    async function worker() {

        while (index < tasks.length) {
            const myIndex = index++;
            console.log("Pegou tarefa " + myIndex)
            results[myIndex] = await tasks[myIndex]();
            console.log("Terminou tarefa " + myIndex)
        }

    }

    await Promise.all(
        Array.from({
            length: limit
        }, worker)
    );

    return results;
}

console.time("start");

const result = await executeWithLimit(tasks, 3);

console.timeEnd("start");

console.log(result);