// Loops

function main() {

    // For Loop    

    for (let i = 0; i < 10; i++) {
        /* Variable wird erstellt, z.B. i ; 
        Kondition - Bedingung (der aktuelle Stand) ; 
        Statement, was passieren soll*/
        console.log(i);
    }

    /* Eine for-Schleife führt den Code eine bestimmte Anzahl lang durch,
    solange das Statement wahr wird. Variable, Bedingung, Funktionaler Code*/




    //Beispiel Namen:

    var names = ["Peter", "Jannick", "Maria"]

    for (let a = 0; a < names.length; a++) {
        /* Variable; So lange, wie Anzahl der Namen als Durchlauf; Variable +1*/

        console.log("Index: " + a + " / Name:" + names[a])
    }



    //Beispiel Umsatz:

    var revenue = [500, 300, 200, 599, 834, 573, 293, 482]
    var totalRevenue = 0;

    for (let b = 0; b < revenue.length; b++) {
        totalRevenue += revenue[b];
        console.log(totalRevenue)
    }

    console.log("Total: " + totalRevenue)



    // for of-Schleife

    // Array mit mehreren Angaben:
    var cars = [
        {
            "brand": "Mercedes",
            "age": 10
        },
        {
            "brand": "VW",
            "age": 5
        },
        {
            "brand": "Toyota",
            "age": 3
        }

    ]

    for (let car of cars) { // Inspiziert alle Eigenschaften des Arrays

        if (car.brand == "Mercedes") { // Stellt die Bedingung...
            console.log(car)
        } else { // ...sonst deklariere den Rest als String in Ausgabe.
            console.log("Auto ist Kein Mercedes")
        }

    }



    // while-Schleife (Überprüft erst die Bedingung, dann wird der
    // Code ausgeführt, endlos bis die Bedingung erfüllt ist)

    // ein While-Counter:

    var counter = 0;

    // Die while-Schleife läuft so lange, 
    // bis ihre Bedingung nicht mehr wahr ist.

    while (counter < 100) { // Quasi Endlosschleife
        console.log(counter)
        counter++; // Hier wird um eins erhöht, bis Bedingung erfüllt.
    }




    // do while-Schleife (erst wird der Code ausgeführt, dann die
    // Bedingung geprüft, ob der Code ein weiteres mal 
    // durchgeführt werden soll)

    // Wann wird eine solche Schleife benötigt?
    // Wenn man sicher gehen muss, dass der Code mindestens einmal
    // ausgeführt wurde, unabhängig von der Bedingung.
    // Wenn der Code nicht durchlaufen muss, kann auch eine While-
    // Schleife eingesetzt werden.

    // Beispiel: Frage den Nutzer nach seinem Passwort, und so lange das
    // Passwort falsch ist, frage immer weiter.

    // ein do While-Counter:

    var counter = 0;

    do {
        counter++; 
    } while(counter < 100);
    console.log(counter) 
    


    
    
    // nested loops - Verschachtelte Schleifen

    var days = 7;
    var weeks = 5;

    for (let x = 1; x <= weeks; x++) { // Parent-Schleife - Für jedes Array...

        console.log("Woche: " + x);
        
        for(let y = 1; y <= days; y++){ // Child-Schleife - ...und für jedes darin enthaltene Array.
            console.log("Tage: " + y + " Woche " + x);
        }

    }   // In solchen Schleifen werden die Variablen immer einen Buchstaben
        // weiter gesetzt. Beispiel x für die Woche, y für den Tag, z für die Stunde.  




    // break und continue

    var numberz = [
        100,
        350,
        250,
        375,
        1000,
        750,
        650,
        3000,
        1050,
        500
    ]

    for (let z = 0; z < numberz.length; z++) {

        if (numberz[z] < 1000) // Bei einer Zeile Code kann auf die geschweifte Klammer verzichtet werden.
            continue;   // Prüft, ob die Zahl der jeweiligen Schleife den 
                        // Eigenschaften entspricht, wenn ja geht es weiter
                        // wenn nein wird hier unterbrochen und die der
                        // nächste Wert geprüft.

                        // continue unterbricht den Vorgang und geht in die
                        // nächste Iteration. Nachfolgender Code wird nicht
                        // ausgeführt.

                        // In dem Fall werden nur Werte größer/gleich 1000 ausgegeben.
        
        console.log(numberz[z])

    }
        
    

    for (let z = 0; z < numberz.length; z++) {

        console.log(numberz[z])

        if (numberz[z] >= 1000){   // Mehr als eine Zeile Code -> {}
            console.log("Wert von >= 1000 gefunden.");
            break;      // Prüft, ob die Zahl der jeweiligen Schleife den 
                        // Eigenschaften entspricht, wenn ja wird hier 
                        // unterbrochen und die der Vorgang komplett beendet.

                        // break unterbricht den Vorgang komplett
                        // Nachfolgender Code wird nicht mehr ausgeführt.

                        // In dem Fall wird die Iterarion bei einem 
                        // Wert größer/gleich 1000 unterbrochen.
        
                    }
    }

}
