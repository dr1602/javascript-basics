/* JS es un lenguaje que está diseñado en un paradigma de objetos */

 /* ¿cómo trasladamos las propiedades de un objeto físico a paradgimas en JS? 
 como marca, modelo, año de fabricación, puertas, etc., se generan variables "auto"
 con esas propiedades */

 /*si queremos replicar y cambiar esas características, replicamos el objeto carro y
 comenzamos cambiar esas propiedades */

 /*sintaxis del objeto*/

 var objeto = {};

/* ejemplo - combinación de palabras clave y valores */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
}

/* la coma (,) es para ponerle más valores al objeto */
/* una vez establecida la información, ¿cómo se accede a ella? */

miAuto

/* aparecen: palabra clave y valor, palabra clave y valor, y se repite */

/* R= {marca: 'Toyota', modelo: 'Corolla', annio: 2020} */

/* si queremos una propiedad específica de los objetos */

miAuto.marca

/* R = 'Toyota' */

miAuto.annio

/* R = 2020 */

/* una de las propiedades del objeto, puede ser una función y esa
función puede hacer cosas con otras propiedades del objeto */

/* Ejemplo */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

/* para ingresar al método dentro del objeto */

miAuto.detalleDelAuto();

/* R= Auto Corolla 2020 */

/* "this" es una variable que hace referencia al objeto
en este casi a su padre "miAuto" */

/* this podría tener valores diferentes pero en objetos 
hace referencia su padre */

/* ¿cómo podemos replicarlo? cómo generar 30 objetos de manera automática */
/* una función para crear objetos de manera automática "constructora" */
