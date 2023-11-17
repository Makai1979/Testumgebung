function main() {

    var product = "Mehl";

    switch(product){

        case "Mehl":
            console.log("Mehl kostet 1€");
            break;
        case "Milch":
            console.log("Milch kostet 2€");
            break;
        case "Apfel":
        case "Birne":
            console.log("Früchte kosten 1€");
            break;
        default:
            console.log("Für dieses Produkt konnte kein Preis gefunden werden.");
    }

}
