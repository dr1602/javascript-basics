/* forma sencilla de que se repitan tareas de forma automática y no manual */
/* una tarea que se realizá mientras se cumpla una condición hasta que se rompa esta condición */

/* ¿cuántas formas de loops existen? */

/* con arrays */
/* ejemplo para que se saluden de forma automática*/

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); /* string que llama a una variable */
}

for(var i = 0; i < estudiantes.length; i++){ /* normalmente se usa la variable i y se divide en tres partes
en este caso, se pone el valor inicial de i que es cero, después, mientras que el valor de i sea menor 
a la longitud de mi array de estudiante continua el loop, y se aumenta en un 1 la variable i*/
    saludarEstudiantes(estudiantes[i]);

}

/* ejemplo sin notas */

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); 
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

/* R =  Hola, María
        Hola, Sergio
        Hola, Rosa
        Hola, Daniel */

/* Ejemplo 2 */

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); 
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/* R =  Hola, María
        Hola, Sergio
        Hola, Rosa
        Hola, Daniel */
