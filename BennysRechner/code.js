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
let resultat = '';


function appendOperation(nummern) {
    anzeige = document.querySelector('#ergebnisBereich');
    console.log("Schritt 1 -> " + anzeige.textContent)
    aufgabeA = anzeige.textContent + ('');
    console.log("Schritt 2 -> " + aufgabeA)
    //parseFloat.aufgabeA;
    //console.log("Schritt 3 -> " + aufgabeA)
    const AUFGABE =(aufgabeA, zahlA, nummern, callback) => {
        if (aufgabeA <= ('')) {
            return callback(zahlA += nummern)
        }
        if (aufgabeA === resultat) {
            return callback(aufgabeA = zahlA += nummern)
        } 
        if (aufgabeA >= ('')) {
            return callback(aufgabeA += nummern)
        }    
    }
   
    aufgabe = AUFGABE(aufgabeA, zahlA, nummern, aufgabe => aufgabe)
    console.log("Schritt 7 -> " + aufgabe)
    anzeige.textContent = aufgabeA;
    console.log("Schritt 8 -> " + aufgabe)
}

  /* 
    if (aufgabeA <= 0) {
        anzeige.textContent = zahlA += nummern;
    } else if (aufgabeA === resultat) {
        anzeige.textContent = resultat += nummern;
    } else {
        anzeige.textContent = aufgabeA += nummern;
    }
*/


function pruefung(operator) {
    anzeige.textContent = aufgabe += operator;
    aufgabe = anzeige.textContent;
}

function calculateResult(operator) {
    let aufgabeSplit = aufgabe.split(' ');
    console.log("Schritt 1.1 " + aufgabeSplit);
    zahlA = aufgabeSplit[0];
    operator = aufgabeSplit[1];
    zahlB = aufgabeSplit[2];
    console.log("Schritt 2.1 " + zahlA + operator + zahlB);
    
    const RESULTAT = (operator, zahlA, zahlB, callback) => {
        if (operator === "+") {
            return callback(zahlA + zahlB)
        }
        if (operator === "-") {
            return callback(zahlA - zahlB)
        }
        if (operator === "*") {
            return callback(zahlA * zahlB)
        }
        if (operator === "/") {
            return callback(zahlA / zahlB)
        }
    
    }


    console.log(zahlA + "-" + operator + "-" + zahlB);
    resultat = RESULTAT(operator, zahlA, zahlB, resultat => resultat)
    console.log(resultat)
    anzeige.innerHTML = resultat;
    aufgabeA = resultat;
}



/* Alte Auflistung der Zuordnung der Operatoren als Versuch

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

*/

function deleteLast() {
    let aufgabe = document.getElementById('ergebnisBereich');
    if (aufgabe.innerHTML.endsWith(' ')) {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0, -3);
    } else {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0, -1);
    }
}


function deleteAll() {
    document.querySelector('#ergebnisBereich').innerHTML = '',
    zahlA = '', zahlB = ''; resultat = ''; aufgabeA = ''; aufgabe = '';
    }


/* Alte Funktion:

function deleteAll() {
    let loeschen = document.querySelector('#ergebnisBereich');
    let geloescht = delete (loeschen.innerHTML);
    loeschen.innerHTML = geloescht;
    if (geloescht >= true) {
        document.querySelector('#ergebnisBereich').innerHTML = '',
            zahlA = '', zahlB = ''; resultat = ''; aufgabeA = '';
    }
}
*/