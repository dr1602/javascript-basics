/* generar un template de un objeto con opciones para sus parámetros y propiedades
para luego generar nuevas instancias con una función especial */

/* ¿cómo construimos un objeto? */

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

 /* así construimos una función constructura */

 function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
 }

 auto;

 /* poner en la función las propiedades que queremos que tenga
el objeto */ 

/* ponemos this como referencia a nuestro objeto */

/* tengo en auto las propiedades que quiero que tengan, 
uso la palabra this como referencia a mi función constructora,
y hace referencia a la función del objeto,

/* R= 
ƒ auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
 }
 */

 /* no tiene algo especial */

/* para construir los objetos a partir de la función,
se crea una variable */

var autoNuevo = new auto("Tesla","Model 3", 2020);

autoNuevo

/* se le poner un operador que va a generar una nueva instancia
de la función constructora, que generará un objeto a partir de otro
objeto */













/* R = auto {marca: 'Tesla', modelo: 'Model 3', annio: 2020} */

/* para mostrar que se pueden hacer más objetos, generamos la
siguiente variable */

var autoNuevo2 = new auto("Tesla","Model X", 2018);
var autoNuevo3 = new auto("Toyota","Corola", 2020);

autoNuevo2

/* R= auto {marca: 'Tesla', modelo: 'Model X', annio: 2018}*/

autoNuevo3

/* R= auto {marca: 'Toyota', modelo: 'Corola', annio: 2020} */

/* Hacer un loop para agregar nuevos autos a tu función constructora
y que estos autos se agreguen de forma menos manual  para una lista de
30 carros */



