/*
CONSEGNA:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari.
Inoltre emette un messaggio in console con il numero della cella cliccata.

BONUS:
Potete sbizzarrirvi, ad esempio mettendo i numeri da 1 a 100 in ordine random nelle celle, ma avete massima libertà!
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

console.log('JS SCRIPT - OK');

// 1) RILEVA IL CLICK SUL PULSANTE

const clickButton = document.getElementById('grid-generator');

// 2) GENERA UNA MATRICE CON 100 CELLE, DA VISUALIZZARE 10 CELLE PER RIGA

clickButton.addEventListener('click', function () {
    console.log('bottone cliccato!');

    const gridElement = document.getElementById('grid-container')
    gridElement.innerHTML = '';

    for (let i = 0; i < 100; i++) {

        const gridContent = document.createElement('div');
        gridContent.className = 'grid-element';
        gridContent.innerHTML = i + 1;

        gridElement.append(gridContent);
    }
});


// 3) INSERIRE UN NUMERO PROGRESSIVO DA 1 A 100 IN OGNI CELLA DELLA MATRICE APPENA CREATA

// 4) RILEVA CLICK SU OGNI CELLA

// 5) CONTROLLA SE LA CELLA E' PARI O DISPARI ED ASSEGNA DI CONSEGUENZA IL COLORE

// 6) COMUNICA MESSAGGIO IN OUTPUT RESTITUENDO IL NUMERO DELLA CELLA CLICCATA