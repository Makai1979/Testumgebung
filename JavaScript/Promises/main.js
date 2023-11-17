// Promises

/* Promises ist wie ein Objekt und hat zwei mögliches Ausgangswege
Ist das Versprechen erfüllt oder ist es nicht erfüllt */

function main() {

    let promise = new Promise((resolve, reject) => {

        let n = 400;

        if(n < 100){
            resolve("Versprechen gehalten")
        }   else {
            reject("Versprechen NICHT gehalten")
        }
    })

    promise.then((res) => { // "res" = Result
        console.log(res)
    }).catch((e) => {  // "e" = Error
        console.log("Error: "+ e)
    })

}
