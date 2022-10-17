/* Ejercicio en loop para agregar nuevos autos a tu función constructora
y que estos autos se agreguen de forma menos manual para una lista de
30 carros */

/* Opción 1 */

function carro(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
 }

var carros = [];

for(var i = 0; i < 30; i++){
    var marca = prompt("Escriba la marca");
    var modelo = prompt("Escriba el modelo");
    var annio = prompt("Escriba el annio");

    var finalizar = prompt("Escriba N o n para parar.")

    if (finalizar==="N") {
        carros.push(new carro (marca, modelo, annio));
        console.log(carros[i]);
        i=30;
    } else if (finalizar==="n") {
        carros.push(new carro (marca, modelo, annio));
        console.log(carros[i]);
        i=30;
    } else {
        carros.push(new carro (marca, modelo, annio));
        console.log(carros[i]);
    }
}

/* Opción 2 */

alert("Esta función es para ingresar las carácterísticas de 30 carros pero puedes para tecleando N cuando la opción aparezca.");

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];
for(let i = 0; i<30; i++){
    var marca = prompt("Ingresa la marca del carro");
    var modelo = prompt("Ingresa el modelo del carro");
    var annio = prompt("Ingresa el año del carro");
    autos.push(new auto(marca,modelo,annio));

    var finalizar = prompt("Presion S para continuar o N para parar")
    if( finalizar === "N" ) {
        console.log(autos[i]);
        i=30;
    }   else if ( finalizar === "n" ) {
        console.log(autos[i]);
        i=30;
    }  else {
        console.log(autos[i]);
    }

}    

/* Opción 3 */

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];
for(let i = 0; i<30; i++){
    var marca = prompt("Ingresa la marca del carro");
    var modelo = prompt("Ingresa el modelo del carro");
    var annio = prompt("Ingresa el año del carro");
    autos.push(new auto(marca,modelo,annio));
}

for(let i=0; i < autos.length; i++){
    console.log(autos[i]);
}


