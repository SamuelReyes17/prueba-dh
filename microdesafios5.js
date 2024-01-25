/*function montoAPagarVehiculo (tipoDeVehiculo, DiasDeAlquiler, SillaParaBebe) {
    switch (tipoDeVehiculo) {
        case compacto:
            console.log(14000)
            break
        case mediano:
            console.log(17000)
            break;
        case camioneta:
            console.log(28000)
            break
    }
    if (SillaParaBebe === "si") {
        console.log(Number.DiasDeAlquiler * 1200)
    }
}

console.log(montoAPagarVehiculo(mediano,3,si))
*/

function invertirTexto(oracion){
    let frase = oracion.split().join().reverse()
    return frase
}
console.log(invertirTexto('oracion'))