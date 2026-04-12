function filter(list, callback) {

    let newList = [];

    for (let index = 0; index < list.length; index++) {

        const element = list[index];

        if (callback(element)) {
            newList.push(element);
        }
    }

    return newList;
}

console.log(filter(['banana', 'uva', 'maça', 'Goiaba'], (fruit) => fruit.includes('u')));