const data = {   //Konstante erstellen mit einer Liste
    name: "Peter",
    age: 30
}

const fetching = () => new Promise(res => setTimeout(res, 1000))  // einen Timer zur Simulation einer Arbeitsleistung

const mainFunc = async (input) => {     // Asynchrone Funktion zum senden eines Rucksacks mit Daten (data), input ist der Platzhalter
    await fetching()                    // Die Funktion fetching ausführen (Timer setzen)
    const getData  = () => {            // Konstante getData wird zur Funktion, in dieser Funktion soll return input
        return input                    // den Wert vom data übergeben werden.
    }
    return getData                      // Gib den getData zurück
}

const final = async () => {             // Asynchrone Funktion mit Inhalt...
    const result = await mainFunc(data) // Nach erfolgreichem Abschluss der Funktion mainFunc übergib
    const out = result()                // dem Wert von result in die Konstante out
    console.log(out)                    // Gib den Wert von out in der Konsole aus.
}

final()                                 // Starte die Funktion final()