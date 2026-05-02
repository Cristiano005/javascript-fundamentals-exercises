async function fetchWithRetry(url, tentativesNumber) {

    let lastError = null;

    for (let currentTentative = 1; currentTentative <= tentativesNumber; currentTentative++) {

        try {

            const response = await fetch(url);

            console.log(`DEBUG: ${currentTentative}`);

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            return await response.json();
        }

        catch (error) {

            lastError = error;

            if(currentTentative === tentativesNumber) {
                throw new Error("O número de tentativas chegou ao limite!");
            }
        }
    }
}

try {
    const data = await fetchWithRetry("https://swapi.info/api/people/1", 5);
    console.log(data);
} catch (error) {
   console.log(error); 
}

