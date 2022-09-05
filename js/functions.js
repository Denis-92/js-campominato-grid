console.log('JS FUNCTIONS - OK');

// DEFINISCI SE UN DATO NUMERO E' PARI O DISPARI

function oddOrEven(reciveNumber) {
    if (reciveNumber % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// CREA GRIGLIA DI GIOCO QUADRATA

function makeGrid(index, vectorOfNumbers) {

    console.log('bottone cliccato!');

    const gridElement = document.getElementById('grid-container')
    gridElement.innerHTML = '';

    while (index < 100) {

        const gridContent = document.createElement('div');
        gridContent.className = 'grid-element';
        gridContent.innerHTML = index + 1;

        vectorOfNumbers[index] = index + 1;

        gridElement.append(gridContent);

        index++;
    }

}