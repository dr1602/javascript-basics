/*
Intrucciones:
Hacer piedra papel o tijera (variables)
Función
Parámetro

Guía:
1. Generar variables
2. Función
3. Validación
4. Encapsular en una Función
*/



function juego(x) {

    var saludo = "Ingrese un valor: piedra, papel o tijera"
    alert (saludo)

    var x = prompt()
    var z = Math.floor(Math.random()*3)

    if ( z === 0 ) {
        z = "piedra"
    }  else if ( z === 1 ) {
        z = "papel"
    }  else if ( z === 2 ) {
        z = "tijera"
    }  else {
        z = "error"
    }

    if( x == "piedra" ) {
        if ( y="papel") {
            z = "Piedra pierde con Papel, Computadora Gana."
        } else if ( y="tijera") { 
            z = "Piedra gana a Tijera, Jugador Gana."
        } else {
            z = "Error, intente de nuevo."
        }
    } else if ( x == "papel") {
        if ( y="piedra") {
            z = "Papel gana a Piedra, Jugador Gana."
        } else if ( y="tijera") { 
            z = "Papel pierde a tijera, Computadora Gana."
        } else {
            z = "Error, intente de nuevo."
        }
    } else if ( x == "tijera") { 
        if ( y="piedra") {
            z = "Tijera pierde con piedra, Computadora Gana."
        } else if ( y="papel") { 
            z = "Tijera gana a Papel, Jugador Gana."
        } else {
            z = "Error, intente de nuevo."
        }
    } else {
        z = "Error, intente de nuevo."
    }

    console.log(z)

}

juego();