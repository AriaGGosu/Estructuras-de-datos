// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.map();

// array.map nos recorre el array y nos devuelve un nuevo arreglo 
// a la hora de modificar los datos debemos copiar el objeto y cambiar el dato necesario
// de no ser asi , .map() modificara el arreglo actual

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

// console.log(Edades);

// obtener un arreglo con los clientes y sus edades sumadas mas 5

const EdadesMas = Array.map(personas => {
    let suma = personas.age;
    suma += 5;
    return {...personas, age: suma};
});

console.log("-----------------------------");
console.log(EdadesMas);
console.log("-----------------------------");

// crear nuevo array con los nombres de cada persona
const nombre = Array.map(traerNombres => {;
    return traerNombres.name;
});

console.log("-----------------------------");
console.log(nombre);
console.log("-----------------------------");
