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

    var saludo = "Ingrese un valor: piedra, papel o tijera";
    alert (saludo);

    var x = prompt();
    var y = Math.floor(Math.random()*3);

    switch (y) {
        case 0:
            y = "piedra";
            break;
        case 1:
            y = "papel";
            break;
        case 2:
            y = "tijera";
            break;
        default:
            y = "error";
    }

    console.log(x)
    console.log(y)

    switch(x) {
        case "piedra":
            switch(y) {
                case "piedra":
                    z = "Piedra empata con Piedra, Empate.";
                    break;
                case "papel":
                    z = "Piedra pierde con Papel, Computadora Gana.";
                    break;
                case "tijera": 
                    z = "Piedra gana a Tijera, Jugador Gana.";
                    break;
                default:
                    z = "Error 1, intente de nuevo.";
            }
        case "papel":
            switch(y) {
                case "papel":
                    z = "Papel empata con Papel, Empate.";
                    break;
                case "piedra":
                    z = "Papel gana a Piedra, Jugador Gana.";
                    break;
                case "tijera": 
                    z = "Papel pierde a tijera, Computadora Gana.";
                    break;
                default:
                    z = "Error 2, intente de nuevo.";
            }
        case "tijera":
            switch(y) {
                case "tijera":
                    z = "Tijera empata con Tijera, Empate.";
                    break;
                case "piedra":
                    z = "Tijera pierde con Piedra, Computadora Gana.";
                    break;
                case "papel": 
                    z = "Tijera gana a Papel, Jugador Gana.";
                    break;
                default:
                    z = "Error 3, intente de nuevo.";
            }
        default:
            z = "Error 4, intente de nuevo.";
    }

    console.log(z)

}

juego();