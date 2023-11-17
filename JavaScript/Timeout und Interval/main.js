// Timeout & Interval

/* Timeout ist ein verzögerter Start einer Aktion,
Interval lässt eine Aktion in regelmäßigen Abständen ablaufen */

function main() {

   console.log(1)

   setTimeout(() => {
        console.log(3);
   }, 3000);

   console.log(2)  // Der Code wird komplett hintereinander abgearbeitet,
   // der Bereich mit den TimeOut halt um die angegebene Zeit versetzt nach hinten
   // und schließlich in die letzte Zeile gepackt.

   var ticker = 0;

   setInterval(() => {  // Wiederholt den Inhalt der Funktion jede Sekunde (1000).
        ticker++;
        console.log(ticker)
   }, 1000);

}
