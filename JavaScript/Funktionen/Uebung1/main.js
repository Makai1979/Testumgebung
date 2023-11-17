// Aufgabe 1 - Funktionen

/* Erstelle einen Array mit 5 Studenten.
Jeder Student besteht aus 'Name', 'Matrikelnummer', 'NC'*/

/* Erstelle eine Funktion, die mit Hilfe einer Schleife,
jeden Studenten in die Konsole ausgibt und den NC aller Studenten
summiert um einen Durchschnitt zu erhalten 
(Durchschnitt = Totale Summe / Anzahl) */

// Hinweis: Funktion aufrufen!


var students = [  // ein Objekt erstellen mit Arrays
]


function calcAverageNC(){  // eine Funktion erstellen, 
    // welche den Durchschnitt der NCs ausgibt.
    
    var totalNC = 0;  // Variable -> Summe NCs auf Null setzen.

    for (let i = 0; i < students.length; i++) {
        // Variable definieren, solange i kleiner als Länge
        // der Einträge im Objekt (5 Arrays) ist wird die Schleife
        // fortgeführt, soll die neue Variable i um einen Wert 
        // erweitert werden.
        
        var student = students[i]; // Setze hier die Variable
        // student auf den Wert students i (also den Index)
        console.log(student)  // gebe die das Ergebnis aus
        // (Inhalte) des Objects students anhang der Länge der 
        // Einträge (eben die fünf Stück)
        
        totalNC += student.NC;  // zähle nun die Einträge aus dem
        // Bereich des "NC" zusammen und setze diese in die Variable
        // totalNC, solange die Schleife läuft

    } // sind alle Positionen durchgelaufen wird die Schleife beendet
    // und keine Werte mehr auf totalNC hinzugefügt.
    
    var averageNC = totalNC / students.length; // definiert die
    // Variable averageNC (DurchschnittsNC) und beschreibt, was diese
    // als Inhalt hat, die Summe des NC-Werts der Schleife durch die
    // Anzahl der gezählten Einträge.

    console.log("NC Durschnitt: " + averageNC); 
    // gib das Ergebnis inkl. Formatierung in der Konsole aus.
}

function addStudent(){  // Funktion für das Hinzufügen von Studenten

    var name = document.getElementById('inputName').value;
    var id = parseInt(document.getElementById('inputId').value);
    var nc = parseFloat(document.getElementById('inputNC').value);
  // erstelle eine Variable und fülle diese mit dem Wert aus dem
    // Input-Feld, erzwinge in id die Ganzzahl (Integer) und in nc die
    // Möglichkeit einer Komma-Zahl durch Float.


    var student = { // Erstelle ein Objekt mit dem Array aus den
        // oben definierten Feldern
        "Name": name,
        "Matrikelnummer": id,
        "NC": nc
    };

    students.push(student);  // Hole das Objekt in den Sammler
    console.log(students);  // Gebe den aktuellen Stand aus.

}


