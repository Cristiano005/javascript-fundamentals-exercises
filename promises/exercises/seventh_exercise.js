async function getUser(userId) {

    const foundUser = [
        {
            id: 5,
            fullName: "João",
        },
        {
            id: 10,
            fullName: "Cristiano"
        },
        {
            id: 50,
            fullName: "Gustavo"
        }
    ].find(user => user.id === userId);

    if (!foundUser) {
        throw new Error("User not found!");
    }

    return foundUser;
}

async function getOrders(userId) {

    const userOrders = [
        {
            id: 1,
            total: 2999.00,
            user_id: 5,
        },
        {
            id: 2,
            total: 1678.00,
            user_id: 6,
        },
        {
            id: 3,
            total: 1000.00,
            user_id: 2,
        },
    ].filter(product => product.user_id === userId);

    if (userOrders.length === 0) throw new Error("No orders found!");
      
    return userOrders;
}

async function getProducts(orders) {
    return `By the way, this is the orders: ${JSON.stringify(orders)}`;
}

try {

    const foundUser = await getUser(6);
    const foundOrders = await getOrders(foundUser.id);
    const foundProducts = await getProducts(foundOrders);

    console.log(foundProducts);
}

catch (error) {
    console.log(error);
}