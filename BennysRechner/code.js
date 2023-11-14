// Variablen erstellen
let zahlA = '';
let zahlB = '';
let Nummer1 = '';
let Nummer2 = '';
let operator = '';
let aufgabeA = '';
let aufgabeRest = '';
let aufgabe = '';
let anzeige = document.querySelector('#ergebnisBereich');


function appendOperation(nummern) {
    if (aufgabeA <= 0) {
        anzeige.textContent = zahlA += nummern;
    } else {
        anzeige.textContent = aufgabeA += nummern;
    }
    console.log("Hier steht zahlA: " + zahlA + " und hier ist aufgabeA: " + aufgabeA);
}

function pruefung(operator) {
    anzeige.textContent = zahlA += operator;
    aufgabeA = anzeige.textContent;
    console.log("Inhalt von aufgabeA ist: " + aufgabeA);
}

function calculateResult() {
    aufgabe = document.getElementById('ergebnisBereich');
    let aufgabeSplit = '';
    aufgabeSplit = aufgabe.split(' ');
    zahlA = aufgabeSplit[0];
    operator = aufgabeSplit[1];
    zahlB = aufgabeSplit[2];
    
    if (operator = ' +' ) {
        addition(' + ');
    } else if (operator = ' - ') {
        subtrahieren(' - ');
    } else if (operator = ' * ') {
        multiplizieren(' * ');
    } else if (operator = ' / ') {
        dividieren(' / ');
    }

}

function addition() {
    console.log("Add " + aufgabeSplit);
    Nummer1 = parseFloat(zahlA);
    Nummer2 = parseFloat(zahlB);
    console.log("Teil1: " + aufgabeSplit[0] + ", Teil2: " + aufgabeSplit[1] + " und Teil3: " + aufgabeSplit[2]);
    resultat = Nummer1 + Nummer2;
    console.log("Das ist das Ergebnis: " + resultat);
}

function subtrahieren() {
    console.log("Sub " + aufgabeSplit);
    Nummer1 = parseFloat(zahlA);
    Nummer2 = parseFloat(zahlB);
    console.log("Teil1: " + aufgabeSplit[0] + ", Teil2: " + aufgabeSplit[1] + " und Teil3: " + aufgabeSplit[2]);
    resultat = Nummer1 - Nummer2;
    console.log("Das ist das Ergebnis: " + resultat);
}

function multiplizieren() {
    console.log("Mul " + aufgabeSplit);
    Nummer1 = parseFloat(zahlA);
    Nummer2 = parseFloat(zahlB);
    console.log("Teil1: " + aufgabeSplit[0] + ", Teil2: " + aufgabeSplit[1] + " und Teil3: " + aufgabeSplit[2]);
    resultat = Nummer1 * Nummer2;
    console.log("Das ist das Ergebnis: " + resultat);
}

function dividieren() {
    console.log("Div " + aufgabeSplit);
    Nummer1 = parseFloat(zahlA);
    Nummer2 = parseFloat(zahlB);
    console.log("Teil1: " + aufgabeSplit[0] + ", Teil2: " + aufgabeSplit[1] + " und Teil3: " + aufgabeSplit[2]);
    resultat = Nummer1 / Nummer2;
    console.log("Das ist das Ergebnis: " + resultat);
}

function deleteLast() {
    let aufgabe = document.getElementById('ergebnisBereich');
    if (aufgabe.innerHTML.endsWith(' ')) {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0, -3);
    } else {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0, -1);
    }
}

function deleteAll() {
    let loeschen = document.querySelector('#ergebnisBereich');
    let geloescht = delete (loeschen.innerHTML);
    loeschen.innerHTML = geloescht;
    if (geloescht >= true) {
        document.querySelector('#ergebnisBereich').innerHTML = '',
            zahlA = '', zahlB = ''; resultat = ''; aufgabeA = '';
    }
}