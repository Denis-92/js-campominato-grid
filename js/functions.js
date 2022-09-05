console.log('JS FUNCTIONS - OK');

// CREA GRIGLIA DI GIOCO QUADRATA

function makeGrid(index, vectorOfNumbers) {

    console.log('Hai generato la griglia!');

    // !!!TODO: DA CAPIRE MEGLIO QUESTO PASSAGGIO!!!
    const gridElement = document.getElementById('grid-container');

    // QUESTA ISTRUZIONE EVITA CHE IL PULSANTE GENERI MOLTEPLICI GRIGLIE QUALORA IL PULSANTE VIENE PREMUTO NUOVAMENTE
    // ATTENZIONE FUNZIONA ANCHE COME RESET CHE DESELEZIONA TUTTE LE CELLE CLICCATE PER CAMBIARE COLORE
    gridElement.innerHTML = '';

    // CICLO 100 VOLTE LA CREAZIONE DI 1 CELLA NELLA GRID
    for (let index = 0; index < 100; index++) {

        // VARIABILE CONTENT CREA TAG DIV
        const gridContent = document.createElement('div');
        // ...A CUI ASSOCIA CLASSE grid-element DEL CSS
        gridContent.className = 'grid-element';

        // QUESTA ISTRUZIONE E' RESPONSABILE DEL NUMERO VISUALIZZATO NELLA CELLA
        gridContent.innerHTML = index + 1;

        // DETECT CLICK IN UNA CELLA
        gridContent.addEventListener('click', function () {
            // COLORA LA CELLA
            makeCellColored(gridContent, index + 1);
        });

        // !!!TODO: DA CAPIRE MEGLIO QUESTO PASSAGGIO!!!
        gridElement.append(gridContent);
    }

}


// SOTTO-PROGRAMMA: COLORA LA CELLA

function makeCellColored(uncoloredCell, numberUncoloredCell) {

    // CONTROLLO CELLA PARI O DISPARI
    const isEven = oddOrEven(numberUncoloredCell);

    // OUTPUT NUMERO CELLA
    console.log(`Hai selezionato la ${numberUncoloredCell}° cella!`);

    // DEFINITE AZIONI IN CASO DI PARI O DISPARI
    if (isEven) {
        // COLORA DI AZZURRO SE PARI
        uncoloredCell.classList.add('even');
    } else {
        // COLORA DI VERDE SE DISPARI
        uncoloredCell.classList.add('odd');
    }
}

// SOTTO-PROGRAMMA: DEFINISCI SE UN DATO NUMERO E' PARI O DISPARI

function oddOrEven(reciveNumber) {
    if (reciveNumber % 2 === 0) {
        return true;
    } else {
        return false;
    }
}