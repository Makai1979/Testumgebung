export class Dog {  // Stellt die Klasse für den Export bereit
    
    constructor(rasse, farbe, groesse){
        this.rasse = rasse;
        this.farbe = farbe;
        this.groesse = groesse;
    }

    bark(){  
        console.log("Der " + this.farbe + "e " + this.rasse, "bellt.");
    }   

    watch(){
        console.log("Ausserdem passt der " + this.rasse, "mit seinen " + this.groesse, "cm Körpergröße sehr gut auf.");
    }

}