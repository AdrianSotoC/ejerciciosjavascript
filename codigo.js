// let nombre = "Adrian";
// let apellido = "Soto";

// Imprimir valores en la consola
// console.log(nombre);
// console.log(apellido);

// Reasignar una variable el valor

/* 
comnetarios de multiples
lineas
*/
// nombre = "Oscar";
// console.log(nombre);

// Declaracion de una variable
let variable;
// Asignacion de una variable
variable = "algun dato";
// Declaracion y una asignacion
let variable2 = "otro dato";
// Reasignacion de una variable
variable2 = "reasignacion de dato";

let nombre = "Adrian";
let apellido = "Soto";
// let edad = 27;
let fechaDeNacimiento = "1995-05-20";
let soltero = false;
let activo = false;

console.log(nombre + " " + apellido);
//console.log(edad);
console.log(fechaDeNacimiento);
console.log(soltero);

let precio= 45;
let cantidad= 5;

let total= precio * cantidad;

console.log(total)

let num1= 23;
let num2= 23;

let suma= num1+num2;
let resta= num1-num2;
let multiplicacion= num1*num2;
let division= num1/num2;

console.log("Suma: ",suma)
console.log("Resta: ",resta)
console.log("Multiplicacion: ",multiplicacion)
console.log("Division: ",division)

/*
if (// Condicion a evaluar ) {
    // Codigo a ejecutar 
} else if (/* Segunda condicion a evaluar ) {
    // Codigo a ejecutar 
} else {
    // Codigo a ejecutar 
}
*/

let edad = 16;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 14) {
    console.log("Eres mayor a 14 pero menor a 18, necesitas permiso de tus padres")
} else {
    console.log("No tienes permiso")
}

console.log(edad);

/*
switch (// Expresion a evaluar ) {
    case a: // Codigo a ejecutar
        break; //stops evaluating 
    case b: // Codigo a ejecutar
        break; //stops evaluating
    default: //Codigo a evaluar
}
*/

let age= 9;

switch (age) {
    case 7:
        console.log("Tu tienes:",age,"de edad.")
        break;
    case 8:
        console.log("Tu tienes:",age,"de edad")
        break;
    default:
        console.log("No encontre tu edad")
        break;
}