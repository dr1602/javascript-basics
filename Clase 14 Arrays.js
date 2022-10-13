/* guarda varios valores, es una lista de datos como números, strings y objetos, incluso arrays */
/* genera estructura de datos */


/* estructura */

[]

/* ejemplo */

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

/* ¿cómo accedemos a cada uno de sus elementos? */

console.log(frutas);

/* R = ['Manzana', 'Plátano', 'Cereza', 'Fresa'] */

/* para ver la longitud del array  (o cuántos elementos tiene) */

console.log(frutas.length);

/* R = 4 */

/* para acceder a cada uno de los elementos, el de nuestra elección */
/* recuerda que la cuenta inicia conun cero */

console.log(frutas[2]);

/* R = Cereza */

console.log(frutas[0]);

/* R = Manzana */

/* en arrays tenemos dos tipos de elementos: métodos, los métodos ayudan a generar con los arrays */
/* métodos para muutar el contenidop como quitar o agregar contenido */

/* Ejemplo */

var masFrutas = frutas.push("Uvas");

frutas;

/* R = (5) ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas'] */

/*para quitar elementos, exactamente el último elemento del array */

var menosFrutas = frutas.pop("Uvas");

frutas;

/* R = (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa'] */

/* Terecer método para agregar un dato al inicio */
/* para qué el unshift y no el push? por ejemplo, cuando queremos agregar al "presidente" y tiene que ser la primer persona del evento" */

var nuevaLongitud = frutas.unshift("Melón");

frutas;

/* R= (5) ['Melón', 'Manzana', 'Plátano', 'Cereza', 'Fresa'] */

/* otros elementos son shift que es para eleminar el elemento que esté en el inicio */

var borrarFruta = frutas.shift("Melón");

frutas;

/* R = (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa'] */

var nuevaLongitud = frutas.unshift("Melón");

frutas;

var borrarFruta = frutas.shift("Manzana");

frutas;

/* R = (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa'] */
/* se eliminó melón, no manzanas, porque manzana no estaba al inicio del array */

/* otro método para saber la posición del elemento */
/* tenemos el nombre del elemento pero no su posición */

var posicion = frutas.indexOf("Cereza");

posición;

/* R = 2 */

frutas[2];

/* R = Cereza */
/* Hay una sección de métodos con index para recorrer los elementos */

