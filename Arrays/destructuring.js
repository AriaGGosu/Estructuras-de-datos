// Destructuring 

// Assign variables from objects 

let num = {x:10, y: 20, z: 30};
let x = num.x; // x = 10
let y = num.y; // y = 20 
let z = num.z; // z = 30

console.log(x);
console.log(y);
console.log(z);

// We are going to Destruct the object once again

let numbers = {a:55, b:140, c:33};

let {a,b,c} = numbers; // a = 55, b = 140, c = 33

console.log(a); // 55
console.log(b); // 140
console.log(c); // 33

// Copy the values ​​in other variables

let {a:newA, b:newB, c:newC} = numbers;

console.log(newA); // 55
console.log(newB); // 140
console.log(newC); // 33

// Assign variables from nested objects 
// Assign variables from Arrays
// Rest Operator to reasing Array Elements

