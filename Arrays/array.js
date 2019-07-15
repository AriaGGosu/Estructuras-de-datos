// ## prerequisitos minimos
// // conocimientos basicos de javascript, incluida la funcion flecha.basicos

// // ## funciones de orden Superior 

// // son funciones que cumplen con almenos una de de las siguientes condiciones 

// // * toma una o mas funciones de entrada 
// // * devuelve una funcion de salida 

// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo

// [ ]Array.forEach();
// [ ]Array.filter();
// [ ]Array.map();
// [ ]Array.reduce();
// [ ]Array.sort();
// [ ]for() loop;

const Array = [
    { name:"hector",age: 27, occupation: "pro-player", end: 2010 },
    { name:"jean",age: 28, occupation: "frontend developer", end: 2022 },
    { name:"seba",age: 32, occupation: "senior developer", end: 2054 },
    { name:"felipe",age: 29, occupation: "frontend developer", end: 1990 },
];

// traer los nombres de todas las personas con edad mayor a 28
let result = [];
for (let i = 0; i < Array.length; i++){
    let people = Array[i];
    if(people.age > 28){
        result.push(people.name);
    }
}
console.log(result);

// sumarle 1 a todas las edades del array

for(let i = 0; i < Array.length; i++){
    let people = Array[i];
    people.age++;
}

console.log(Array);

// sumar la edad de todas las personas  
let total = 0;

for(let i = 0; i < Array.length; i++){
    const people = Array[i];
    total += people.age;
}

console.log(total);

// traer a la primera persona que trabaje como "frontend developer"
let frontend = null;

for(let i = 0; i < Array.length; i++){
    const people = Array[i];
    if(people.occupation === "frontend developer"){
        frontend = people;
        break;
    }
}
console.log(frontend);
