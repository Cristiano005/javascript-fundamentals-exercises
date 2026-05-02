// function searchData(callback) {
//     setTimeout(() => {
//         callback("Dados recebidos")
//     }, 1000);
// }

// function showData(data) {
//     console.log(data);
// }

// searchData(showData)

// Best version!

function searchData() {
    return new Promise(resolve => {
        resolve("Dados resolvidos");
    });
}

function showData(data) {
    console.log(data);
}

searchData().then(response => setTimeout(() => showData(response), 1000));