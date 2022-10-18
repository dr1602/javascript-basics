/* métodos para recorrer array con objetos dentro */

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

/* Primer Método: Find, genera nuevo array en variable con valor buscado */

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

encuentraArticulo

/* R = {nombre: 'Laptop', costo: 20000} */

/* si no se encuentra el artíuclo, no regresa nada */
/* find tiene la propiedad de buscar el primer objeto con esa propiedad y no a todos
los que comparten esa característica, sólo uno */

/* Segundo Método: forEach, no regresa un nuevo array, sólo filtra sobre el array sin modificarlo y regresa cosas */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* R=
Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos
 */