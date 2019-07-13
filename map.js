// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.map();

// array nos recorre el array y nos devuelve un nuevo arreglo 

const Array = [
    { name:"hector",age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean",age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba",age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe",age: 29, occupation: "frontend developer", end: 1990 },
];

// obtener un arreglo con la edad de cada uno de los clientes 
const Edades = Array.map(personas =>{
    return personas.age;
});

console.log(Edades);

// obtener un arreglo con los clientes y sus edades sumadas mas 5

const EdadesMas1 = Array.map(personas => {
    const cliente = personas;
    cliente.age += 5;
    return cliente;
});

console.log(EdadesMas1);

