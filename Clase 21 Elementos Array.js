// Array inicial

let numArray = [1, 2, 3, 4, 5]

// Función

function newNum(){
    //Agrego elementos
    numArray.push(6,7);
    //Reviso el array que ahora tiene los números agregados
    console.log(numArray);
}

newNum

// código limpio:

let numArray = [1, 2, 3, 4, 5];

function newNum(){
    numArray.push(6,7);
    console.log(numArray);
}

newNum();

// R= (7) [1, 2, 3, 4, 5, 6, 7]

// -- Ejemplo con strings

// Array inicial
let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

// Función
function addCharacters(){
    // Agrego elementos
    txtArray.push("Chris","María");
    // Reviso el array que ahora tiene los nombres agregados
    console.log(txtArray);
}

addCharacters();

// código limpio:

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

function addCharacters(){
    txtArray.push("Chris","María");
    console.log(txtArray);
}

addCharacters();

// R= (6) ['Ana', 'Juan', 'Diego', 'Lautaro', 'Chris', 'María']

// Shift

// Creamos el array
let array = [1,2,3,4,5];
console.log(array);

// Aplicamos .shift()
let shiftArray = array.shift();

// Revisamos el output debe de ser [2,3,4,5]
console.log(array)

// código limpio:
let array = [1,2,3,4,5];
console.log(array);

let shiftArray = array.shift();

console.log(array)

// R1= (5) [1, 2, 3, 4, 5]
// R2= (4) [2, 3, 4, 5]

// Pop

let array = [1,2,3,4,5];
console.log(array);

// Aplicamos .pop()
let shiftArray = array.pop();

// Revisamos el output debe de ser [1,2,3,4]
console.log(array);

// código limpio:

// R1= (5) [1, 2, 3, 4, 5]
// R2= (4) [2, 3, 4, 5]

// Splice

var articulos = ["carro","celular","moto","tv","libro"];

// eliminar moto

articulos.splice(2,1);

// el primer parámetro especifica el ínidice del del elemento que quiero eliminar, en este caso es moto
// y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso sole es moto

// código limpio

var articulos = ["carro","celular","moto","tv","libro"];

articulos.splice(2,1);

console.log(articulos);

// R1= ['moto']
// R2= (4) ['carro', 'celular', 'tv', 'libro']

var articulos = ["carro","celular","moto","tv","libro"];

articulos.splice(2,1,"laptop");

console.log(articulos);

// se aplican los mismos parámetros, pero esta vez se le agrega el valor al que queremos modificar

// R= (5) ['carro', 'celular', 'laptop', 'tv', 'libro']
