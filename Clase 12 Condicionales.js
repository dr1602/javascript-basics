/* condicionales */
/* estructura */

if () {

}
/* entre paréntesis se tiene que poner lo que es verdad, sino no se ejecuta la función */

if (true) {
    console.log("Hola");
}

/* Hola */

if (false) {
    console.log("Hola");
}

/* undefined */

/* función else, con "else", no se puede seguir validando */

if (true) {
    console.log("Hola");
} else{
    console.log("soy falso")
}

/* Hola */

if (false) {
    console.log("Hola");
} else{
    console.log("soy falso")
}

/* soy falso */

/* función elseif, con "elseif", sí puede seguir validando */

if (false) {
    console.log("Hola");
} else if () {
   
} else {

}

/* ejemplo de elseif */

var edad = 18;

if(edad === 18) {
    console.log("puedes votar, será tu primera votación")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aún no puedes votar")
}

/* puedes votar, será tu primera votación */

var edad = 19;

if(edad === 18) {
    console.log("puedes votar, será tu primera votación")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aún no puedes votar")
}

/* Puedes votar de nuevo */

var edad = 17;

if(edad === 18) {
    console.log("puedes votar, será tu primera votación")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aún no puedes votar")
}

/* Aún no puedes votar */

/* se puede hacer tantas validaciones como se deseé.siempre que sea coherente el programa"

/* operador ternario (hace ambas validaciones a la vez) */
/* sintaxis: operador ternario */
condition ? true : false;

/* ejemplo: operador ternario */

var numero = 1;

var resultado = numero === 1 ? "Sí, soy un uno" : "No, no soy uno";

console.log(resultado);

/* Sí, soy un uno */

