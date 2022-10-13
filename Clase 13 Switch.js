/* validación por casos, si un caso es verdad o falso, como else if o default (else) */

/* estructura */

switch (true) {
    
}

switch (true) {
    case 1:
}

/* ejemplo 1 */

var numero = 1;

switch (numero) {
    case 1:
        console.log("¡Soy un uno!");
        break; 
    case 10:
        console.log("¡Soy un diez!");
        break;
    case 100:
        console.log("¡Soy un cien!");
        break;
    default:
        console.log("¡Soy nada!");
}

/* break deshabilita las siguientes validaciones siempre que la anterior haya sido verdad */
/* si ningún caso es cierto, es importante generar "default" */
/* R = ¡Soy un uno! */

/* ejemplo 2 */

var numero = 10;

switch (numero) {
    case 1:
        console.log("¡Soy un uno!");
        break; 
    case 10:
        console.log("¡Soy un diez!");
        break;
    case 100:
        console.log("¡Soy un cien!");
        break;
    default:
        console.log("¡Soy nada!");
}

/* R = ¡Soy un diez! */

/* ejemplo 2 */

var numero = 30;

switch (numero) {
    case 1:
        console.log("¡Soy un uno!");
        break; 
    case 10:
        console.log("¡Soy un diez!");
        break;
    case 100:
        console.log("¡Soy un cien!");
        break;
    default:
        console.log("¡Soy nada!");
}

/* R = ¡Soy nada! */

/* Ejemplo: ¿qué pasa si no pongo break? */

var numero = 1;

switch (numero) {
    case 1:
        console.log("¡Soy un uno!");
    case 10:
        console.log("¡Soy un diez!");
    case 100:
        console.log("¡Soy un cien!");
    default:
        console.log("¡Soy nada!");
}

/* Hace todas las validaciones */
/* R = ¡Soy un uno! */
/* R = ¡Soy un diez! */
/* R = ¡Soy un cien! */
/* R = ¡Soy nada! */
