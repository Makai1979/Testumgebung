// Try and Catch
// Fehlerbehandlung in JS

// Damit wird das Programm nicht durch den Fehler abgebrochen,
// sollte hier der Bedarf sein eine bestimmte Stelle zu prüfen.

function main() {

   

    try { // Hier startet der Versuchsbereich der Prüfung

        console.log(age)  // es soll ein nicht definierter Wert
        // ausgegeben werden. ein Fehler wird provoziert.
        

    } catch (err) { // Hier startet die Auswertung, sollte ein
                    // Fehler gefunden werden.

        if (err instanceof ReferenceError)
            console.error("Referenz Fehler: " + err);
        // wenn es sich um einen Art von Referenzierungsfehler
        // handelt wird diese Meldung ausgegeben, der weitere
        // Code darunter aber fortgeführt.

        else if (err instanceof RangeError)
            console.error("Range Fehler: " + err);
        // handelt es sich hier nicht um einen Referenzierungs-
        // fehler wird geprüft, ob der Wert eventuell ausserhalb
        // der möglichen Reichweite der Zahlen liegt. Der darauf
        // folgende Code wird weiter ausgeführt.

    } finally {
        console.log("Nutzereingaben entfernen")
        // abschließend wird folgende Meldung ausgegeben.
    }

    console.log("Hello World")
    // Hier der Beweis, dass der Code bis zum Schluss ausgegeben 
    // und nicht durch Fehler abgebrochen wird.
    
}

function main2(){

    try { var n = 1001;  // eine Variable gibt eine Nummer an.

            if (n > 0 && n < 1000) {
                console.log("Number between 0 and 1000");
                // liegt diese Nummer innerhalb der vorgeschriebenen
                // Parameter so ist alles in Ordung, ist dies nicht
                // der Fall....
            } else {
                throw new RangeError("Number to small/big");
                // schmeißt "throw" einen gezielten Range-Error aus. 
            }
        } finally {
            console.log("Dies ist das Ergebnis der Prüfung.")
            // abschließend wird folgende Meldung ausgegeben.
        }

}
