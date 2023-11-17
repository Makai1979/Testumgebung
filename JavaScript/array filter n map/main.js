// array filter() & map()

/* Filtern lässt nur einen bestimmten Bereich ausgeben in einem neuem array */

function main() {

    // filter()

     let numbers = [1,5,3,29,83,52,10,8,4]

    let smallNumbers = numbers.filter(n =>{
        return n < 10;
    });

    console.log(smallNumbers);

    // map() // Erzeugt einen neuen Array und ermöglicht es Elemente
    // aus dem ursprünglichen Array in jeglicher Form zu verändern.

    let doubledNumbers = numbers.map(n => n * 2); //Beispiel

    console.log(doubledNumbers);

}
