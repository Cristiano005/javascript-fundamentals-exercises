
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function containsDuplicatesValues(list) {
    const storage = new Set([])
    for (const item of list) {
        if(storage.has(item)) return true
        storage.add(item)
    }
    return false
}

console.log(containsDuplicatesValues(list))

// Big O(n²) para ---> Big O(n)