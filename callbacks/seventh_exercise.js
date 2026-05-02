// My Code

//function processList(list, callback) {

//     let newList = [];

//     for (let index = 0; index < list.length; index++) {
//         const element = list[index];
//         newList = callback(element, newList);
//     }

//     return newList;
// }

// function addToList(element, list) {
//     list.push(element + 1);
// }

// console.log(processList([
//     637, 639, 635, 741
// ], addToList));

// Fixed Code:
function processList(list, callback) {

    let newList = [];

    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        callback(element, newList)
    }

    return newList;
}

function addToList(element, list) {
    list.push(element + 1);
}

console.log(processList([637, 639, 635, 741], addToList));