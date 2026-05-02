async function myFetch(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) throw new Error("Response failed!");

        const data = await response.json();

        return data;
    }

    catch (error) {
        console.log(error);
    }
}

const data = await myFetch("https://swapi.info/api/people/10");
console.log(data);

// Or

// myFetch("https://swapi.info/api/people/1").then((result) => {
//     console.log(result)
// });