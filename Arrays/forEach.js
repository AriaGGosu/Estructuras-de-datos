// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.forEach();

// forEach() funciona como un loop para recorrer el Array
// y asignarle uno o mas parametros de callback

const Array = [
    { name:"hector", age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean", age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba", age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe", age: 29, occupation: "frontend developer", end: 1990 },
];

// traer los nombres de todos los que tienen edad mayor a 28
let result = [];
Array.forEach(people => {
    if(people.age > 28){
        result.push(people);
    }    
});
console.log(result);

// aqui le agregamos otro parametro al metodo forEach (index) recibe el indice de cada objeto
// Array.forEach((people, index) => {
//     if(people.age > 28){
//         people.index = index;
//         result.push(people);
//     }    
// });
// console.log(result);


// sumarle uno a la edad de cada persona
Array.forEach(masUno => {
    masUno.age++;
});

console.log(Array);


let nombres = [];
Array.forEach(nombre => {
    nombres += nombre.name + " ";
});

console.log(nombres);

// la siguiente funcion devuelve a las personas que cumplan con la ocuppacion de 
// "frontend developer"

const frontend = [];
Array.forEach(front => {
    if(front.occupation === "frontend developer"){
        frontend.push(front);
    }
});

console.log(frontend);