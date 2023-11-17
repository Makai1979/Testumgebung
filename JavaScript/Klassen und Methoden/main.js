// Klassen (Instanzen eines Objekts gleicher Bauart)

class Student{  // Klassenschlüssel, Name wird immer groß geschrieben.

    constructor(name, id, nc){  // Funktion der automatischen 
                                // Objektherstellung. Benötigte Parameter
                                // werden in die Klammern gesetzt.
        this.name = name;       // Dieser Name bezieht sich auf die
                                // Eingabe des Namens in der Maske.
        this.id = id;
        this.nc = nc;                        
    }

}

var student0 = new Student("Benny",1,2.2)
// Variable erstellen, neue Instanz aus Klasse "Student" erstellen
// mehr Code braucht man dann nicht mehr, da die obere Möglichkeit
// abgekürzt werden kann.

// Z.B.:
var student1 = new Student("Anne",2,1.2)
var student2 = new Student("Inge",3,1.8)
var student3 = new Student("Jan",4,2.8)

console.log(student0)


// Methoden (Funktionen innerhalb einer Klasse)

class Car {
    
    constructor(marke, baujahr, ps){  // ginge auch mit z.B. ps = 100
        this.marke = marke;
        this.baujahr = baujahr;
        this.ps = ps;
    }

    drive(speed){  // Funktion "drive" innerhalb der Klasse "Car"
        console.log("Der " + this.marke + " fährt " + speed + " km/h.");
    }   // Die Property ist der Wert, welcher der Funktion zugeordnet
    // werden kann. Z.B. hier jetzt Kilometer/Stunde, individuell durch
    // die Klammer aufgerufen.

    honk(){
        console.log("Hupt: " + JSON.stringify(this));  // Wandelt ein
        // Objekt in einen String um JSON (JavaScriptObjectNotation) und
        // (strinify)
    }

}

var car0 = new Car ("BMW",1996,186);
car0.drive(210);

var car1 = new Car ("VW",1999,120)
car1.drive(180);
car1.honk();

console.log("Die Autos sind ", car0.marke, " und ", car1.marke + ".")

import {Dog} from "./dog.js";
/* import * as pets from "./pets.js"; -> damit kann man alle
Klassen einer .js-Datei unter dem Namen "pets" (Eine Art Ebene) importieren.

Die Instanz einer Klasse lässt sich dann so z.B. erstellen:
var dog = new pets.Dog("Dogge","weiß", 65); */

var dog0 = new Dog ("Dackel", "rotbraun", 30);
dog0.bark();

var dog1 = new Dog ("Schäferhund", "braun", 70);
dog1.bark();
dog1.watch();


/* Funktionen und andere Einträge lassen sich auch Ex- und Importieren

-----------Ursprung (pets.js): 

export function dingsbums(){
    console.log("Ausgabe") -> als Test, nicht erforderlich
}

-----------Ziel (main.js):

pets.dingsbums(); -> und die Funktion oben wird in der main.js ausgeführt.*/