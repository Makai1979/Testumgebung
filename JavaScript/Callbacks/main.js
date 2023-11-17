// Callbacks

/* Nach Ablauf einer Aktion wird eine Meldung zurückgegeben. */

function main() {

     frisieren(abgeschlossen)  /* Ruft die Funktion "frisieren" und den
     Wert des Callbacks aus "abgeschlossen" ab.*/
     frisieren(abgebrochen) /* Keine Parameter werden angegeben wenn reine
     Funtkionen übergeben werden. */
}

function abgeschlossen(preis){
     console.log("Finaler Preis: " + preis + ",- Euro.");
}

function abgebrochen(){
     console.log("Abgebrochen");
}

function frisieren(callback) {
     console.log("Hund ist fertig frisiert.");
     callback(10);  // Der Wert "10" ist dann der Callback für "preis".
}

/* Quasi als Ergebnis:

Hund ist fertig frisiert.
Finaler Preis: 10,- Euro */