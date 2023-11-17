// alert ruft ein Fenster auf
// in jeder Zeile muss der Kommentar neu gekennzeichnet sein

/* alert("Hallo Benny");

console.log("Ich bin in der Konsole") // Ausgabe eines Textes in der Konsole
console.log(2 + 2) //Rechnen geht auch
console.error(545123 * 12154)
console.warn (815/5)*/

/* So kann man Kommentare über mehrere
Zeilen abbilden,
ohne immer die Zeile neu zu deklarieren */

// Variablen und Datentypen..............................................

// strings (Zeichenfolgen)
let name = "Benny";
let sirname = "Mast";

// interger (Ganzzahl)
let age = 18;

// float (Zahl mit Nachkommastellen)
let price = 3.99;

// boolean (wahr oder falsch)
let hasDrivingLicense = true;
let istWaiting = false;

// Eine Variable ist dazu da einen Wert zu speichern und abrufbar zu machen
// Der Datentyp wird je nach Wert zugewiesen
// Aufbau einer Variablen:
// Keyword (let) Name (name) = Wert (Benny)

// Beispiel:

let x = 5;

// Danach lässt sich der Wert beliebig häufig abändern
// z.B. x = 10; x = 20;
// Der zuletzt eingegebene Wert bleibt bestehen

let y = -10;
let z = 100;

// Was passiert? 5 + -10 * 100 = -995
let result = x + y * z;

console.log(result)

// Beispiel für die Aktualisierung einer Variablen:

let a = 5;
console.log(a);
a = 30;
console.log(a);
a = 500;
console.log(a);
a = 1;
console.log(a);

// Der Wert wird bei jedem Request wieder aktuell ausgegeben.

// Eine Variabel kann auch den Wert einer anderen Variablen annehmen:

let b = 5;
let c = b;
console.log(c);


// Operatoren.......................................................

// Rechnen mit Variablen:

let sum = b + c; // 10

let sub = b - c; // 0

let div = b / c; // 1

let multiply = b * c; // 25

let func = b + c * 5; // 30
let func2 = (b + c) * 5; // 50

// Verkürzung der Schreibweise

let e = 5;

e = e + 10; // 5 + 10

e += 10; // gleiches Ergebnis (Inkrement)
e -= 10; // -5 (Dekrement)
e *= 10; // 50
e /= 10; // 0.5

e++; // e wird um 1 erhöht
e--; // e wird um 1 verringert

console.log(e); /* nach allen oben veränderten Berechnungen von e 
das Ergebnis. e wird immer wieder neu berechnet und jede Zeile
nimmt den neuen Wert des darüber liegenden Werts. */

// Vergleichsoperatoren

// ==   gleich
// !=   ungleich
// >    größer
// <    kleiner
// >=   größer oder gleich
// <=   kleiner oder gleich
// &&   Und (logische Operatoren)
// ||   Oder (logische Operatoren)

// Ist der Wert einer Variablen über 18? Boolsche Expression

let d = 18;

console.log(d == 18); // true
console.log(d != 18); // false (Ungleich)

let firstname = "Peter";

console.log(firstname == "Anton"); // false (ist ja Peter)
console.log(firstname != "Günther"); // true (ist ja ungleich Peter)

console.log(d > 20); // false
console.log(d < 30); // true
console.log(20 <= d); // false
console.log(d >= 5); // true
console.log(d >= 18); // true

// Arrays (Listen).......................................................

/* Umständliche Auflistung ohne Arrays:
var pet = "Hunde";
var pet2 = "Katze";
var pet3 = "Vogel";
var pet4 = "Maus";
*/

var pets = ["Hunde", "Katze", "Vogel", "Maus"]
console.log(pets)

// Gezählt wird immer von Null an! Der erste Wert liegt immer auf Index 0!

console.log(pets[2]) // Vogel, da dritter Index, Zahl 2

numbers = [1, 10, 20, 50] // Beispiele für weiteren Array
random = [55, "Gummifuss", 1.99, "Hand"] // gemischtes Array

console.log(random)

// Erweiterte Arraybehandlung

var fruits = ["Aplpe", "Banana", "Orange"] // Änderung eines falschen Werts
console.log(fruits)
fruits[0] = "Apple"
console.log(fruits)

console.log(fruits[3]) // Wert in der Liste nicht vorhanden, undefined
console.log(fruits[-1]) // Minuswerte ebenfalls undefined, in anderen 
// Sprachen der letzte Wert der Liste, -2 der vorletzte, usw...

// Array (length) - Die Angabe "length" ist der letzte Punkt des Arrays

console.log(fruits.length) // Gibt die Länge des Arrays wieder
console.log(fruits[fruits.length - 1]) // Gibt das letzte Element des Array wieder

var automarken = ["Audi", "BMW", "Volvo", "VW"]
console.log(automarken)
automarken.push("Ford") // Hinzufügen eines Werts in den Array
console.log(automarken)

// Array (push) -> Wert an Ende des Arrays hinzufügen

var din = [] // Ein leeres Array ist ebenfalls gültig und kann...
console.log(din)
din.push("DINA4") //...später mit Informationen ausgefüllt werden.
console.log(din)

// Array (splice) -> Wert an bestimmter Stelle einfügen

var numbers = [1, 3, 4, 5, 6]
numbers.splice(1, 0, 2)
// Setze wie folgt ein: (nach Wert "1", Nichts löschen -> "0", 
// Wert "2" einsetzen)
console.log(numbers)

var dogs = ["a", "b", "d", "e"]
dogs.splice(2, 0, "c") // (nach Wert "2", Nichts löschen, Wert "c" einsetzen)
console.log(dogs)

// Array (concat) -> Arrays verbinden

var typ = [1, 2, 3, 4]
var typB = [5, 6, 7, 8]
var newArray = typ.concat(typB); // fügt "typB" hinter "typ" ein,
// ein neues Array (newArray) entsteht.
console.log(newArray)

// Array -> Löschen eines Elements aus einem Array (drei Möglichkeiten)

// pop -> Löscht den letzten Wert eines Arrays

var dingens = [1, 2, 3, 4, 5, 6, 7, 8]
dingens.pop()
console.log(dingens)

// shift -> Löscht den ersten Wert eines Arrays

dingens.shift()
console.log(dingens)

// splice -> Kann Werte an eine bestimmte Stelle hinzufügen (siehe oben) 
// oder entfernen

dingens.splice(2, 3) // entferne nach dem 2. Wert die 3 folgenden Werte
console.log(dingens)

// Array (find and erase) - Suchen, finden und entfernen in einer Liste

dingens = [2, 8, 5, 7, 1, 3, 6, 4, 7]

var resultVorhanden = dingens.find(XYZ => XYZ == 4)
console.log(resultVorhanden) // sucht, ob der Wert vorhanden ist
// gibt als Bestätigung den Wert aus, ansonsten undefined

var resultIndexFirst = dingens.indexOf(7) // Wert im Index, gezählt von Null
console.log(resultIndexFirst) // sucht, auf welchem Index dieser Wert liegt

var resultIndexLast = dingens.lastIndexOf(7) // Wert im Index, gezählt von hinten
console.log(resultIndexLast) // sucht, auf welchem Index dieser Wert liegt

dingens.splice(resultIndexFirst, 1)
console.log(dingens) // lösche den gefundenen Wert aus dem Array

// Array (sort) - Sortiern der Liste

dingens = [2, 8, 5, 7, 1, 3, 6, 4, 7]

dingens.sort() // Liste wird von unten nach oben sortiert
console.log(dingens)

dingens.reverse() // Liste wird von oben nach unten sortiert
console.log(dingens)

// Objekte - komplexer Datentyp mit {}..........................................................

var human = { // Das Object wird mit "=" gestartet und den "{}"
    name: "Benny",    // properties (Eigenschaften)
    height: "186",     // Eigenschaften hinter ":", nicht "="
    age: 43,        // hinter den Values immer ein "," setzen!
    country: "DE",
    children: ["Emilie", "Elias"] // Eigenschaft mit Array
}

// Beispiel - Haus

var haus = {
    zimmer: 5,
    quadratmeter: 186,
    bedachung: "Giebeldach",
    garten: true,
    bewohner: 4,
    bewohnerNamen: ["Benny", "Rehana", "Emilie", "Elias"] // ein Array
}

// Attribute von Objekten aufrufen

console.log(haus.garten) // Ausgabe der Value von Garten
console.log(haus["bewohnerNamen"]) // andere, komfortablere Möglichkeit

// Verändern von Werte (Value) der einzelnen Variablen (Keys)

haus["quadratmeter"] = 160; // Methode 1
haus.bedachung = "Flachdach" // Methode 2

// Value kann auch in einen anderen Datentyp geändert werden!
// "NaN" -> Not a Number, Fehlercode im Fall von Berechnungen

console.log(haus)

// Ein Array in einem Objekt kann auch weitere Objekte und diese
// wiederrum weitere Arrays beinhalten.

// Beispiel - Objekt mit Array und Objekt

var taschenrechner = {
    nrtasten: 10,
    fcttasten: 6,
    strom: [
        { quelle: "Solar", function: "Am Tag" },
        { quelle: "Batterie", function: ["Am Tag", "Nachts"] }, // Objekt mit Array in Array
        { quelle: "Ohne", function: "keine" }
    ]
}

console.log(taschenrechner.strom[1].function[1]) // Nachts :-)
// Ausgabe folgenden Werts: Object.Array[ObjectIndex].Array[ArrayIndex]

// Logische Bedingungen...................................................

// If Statements (Wenn, dann)

age = 20;

if (age >= 18) {  // Ist Variable größer als angegebener Wert, dann...
    console.log("Eintritt gewährt")
}

age = 16;

if (age >= 18) {  // Wird ausgeführt wenn Bedingung wahr ist.
    console.log("Eintritt gewährt")
} else { // Wird in jedem anderen Fall ausgeführt.
    console.log("Nicht alt genug")
}

age = 16;

if (age < 18) {  // Wird ausgeführt wenn Bedingung wahr ist.
    console.log("Nicht alt genug")
} else { // Wird in jedem anderen Fall ausgeführt.
    console.log("Eintritt zugelassen")
}

// If Else Statements können auch beliebig oft ineinander verschachtelt werden.

// Prompt für Altersabfrage von oben

/*age = prompt("Trage dein Alter ein");

if (age < 18) {  // Wird ausgeführt wenn Bedingung wahr ist.
    console.log("Nicht alt genug")
} else { // Wird in jedem anderen Fall ausgeführt.
    console.log("Eintritt zugelassen")
}*/

// Prompt kann auch wieder alle Datentypen verarbeiten!

// if-Schleife umdrehen

/*age = prompt("Trage dein Alter ein");

if (!(age > 18)) {  // Die Abfrage wird umgedreht (!), der false-Wert gefordert
    console.log("Nicht alt genug")
} else { // Wird in jedem anderen Fall ausgeführt.
    console.log("Eintritt gewährt")
}*/

// else-if

/*var color = prompt("Trage eine Ampel-Farbe ein");
var lowerColorName = color.toLowerCase(); // alles in kleinbuchstaben

// GrÜn Grün GRÜN GrüN grün
// immer als "grün" erkennen

// Wenn grün -> fahren
if(lowerColorName == "grün") { // prompt hat Probleme mit Sonderlauten
    alert("Du darfst fahren");
} else if(lowerColorName == "orange") {
    alert("Du darfst anfahren oder musst bremsen");
} else if(lowerColorName == "rot") {
    alert("Du musst halten");
} else {
    alert("Keine gültige Ampelfarbe eingetragen");
}*/

// Wenn orange -> anfahren/bremsen
// Wenn rot -> halten
// Fehlermeldung zurückgeben bei falscher Farbe

// Ampelprogramm mit Funktion

function main() {

    var input = document.getElementById("inputColor");
    // Hole den Inhalt des Inputfelds

    var color = input.value;
    // definiere die Variante "color" zu diesem Import

    var lowerColorName = color.toLowerCase();
    // stelle die komplette Schreibweise auf klein ein

    if (lowerColorName == "grün") { // Schleife beginnt
        alert("Du darfst fahren");
    } else if (lowerColorName == "orange") { // Schleife weiter...
        alert("Du darfst anfahren oder musst bremsen");
    } else if (lowerColorName == "rot") { // Schleife weiter...
        alert("Du musst halten");
    } else {    // Schleife hört auf
        alert("Keine gültige Ampelfarbe eingetragen");
    }

}
