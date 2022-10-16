/* otra forma de Loop: while */
/* primero se tiene que generar la función y el array */

var estudiantes =  ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0){
    var estudiante = estudiantes.shift(); /* recuerda que shift va a ir quitando los elementos del array */
    saludarEstudiantes(estudiantes); /* mandamos a llamar a nuestr función con su parámetro */
}

/* síntaxis similar al for */

/*ejemplo sin notas */

var estudiantes =  ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
/*R = 
Hola, Sergio,Rosa,Daniel
Hola, Rosa,Daniel
Hola, Daniel
Hola, 

*/

var estudiantes =  ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

/* R =

Hola, María
Hola, Sergio
Hola, Rosa
Hola, Daniel

*/

/* Para mayor claridad de como se muta el array */

var estudiantes =  ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

/* esto es lo que sucede internamente */

/* R=

['María', 'Sergio', 'Rosa', 'Daniel']
Hola, María
['Sergio', 'Rosa', 'Daniel']
Hola, Sergio
['Rosa', 'Daniel']
Hola, Rosa
['Daniel']
Hola, Daniel

*/