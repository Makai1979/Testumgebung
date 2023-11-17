// Variablen erstellen
let anzeige = document.querySelector('#ergebnisBereich');
let aufgabe = '';


function isValidInput(input) {
    // isValidInput ist ein Karton, input ist die Bezeichung für den Karton.
    const lastChar = aufgabe.slice(-1);
    // Setze eine Konstante lastCahr auf den letzten Wert von Wert vom value der Variablen aufgabe.
    const isOperator = ['+', '-', '*', '/'].includes(input);
    // Setze eine Konstante isOperator auf eine bestimmte Range des Wertes des Kartons isValidInput mit Name input.
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);
    // Setze eine Konstante isLastCharOperator auf den Wert der zu prüfenden Stelle von aufgabe.slice(-1).

    if (isOperator && isLastCharOperator) {
        // Geprüft werden die beiden Konstanten isOperator und isLastCharOperator, 
        // ob der Fall mit +-*/ eintrifft. Wenn ja wird die Berchnung unterbrochen,
        // die entstandene Zahlenfolge wird übergeben.
        // Wenn der input nicht eintrifft wird die Zahlenfolge erweitert, bis Fall eintrifft.
        return false;
    }

    return true;
}

function appendOperation(number) {
    // appendOperation ist ein Karton, number ist die Bezeichung für den Karton.
    aufgabe = anzeige.textContent;
    console.log("Schritt 1 -> " + aufgabe);

    if (isValidInput(number)) {
        // Karton number wird in die Funktion isValidInput ausgeschüttet und ausgewertert.
        aufgabe += number;
        // Aufgabe ist ein Karton mit dem Parameter aufgabe und dem Inhalt number
        // Wenn die Funktion number als Operator identifiziert, wird der aufgabe number 
        // als Operator hinzugefügt. Tritt der false ein wird der Wert übertragen und die
        // Nummer zusätzlich zur Aufgabe hinzugefügt.
        anzeige.textContent = aufgabe;
        // Die aktualisierte aufgabe wird an anzeige weitergegeben.
    }
    console.log("Schritt 2 -> " + aufgabe)
}


function pruefung(operator) {
    anzeige.textContent = aufgabe += operator;
    aufgabe = anzeige.textContent;
}

function calculateResult() {
    let aufgabeSplit = aufgabe.split(' ');
    // Die Variable aufgabeSplit wird mit dem durch ein 
    // Leerzeichen gesplitteten Inhalt der aufgabe gefüllt.
    console.log("Schritt 1.1 " + aufgabeSplit);
    let zahlA = parseFloat(aufgabeSplit[0]);
    // Variable zahlA wird mit dem Inhalt des ersten Splitelements gefüllt und
    // in eine Floatwert gepresst.
    let operator = aufgabeSplit[1];
    // Variable operator wird mit dem Inhalt des zweiten Splitelements gefüllt.
    let zahlB = parseFloat(aufgabeSplit[2]);
    // Variable zahlB wird mit dem Inhalt des drietten Splitelements gefüllt und
    // in eine Floatwert gepresst.
    console.log("Schritt 2.1 " + zahlA + operator + zahlB);

    const RESULTAT = (operator, zahlA, zahlB, callback) => {
        // Erstellt eine Konstante, mit wechselndem Operator, Wert1, Wert2 und Name für Rückgabewert

        switch (operator) {
            // Definiere eine switch für den Wert von operator
            case '+':
                // Der Fall des operators wird mit dem Wert + geprüft. 
                return callback(zahlA + zahlB);
                // Definiere den ersten Fall, welcher als Callback Wert1 mit Wert2 addiert.
            case '-':
                // Der Fall des operators wird mit dem Wert - geprüft. 
                return callback(zahlA - zahlB);
                // Definiere den ersten Fall, welcher als Callback Wert1 von Wert2 subtrahiert.
            case '*':
                // Der Fall des operators wird mit dem Wert * geprüft. 
                return callback(zahlA * zahlB);
                // Definiere den ersten Fall, welcher als Callback Wert1 mit Wert2 multipliziert.
            case '/':
                // Der Fall des operators wird mit dem Wert / geprüft. 
                if (zahlB === 0) {
                    // Bevor der
                    throw new Error('Division durch Null!');
                }
                return callback(zahlA / zahlB);
                // Definiere den ersten Fall, welcher als Callback Wert1 mit Wert2 dividiert.
            default:
                throw new Error('Ungültiger Operator!');

        }
    };

    try {  // Startet Testlauf, ob Callback erfolgreich ist.
        RESULTAT(operator, zahlA, zahlB, (result) => {
            anzeige.textContent = result;
            // Das Ergebnis wird in die Anzeige übergeben.
            aufgabe = result.toString();
            // Die Anzeige wird als String deklariert.
        });

    } catch (e) {
        anzeige.textContent = 'Fehler: ' + e.message; aufgabe = '';
        // Wenn ein Fehler angezeigt wird, wird dieser durch eine Meldung in der Anzeige ausgegeben.
    }
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
    document.querySelector('#ergebnisBereich').innerHTML = '',
        zahlA = '', zahlB = ''; resultat = ''; aufgabe = '';
}

