// Variablen erstellen
let zahlA = '';
let zahlB = '';
let operator = '';
let aufgabe = 'Die Aufgabe ist: '
let anzeige = document.querySelector('#ergebnisBereich');


function appendOperation (nummern) {
    anzeige.textContent = zahlA += nummern;
    console.log(zahlA);

}

function pruefung (operator) {
    anzeige.textContent = zahlA += operator;
        console.log("."+zahlA+". " + " --"+operator+"-- " + "Es ist ein Ops!")
    anzeige.textContent = zahlA += zahlB;

        console.log(aufgabe + zahlA + zahlB);
}




function calculateResult () {
    let aufgabe = document.getElementById('ergebnisBereich');
    let resultat = eval(aufgabe.innerHTML);
    aufgabe.innerHTML = resultat;
}

function deleteLast () {
    let aufgabe = document.getElementById('ergebnisBereich');
    if(aufgabe.innerHTML.endsWith(' ')) {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0,-3);
    }   else {
        aufgabe.innerHTML = aufgabe.innerHTML.slice(0,-1);
    }
}

function deleteAll () {
    let loeschen = document.querySelector('#ergebnisBereich');
    let geloescht = delete(loeschen.innerHTML);
    loeschen.innerHTML = geloescht;
    if (geloescht >= true) {
        document.querySelector('#ergebnisBereich').innerHTML = '',
        zahlA = '', zahlB = '';
    } 
}