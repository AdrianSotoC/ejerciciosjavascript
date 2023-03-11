const persona = {
    nombre: "Adrian",
    apellido: "Soto",
    edad: 27,
    estaActivo: true1
};

console.log(persona);

//imprimir propiedades
console.log(persona.nombre);
console.log(persona["nombre"]);

//cambiar valores
persona.edad = 29;
persona.nombre = "julio";
console.log(persona);

//agregar atributo o propiedad
persona.profesion = "Ingeniero";
console.log(persona.profesion);