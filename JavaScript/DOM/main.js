// Document Object Model (DOM)

// HTML-Elemente mit Hilfe von JavaScript erstellen, z.B.:

//  <div> -> als Beispiel 1
//  <a>
//  <button>
//  <form>
//  <input>
//  <body>
//  <footer>
//  <ul>
//  <table>

//---------------Beispiel div

var divEle = document.createElement("div");
// Erstellt eine Variable mit dem div-Element als Funktion
divEle.innerText = "Hello World";
// Setzt einen Text in dieses div
document.body.appendChild(divEle);
// Steuert den body-Bereich des HTMLs an und durch appendChild wird
// das oben stehende Element eingefügt. body wäre das parent, div das child

// Auch dies ist eine Funktion. In den Klammern wird dann der Inhalt
// der Variablen "divEle" übergeben.

//---------------Beispiel link

var link = document.createElement("a");
// Erstellt einen Link ohne URL
link.innerText = "Click here";
// Wie schaut der Link aus?
link.href = "https://www.google.de";
// Hier teilen wir dem Link dann eine URL zu.
document.body.appendChild(link);
// Dann wird die Variable "link" inkl. den Eigenschaften übermittelt.

//--------------Beispiel table

var table = document.getElementById("table");
// Wir holen uns den Eintrag aus der HTML mit der ID "table".
var row = table.insertRow(1);
// Eine neue Reihe definieren wir durch eine neue Variable.
// Wir fangen bei Index 1 an und fügen eine Reihe ein mit "insertRow"
// Auf Index 0 steht ja bereits "Vorname" und "Nachname".
row.insertCell(0).innerText = "Benjamin";
// Dann setzen wir durch die Variable mit der Funktion "insertCell"
// eine neue Zelle an Index 0 der betroffenen Reihe mit dem Text "Benjamin".
row.insertCell(1).innerText = "Mast";
// Setzt an den Index 1 eine weitere Zell mit dem Namen "Mast"


// Ein weiterer Eintrag auf dem nächsten Index-Platz:
var row = table.insertRow(2);
row.insertCell(0).innerText = "Jens";
row.insertCell(1).innerText = "Stiegmann";

// Durch eine Schleife lassen sich somit mehrere Reihen und Einträge
// auf einmal durchführen.


//-------------------Event Listener

var btn = document.getElementById("test");
// Erstellt eine Variable mit der Funktion um die ID "test" anzusprechen.
btn.addEventListener("click", function(){
// Teilt der Variablen die Funktion mit dem EventListener und dem
// Attribut "click" und der Funktion einer neuen Reihenerstellung zu.
    var row = table.insertRow(3);
    row.insertCell(0).innerText = "Peter";
    row.insertCell(1).innerText = "Klaas";
});

// Der Event Listener kann auch direkt auf die Zeile angewandt werden:
//      row.addEventListender("click", function(){
//          var row = table.insertRow(3);
//          row.insertCell(0).innerText = "Peter";
//          row.insertCell(1).innerText = "Klaas";
//      });


//--------------------CSS steuern durch JS

function add(){
// Deklariert die Funktion "add"
table.classList.add("awesomeTable");
// Bezieht sich auf die ID "table" und schaltet durch die Funktion 
// classList und den Parameter "add" die CSS auf den Bereich zu.
}

// Hier das Ganze wieder rückwärts:
function remove(){

table.classList.remove("awesomeTable");
}

// Die toggle-Funktion wechselt immer zwischen den Zuständen.
function toggle(){

table.classList.toggle("awesomeTable");
}

// Mit Hover wir der Bereich hervorgehoben, bzw. ein CSS angewandt:

table.addEventListener("mouseover", function(){
    table.classList.add("highlight");
})
table.addEventListener("mouseout", function(){
    table.classList.remove("highlight");
})