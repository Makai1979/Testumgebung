function appendOperation (parameter) {
    document.getElementById('ergebnisBereich').innerHTML += parameter;

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
    let loeschen = document.getElementById('ergebnisBereich');
    let geloescht = delete(loeschen.innerHTML);
    loeschen.innerHTML = geloescht;
    if (geloescht >= true) {
        document.getElementById("ergebnisBereich").innerHTML = '';
    } 
}