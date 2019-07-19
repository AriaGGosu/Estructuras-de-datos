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

const objetos = {
    inicio : { x: 20, y: 30},
    fin : { a: 50, b: 100}
}

const { inicio: { x: inicioX, y: inicioY}} = objetos;

console.log(inicioX); // 20
console.log(inicioY); // 30

// Assign variables from Arrays

const [q,,, r] = [1, 2, 3, 4, 5];
console.log(q,r); // 1 4

// Rest Operator to reasing Array Elements

const [m, n, ...rest] = [1, 2, 3, 4, 5];
console.log(m,n); // 1 2 
console.log(rest); // [3, 4, 5];

// pass an Objects as a Function's Parameters

const profileUpdate = ({name, age , nationality, location}) => {
    let nombre = name;
    let edad = age;
    let nacionalidad = nationality;
    let lugar = location;

    console.log(nombre,edad,nacionalidad,lugar);

}

const newProfile = { 
    name:"hector", 
    age :12 , 
    nationality: "chilena", 
    location: "Santiago"
};

profileUpdate(newProfile);


