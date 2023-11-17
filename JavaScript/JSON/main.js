// JSON
// JavaScript Object Notation

function getIntoJSON(){

    var newCar01 = new Car("VW",8);
    console.log(newCar01);


//------------------Wert in JSON umwandeln

    // Wandelt den Wert in einen String um...
    JSON.stringify(newCar01);
    // Deklariert eine neue Variable mit dem Wert der Umwandlung oben...
    var carAsJson = JSON.stringify(newCar01);
    console.log(carAsJson); // -> Wandelt in JSON um. Kann in anderen
    // Programmiersprachen wie z.B. C# gelesen werden.

    // So lässt sich der Wert als JSON in der Backend-Entwicklung von NODE.JS
    // speichern. Funktioniert aber hier nicht, da im Frontend nicht möglich"
    /*   var fs = require('fs');
    fs.writeFile("test.txt", carAsJson, function(){
    if (err)  {
        console.log(err);
    }
    });   */
}


//------------------Wert aus JSON in JS umwandeln

// api = application programming interface -> Backend mit Datenbank z.b.
// Google-Suche: json todo api

function getFromJSON(){
    // hole dir den ersten Eintrag (1 am Ende) von der URL, auf die ' achten!
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // nach erhalt der Antwort soll ein .then und eine arrow-function 
        // ausgeführt werden, welche die Anwort in .json umwandelt.
        .then(response => response.json())
        // Das Ergebnis der Umwandlung wird dann ebenfalls durch ein
        // .then in dem Befehl console.log hinterlegt und ausgegeben.
        .then(json => console.log(json));
    
}


class Car {
    constructor(brand, age){
        this.brand = brand;
        this.age = age;
    }

}

