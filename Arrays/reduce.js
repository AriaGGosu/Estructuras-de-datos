// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.reduce();

// el metodo reduce actua con 2 principales parametros 
// contador y variable anonima de recorrido

const Array = [
    { name:"hector",age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean",age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba",age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe",age: 29, occupation: "frontend developer", end: 1990 },
];

const sumaEdades = Array.reduce((total, item) =>{
    return total += item.age;
},0);

console.log("---------------------------");
console.log(sumaEdades);
console.log("---------------------------");

// volvamos a analizar la funcion para entenderla un poco mejor

// creamos una nueva constante que sera igual al array con el metodo reduce 
// le asignamos 2 variables que seran 
// total = contador
// item = como el valor en la vuelta del array

const sumaEdades = Array.reduce((total, item) =>{
    // devolvemos el valor total inicializado en 0 en la siguiente linea 
    // y el total sera igual a total + la edad de cada uno
    return total += item.age;
    // en esta linea inicializamos el contador (total) en 0
},0);
