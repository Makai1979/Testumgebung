function appendOperation (parameter) {
    document.getElementById('ergebnisBereich').innerHTML += parameter;

}

function calculateResult () {
    let aufgabe = document.getElementById('ergebnisBereich');
    let resultat = eval(aufgabe.innerHTML);
    

    if(aufgabe.innerHTML.endsWith('.0000')) {
        resultat = eval(aufgabe.innerHTML).toFixed(-4);
    }   else if(aufgabe.innerHTML.endsWith('.000')) {
        resultat = eval(aufgabe.innerHTML).toFixed(-3);
    }   else if(aufgabe.innerHTML.endsWith('.00')) {
        resultat = eval(aufgabe.innerHTML).toFixed(-2);
    }   else if(aufgabe.innerHTML.endsWith('.0')) {
        resultat = eval(aufgabe.innerHTML).toFixed(-1);
    }   else {
        resultat = eval(aufgabe.innerHTML);
    }
    aufgabe.innerHTML = resultat.toFixed(6);
   
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