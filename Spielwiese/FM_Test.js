
// for-Schleife

const charakter = 't';
const timeToRepeat = 5;
let myString = '';

for (let i = 0; i < timeToRepeat; i++) {    // Vorgang in den {} solange wiederholen, bis Konstante (timeToRepeat) erreicht ist.
    myString = myString + charakter;        // Leere Variable = Leere Variable + Konstante (Buchstabe t)

}
console.log(myString);  // ttttt

myString = '';

for (let i = 0; i < timeToRepeat; i++) {
    myString = timeToRepeat + charakter;    // Leere Variable = Konstante (timeToRepeat) + Konstante (Buchstabe t)
    // * oder / gehen nicht und bringen einen NaN raus
}
console.log(myString);  // 5t








// function                                 Überall wo die () vorkommen wird eine Art einer Funktion abgerufen!!!

function addTwo(number) {                   // Der Name der Funktion soll die Aufgabe klar benennen
    return number + 2;                      // Hier wird "number" als Parameter ansprechbar offengehalten
}                                           // und gesagt, dass dieser Parameter mit 2 addiert werden soll

const finalAnswer = addTwo(5);              // die Konstante "finalAnswer" erhält dann den Inhalt der Funktion "addTwo"
// mit dem Parameter "number" 5. Also 2 + 5.
console.log(finalAnswer);

const finalAnswer2 = addTwo(10);            // die einmal erstellte Funktion kann dann mit anderen Werten
// immer wieder verwendet werden.
console.log(finalAnswer2);

function add(num1, num2) {                  // oder lasse mehrere Parameter in die Funktion ein und
    return num1 + num2;                      // beschreibe dann, was mit den Parametern geschehen soll.
}                                           // "return" gibt die hier stehende Anweisung wieder zurück.

const finalAnswer3 = add(18, 5);             // speichert dann das Ergbnis der Funktion in einer Konstanten ab...

console.log(add(5, 8));                     // ... oder als Ausgabe der Funktion in der Konsole. 
console.log(finalAnswer3);                 // Wichtig: Die Parameter müssen definiert sein.





// Komplexere Funktionen

function greet(firstName, lastName, honorific, greeting) {              // Hier werden vier Parameter (Variablen) deklariert
    return `${greeting} ${honorific} ${lastName}! Ich würde mich        
    sehr freuen, Sie bei der nächsten Tagung dabei zu haben!
    ${firstName}! Ich hoffe ihr Aufenthalt bei uns wird 
    ein Vergnügen werden, ${honorific} ${lastName}.`;
}                                                       // Mit den `` kann ein Text mit enthaltenen Variablen ausgegeben werden.
// Die Variablen sind durch den $-Aufruf vor den {} gekennzeichnet.

console.log(greet("Benjamin", "Mast", "Herr", "Beste Grüße"));  // Die Variablen können dann in dem Aufruf der Funktion definiert werden.
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));      // Die Reihenfolge ist hierbei sehr wichtig!

// Anderes Beispiel:

const myHomeCity = "Nettetal";              // Deklariere Konstanten
const myHomeState = "Nordrhein-Westfalen";
const myHomeCountry = "Deutschland";

function logOutYourHome(city, state, country) {     // Definiere die Funktion und setze vorerst leere Parameter für den Text
    console.log(`Du bist aus der Stadt ${city}, 
    dem Bundesland ${state} und dem Land ${country}.`);
}

console.log(logOutYourHome(myHomeCity, myHomeState, myHomeCountry));    // Rufe die Funktion auf und ersetze durch die
// Reihenfolge die Konstanten an die Position der leeren Varaiblen.




// Scope-Ausnahmeregeln

let something = 'ausserhalb der Funktion';          // Variable wird global erstellt.


function thing() {
    let something = 'ausserhalb des if-statements';     // Erstellte globale Variable wird noch mal erstellt, aber innerhalb des
    // der Funktion und gilt bis um Ende der Schleife der Funktion.
    if (true) {
        let something = 'innerhalb des if-statemens';   // Erstellte Funktions-Variable wird noch mal erstellt, aber innerhalb des
        console.log(something);                         // des if-statements und gilt bis um Ende der Schleife des if-statements.
    }

    console.log(something);                             // Nach Beenden des if-statements wird der überschriebene Wert
    // der "something"-Variablen wieder zur Funktions-Version.
}

thing();
console.log(something);                             // Nach Beenden der Funktion wird der überschriebene Wert
// der "something"-Variablen wieder zur ursprünglichen Version.




// Builtins, z.B. Math

const No1 = 1.8;
const No2 = 5.2;
const No3 = 150;
const No4 = .7;
const No5 = 80.854;

console.log('Zeigt den kleinsten Wert der Variablen an: -> ' + (Math.min(No1, No2, No3, No4, No5)));
console.log('Zeigt den größten Wert der Variablen an: -> ' + (Math.max(No1, No2, No3, No4, No5)));
console.log(`Rundet die ${No4} auf die näher liegende Ganzzahl -> ` + (Math.round(No4)));
console.log(`Rundet die ${No4} immer ab -> ` + (Math.floor(No4)));
console.log(`Rundet die ${No4} immer auf -> ` + (Math.ceil(No4)));
console.log(`Multipliziert ${No2} hoch ${No1} -> ` + (Math.pow(No2, No1)));

// andere Builtins-Beispiele:

const name = "Benjamin Mast";

console.log(name.substr(9, 4));   // Gibt hier ab der zehnten Stelle (ab Index 0!!!, ergo 9) die nächsten 4 Index-Werte aus.

const nachName = name.substr(9, 4);     // Oder durch eine neue Konstante/Variable.
console.log(nachName);


// Datumsspielerei

let datumHeute = new Date();
console.log('Hier der Datensatz, welcher bei new Date() herauskommt: <<<' + datumHeute + '>>>');
console.log();

fullDate = datumHeute.toString();
console.log('Damit eine weitere Bearbeitung funktioniert möchte der datumHeute mit der .toString in eine neue Variable gesetzt werden -> fullDate');
console.log();

let weekday = fullDate.substr(0, 3);
let Wochentage = new Array('Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag');
let Wochentag = '';

if (weekday === 'Mon') {
    Wochentag = Wochentage[0]
} else if (weekday === 'Tue') {
    Wochentag = Wochentage[1]
} else if (weekday === 'Wed') {
    Wochentag = Wochentage[2]
} else if (weekday === 'Thu') {
    Wochentag = Wochentage[3]
} else if (weekday === 'Fri') {
    Wochentag = Wochentage[4]
} else if (weekday === 'Sat') {
    Wochentag = Wochentage[5]
} else if (weekday === 'Sun') {
    Wochentag = Wochentage[6]
} else throw new Error('Ungültiger Tag');

console.log('Der ausgewertete Wochentag ist <<<' + weekday + '>>>, ergo dann <<<' + Wochentag+ '>>>. Durch den .substr hatte ich dabei die ersten drei Werte der fullDate-Variable ausgelesen, nämlich <<<' + weekday + '>>>.');
console.log();
console.log('Durch eine if-else-Abfrage habe ich dann den gekürzten Wert aus der fullDate genommen und abfragen lassen. Bei Übereinstimmung wurde der Wert dann durch die deutsche Schreibweise in die Wochentag-Variable eingesetzt.')
console.log();

let Tag = '';
let Monat = '';
let Jahr = '';
datumHeute = datumHeute.toLocaleDateString();
console.log('Um die deutsche Schreibweise umzusetzen wurde der .toString mit .toLocaleDateString umformatiert: -> <<<' + datumHeute + '>>>');
console.log();
Tag = datumHeute.substr(0, 2);
Monat = datumHeute.substr(3, 2);
Jahr = datumHeute.substr(6, 4);

console.log('Um die Angaben von Tag (<<<' + Tag + '>>>), Monat (<<<' + Monat + '>>>) und Jahr (<<<' + Jahr + '>>>) separieren zu können, habe ich diese mit .substr in einzelne Variablen geschrieben.')
console.log();
console.log(`Letztendlich kann ich jetzt mit den Werten herumspielen, Z.B.: Heute ist der <<<${Tag}>>>.<<<${Monat}>>>.<<<${Jahr}>>> und es ist <<<${Wochentag}>>>.`);
console.log();