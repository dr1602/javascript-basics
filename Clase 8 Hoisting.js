console.log(miNombre);

var miNombre = "Diego"

//. just to show the mistake .//

var miNombre = undefined;

console.log

//. verificación: hoisting en las variables .//

var miNombre = undefined;

console.log (miNombre + "Soy ese hoisting")

miNombre = "Diego"

//. hoisting en las funciones .//

hey();

function hey() {
    console.log("Hola " + miNombre)
}

//. verficación de hoisting en las funciones .//

hey();

function hey() {
    console.log("Hola " + miNombre)
}

var miNombre ="Diego";

//. verificación de hoisting en las funciones .//

function hey() {
    console.log("Hola " + miNombre)
}

var miNombre ="Diego";

hey();


