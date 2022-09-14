/* 
Coerción

4 + "7"; // 47 - string
4 * "7"; // 28 - numérico
2 + true; // 3 - numérico
false - 3; // -3  numérico


2 tipos de coerciones, implicitas y explicitas
Coerción: forma en que podemos cambiar un tipo de valor a otro:
String a número, número a string.

Implicita: el sistema realiza el cambio.
Explicita: nosotros obligamos al cambio.
*/

var a = 4 + "7";

typeof a

var b = 4 * "7";

typeof b

/*
la suma genera una concatenación de valores
la multiplicación lo vuelve en una operación numérica, 
aquí se forza la coerción implicita
*/

var a = 20;
var b = a + "";
//undefined

console.log(b); //20

typeof b; //string

var c = String(a); //undefined
/*
esta función obliga a una coerción explícita
*/

typeof c; //string

console.log(c); //20

var d = Number(c); //undefined

typeof d; //"number"

/*
sirve para etiquetas input en html
para que se trate como número y evitar errores
como "Nan"
*/