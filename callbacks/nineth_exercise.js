// function searchUser(userId, callback) {
//     return callback(userId);
// }

// function searchOrders(userId) {

//     const users = [
//         {
//             id: 1,
//             nome: "Carlos",
//             email: "carlos@email.com",
//             pedidos: [
//                 {
//                     id: 101,
//                     produto: "Notebook",
//                     valor: 3500,
//                     status: "entregue"
//                 },
//                 {
//                     id: 102,
//                     produto: "Mouse",
//                     valor: 120,
//                     status: "pendente"
//                 }
//             ]
//         },
//         {
//             id: 2,
//             nome: "Ana",
//             email: "ana@email.com",
//             pedidos: [
//                 {
//                     id: 103,
//                     produto: "Celular",
//                     valor: 2500,
//                     status: "enviado"
//                 }
//             ]
//         },
//         {
//             id: 3,
//             nome: "João",
//             email: "joao@email.com",
//             pedidos: [
//                 {
//                     id: 104,
//                     produto: "Teclado",
//                     valor: 200,
//                     status: "entregue"
//                 },
//                 {
//                     id: 105,
//                     produto: "Monitor",
//                     valor: 900,
//                     status: "pendente"
//                 }
//             ]
//         }
//     ];

//     return users.find(user => user.id === userId).pedidos;
// }

// function searchDetails(orders) {
//     console.log(orders);
// }

// console.log(searchUser(2, (userId) => {
//     const orders = searchOrders(userId);
//     searchDetails(orders);
// }));

function searchUser(userId, callback) {

    const users = [
        { id: 1, nome: "Carlos", email: "carlos@email.com" },
        { id: 2, nome: "Ana", email: "ana@email.com" },
        { id: 3, nome: "João", email: "joao@email.com" }
    ];

    callback(users.find(user => user.id === userId));
}

function searchOrders(userId, callback) {

    const orders = [
        { id: 101, userId: 1 },
        { id: 102, userId: 1 },
        { id: 103, userId: 2 },
        { id: 104, userId: 3 },
        { id: 105, userId: 3 }
    ];

    const ordersIds = orders.filter(order => order.userId === userId).map(order => order.id);
    callback(ordersIds);
}

function searchDetails(ordersIds, callback) {

    const orderDetails = [
        { orderId: 101, produto: "Notebook", valor: 3500, status: "entregue" },
        { orderId: 102, produto: "Mouse", valor: 120, status: "pendente" },
        { orderId: 103, produto: "Celular", valor: 2500, status: "enviado" },
        { orderId: 104, produto: "Teclado", valor: 200, status: "entregue" },
        { orderId: 105, produto: "Monitor", valor: 900, status: "pendente" }
    ];

    callback(orderDetails.filter(orderDetail => ordersIds.includes(orderDetail.orderId)))
}   

searchUser(1, (userId) => {
    searchOrders(userId.id, (ordersIds) => {
        searchDetails(ordersIds, (orderDetails) => {
            console.log(orderDetails);
        })
    })
})