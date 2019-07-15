// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]for() loop;

// el ciclo de for recorre una instancia hasta que se cumpla 
// la condicion numerica

const Array = [
    { name:"hector",age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean",age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba",age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe",age: 29, occupation: "frontend developer", end: 1990 },
];

// aqui utilizamos las siguientes funciones 
// ciclo for() loop
// ciclo forEach()
// if();
// Array.push

const personasEj = [];

for(let i = 0; i < 10; i++){
    Array.forEach(persona => {
        if(persona.name === "jean"){
            personasEj.push(persona.name);
        }
    });
}
// detallemos la instancia 

// creamos un nuevo array de personas vacio
const personas = [];

// primera condicion: creamos el ciclo for donde inicializamos la variable i en 0
// segunda condicion: si i es menor a 10 
// tercera condicion: i se aumenta en 1
for(let i = 0; i < 10; i++){
    // recorremos el array y le asignamos una variable de recorrido "persona"
    Array.forEach(persona => {
        // si persona.name es igual a "jean"
        if(persona.name === "jean"){
            // el array de personas[] guarda el nombre de esa persona 
            personas.push(persona.name);
        }
    });
}

console.log(personas);