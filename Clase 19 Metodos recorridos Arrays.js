/* métodos de arrays para recorrer su contenido - esta vez con objetos */
/* vamos a aprender a obtener propiedades específicas de estos objetos */

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

/*  entre más objetos existan, más valiosa será el método para filtrar las propiedades de los objetos */
/* los métodos para recorrer el contenido son: 
filter, que ayuda a filtrar, y a validar si algo es verdadero o falso y lo meterá en un nuevo array */

var articulosFiltrados = articulos.filter( function(articulo) {
    return articulo.costo <= 500
});

articulosFiltrados

/*
R= (2) [{…}, {…}]
0: {nombre: 'Libro', costo: 320}
1: {nombre: 'Teclado', costo: 500}
length: 2
[[Prototype]]: Array(0)
*/

/* no modifica el primer array, agrega en el segundo los nuevos artículos */
/* segundo método, array es el método de "map" */
/* de todos los artículos, que regrese el nombre de los artículos */

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos

/* R= (7) ['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos'] */
