function main() {

    var inputMaxSpeed = document.getElementById("maxSpeed");
    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");
   
    // Hole den Inhalt des Inputfelds

    var maxSpeed = parseInt(inputMaxSpeed.value);
    var speed = parseInt(inputSpeed.value);
    var isFacing = inputDir.checked;

    var maxSpeedWithOffset = maxSpeed + ((maxSpeed/100)*10);
    console.log(maxSpeedWithOffset);

    // Folgendes machen: Toleranz soll 10% betragen.
    // Ein weiteres Eingabefeld mit max. Geschwindigkeit soll programmiert werden.

    if (speed > maxSpeedWithOffset && isFacing == true){
        alert("Du wurdest geblitzt!");
    } else {
    
    }
}
