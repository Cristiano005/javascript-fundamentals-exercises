function searchUser(userId) {

    return new Promise(resolve => {

        resolve(

            [
                {
                    id: 1,
                    fullName: "Cristiano Sousa",
                },
                {
                    id: 2,
                    fullName: "Lucas Silva",
                },
                {
                    id: 3,
                    fullName: "Fábio Lima",
                },

            ].find(user => user.id === userId)

        );

    });

}

function searchOrders(userId) {

    return new Promise(resolve => {

        resolve(

            [

                {
                    id: 1,
                    product: "Headset",
                    price: 129.00,
                    user_id: 3,
                },
                {
                    id: 2,
                    product: "Mouse",
                    price: 99.00,
                    user_id: 3,
                },
                {
                    id: 3,
                    product: "Keyboard",
                    price: 200.00,
                    user_id: 1,
                },

            ].filter(product => product.user_id === userId)
        );

    });

}

searchUser(1).then(user => {
    return searchOrders(user.id);
}).then(orders => {
    console.log(orders);
}).catch(error => {
    console.log(error)
});

// Now with async/await

// async function getUserWithOrders(userId) {

//     const user = await searchUser(userId);

//     if (!user) return null;
        
//     const orders = await searchOrders(userId);

//     return {
//         ...user,
//         orders,
//     }
// }

// const result = await getUserWithOrders(1);

// console.log(result)

// Crie funções:

// buscarUsuario() → retorna { id: 1, nome: "Cristiano" }
// buscarPedidos(userId) → retorna [pedido1, pedido2]

// 👉 Use .then() para encadear
// 👉 Depois refaça com async/await