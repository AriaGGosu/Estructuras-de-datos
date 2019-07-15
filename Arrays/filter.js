// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.filter();

const Array = [
    { name:"hector",age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean",age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba",age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe",age: 29, occupation: "frontend developer", end: 1990 },
];

// crearemos una funcion que devuelva las personas que trabajan en 
// "frontend developer"

const frontend = Array.filter( personas => {
    return personas.occupation === "frontend developer";
});

console.log(frontend);

// implementemos una funcion que devuelva las personas con edades 
// mayor a 28 años

const mayoresQue28 = Array.filter(mayor => {
    return mayor.age > 28;
})

console.log(mayoresQue28);

// implementemos una funcion donde devuelva todas las personas con el nombre
// de "jean"

const Jp = Array.filter(nombre =>{
    return nombre.name === "jean";
});

console.log(Jp);