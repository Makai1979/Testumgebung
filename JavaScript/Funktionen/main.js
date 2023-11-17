// Functions

// Grundbeispiel

/*function main() { // Funktion ruft die zweite Funktion mit den definierten
                    // Parametern auf.
    add()       // Verwendet die Standardwerte unten.
    add(10)     // Verwendet 10 als ersten Wert, nämlich x + 2.
    add(5,3)    // Verwendet die neuen Werte 5 und 3.
 }

 function add(x = 1,y = 2) {
    var result = x + y;
    console.log(result)
 }*/

/* Kernpunkte Funktionen:

1.) Lassen sich beliebig oft erstellen und verwenden.
2.) Mit Funktionen kann man Code auslagern.
3.) Funktionen lassen sich sehr einfach ausführen, 
anstatt immer komplette Codes schreiben zu müssen.
4.) Man kann Parameter verwenden, muss es aber nicht.
5.) Die Anzahl dieser Parameter ist ebenfalls nicht begrenzt.
6.) Die Parameter müssen keine klaren Deklarationen folgen.
7.) Der Name einer Funktion sollte immer einen Hinweis auf
dessen Funktion geben. Z.B. "add" für addition von Zahlen.*/



// Rückgabewerte von Funktionen

/*var numbers = [
    7,
    48,
    23,
    9,
    45,
    67,
    99,
    1,
    20,
    77,
    94
]

var cars = [
    "Mercedes", 6,
    "VW", 5,
    "Peugeot", 3,
    "Renault", 2,
    "Volvo", 5,
    "BMW", 2
]

function main() {

    var result = filter(numbers, 75) // Alles anzeigen was unter 75 ist
                            // Hier wird dann highestNumerAllowed durch
                            // 75 ersetzt!
    console.log(result)

    result = filter(numbers, 30) // Alles anzeigen was unter 30 ist
    console.log(result)

    result = filter(cars, 2) // Alles anzeigen was unter 30 ist
    console.log(result)
}

function filter(arrayToFilter, highestNumberAllowed) {  // Eigentliche Funktion

    var filteredNumbers = [];  // Erst mal ein leeres Array

    for (let i = 0; i < arrayToFilter.length; i++) {  
        // setzt die Variable auf null; 
        // solange Variable < der Anzahl der Einträge im Array ist; 
        // Variable um einen erhöhen
        
        if (arrayToFilter[i] <= highestNumberAllowed)  // Prüfe ob der Eintrag
                                        // im Array kleiner/gleich Filter(XY)
                                        // ist, wenn ja...
        filteredNumbers.push(arrayToFilter[i]) // ...setze die Nummer auf die Liste
                                        // von filteredNumbers mit push
        
    }

    return filteredNumbers;  // gebe die Werte der Liste dann aus.

}*/

// Rückgabe eines nicht vorhandenen Werts

/*function main(){

    add(3)  // hier fehlt y, die Funktion kann nicht gestartet werden.
            // Der Wert NaN wird zurückgegeben.

}

function add(x,y){

    console.log(x);  // wurde oben definiert, also drei
    console.log(y);  // fehlt oben, also undefined

    var result = x + y;
    console.log(result);
    return result
}*/

// Arrow-Funktion (=>)

/*function main () {
    var result = print("Hallo Welt")
    console.log(result)
}

var print = (str) => {  // Arrow-Funktion
    console.log(str)
    return "String was " + str
}

var multiply = (x,y) => x * y;  // Das ist die Funtkion (one line) gekürzt

*/

/*function multiply (x,y) {    Das wäre die Funktion ausgeschrieben
    return x * y;
}*/

// Scope/Reichweite von Variablen

var global = "Benny" //Steht auf der obersten Ebene, ist überall abrufbar.

function main (){

    var localFuncVar = "Peter";  // Variable lässt sich nur innerhalb
                                // der Funktion aufrufen.

}  // hier wird die Funktion geschlossen, alle Variablen werden gelöscht

// Variable lassen sich immer nur absteigend verwenden.
// Variablen in Funktionen bleiben immer nur in der Funktion erhalten.
// Variablen mit let bleiben im eigenen Codeblock erhalten, mit var
// in der kompletten Funktion.


// Konstante Variablen (Können nach einmaliger Zuordung nicht mehr
// geändert werden)

const minHeight = 120; // const -> Konstanter Wert

console.log(minHeight);

minHeight = 10; // Fehlermeldung, da die Konstante bereits verwendet wurde.
