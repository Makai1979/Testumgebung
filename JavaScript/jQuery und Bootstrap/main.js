// jQuery

/* Hinzuziehen von Elementen aus anderer Bibliothek 
Das $-Zeichen ist der Verweis auf die jQuery*/

function jquery() {

    $("h1").toggle(); // Der Tag "h1" aus der HTML wird durch diese Funktion
    // ein und ausgeblendet. Geht natürlich auch mit "hide" zum verstecken oder
    // anderen Befehlen.

    /* um eine ID anzusprechen benutzen wir das "#"-Tag vor der ID aus der HTML: */
    $("#top").toggle();

    // $("div") <- Komplette Tags im HTML
    // $("#sub") <- Bestimmte ID
    // $(".test") <- Bestimmte Klasse

    $("#sub").text("Hallo Welt"); // für eine Textveränderung
    $("#low").html("<p>Test</p><button>Test</button>"); // für eine Veränderung
    // des HTML-Bereichs durch den Start der Funktion.

    $("#high").attr("hidden", false); // So werden Attribute angesprochen.

    $("ul").append("<li>Test 2</li>"); // Ergänzt den Listeneintrag nach dem letzen Wert.
    $("ul").prepend("<li>Test 0</li>"); // Ergänzt den Listeneintrag vor dem ersten Wert.

    /* Es gibt noch viele weitere Möglichkeiten über jQuery die HTML zu beeinflussen.
    Z.B. mit .addclass oder .removeclass um Klassen hinzuzufügen oder zu löschen.
    Oder .parent und children für einen neuen übergeordneten Eintrag oder einem
    untergeordneten Eintrag. */

    $("li").parent().append("<li>Test 2</li>"); // Als Beispiel, wie "ul" angesteurert
    // werden kann um dann einen weiteren "li"-Eintrag zu generieren.

}


// Events


$(document).ready(() =>  {  /* Zeigt an, dass das Dokument (HTML, CSS, JS...) 
                            komplett geladen wurde. */
    console.log("ready")
});

$("li").on("click", () => { /* Gibt in der Konsole die Häufigkeit an, wie oft auf
                            die Tabelle von "li" geklickt wurde.*/
    console.log("click");
});

/* Alternativ:
$("li").click(() => { // Hier wird "click" direkt angesprochen.
    console.log("click");
}); */

/* Weitere Events:
"focus" -> wenn man in etwas hineingeht (Eingabefeld z.B.)
"blur" -> wenn man etwas wieder verlässt (Eingabefeld z.B.)
"hover" -> wenn man mit der Mouse darüber schwebt
"mousedown" -> wenn man mit der Maus darauf klickt
"mouseleave" -> wenn die Maus den Bereich wieder verlässt
"mouseenter" -> Keine Ahnung. ^^
*/



// Load


function load(){

    $("#paragraph").load("../text.txt");
   
}


// ajax (Bedingte Erklärung, Befehl "get" aus dem jQuery, gehört zu ajax )

function ajax(){

    $.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
        $("#paragraph").text(JSON.stringify(res));
    });  // Lädt den Inhalt der Website als JSON.stringify in die genannte ID.

}


function btnColor() {
    $("btn-color").attr("bs-body-color", black);  // Funktioniert nicht!!!
    
}

