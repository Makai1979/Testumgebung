function main() {

    var input = document.getElementById("age");
    // Hole den Inhalt des Inputfelds

    var age = input.value;
    // definiere die Variante "age" zu diesem Import

    // < 6 Jahre oder > 60 -> Sonderpreis von 4€
    
    if (age < 0 || age > 110){
        alert("Bitte trage ein gültiges Alter ein")
    } else if (age <= 6 || age >= 60) {
        alert("Preis beträgt 4€")
        
        // Für alle anderen -> 6.50€
    } else {
        alert("Preis beträgt 6.50€")

    }



}