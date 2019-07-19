// objects destructuring

var maquina = {nombre: "hector", edad: 28, musico: true};

// Ej simple 
const {nombre,edad,musico} = maquina;
console.log(nombre);
console.log(edad);
console.log(musico);

// asignar nuevos nombres de varibles 
const {nombre: name, edad: age, musico: musician} = maquina;
console.log(name, age, musician);

// Asignación sin declaración

let v, w;

({v, w} = {v:10, w:20});
console.log(v);
console.log(w);

const Ejobj = {value1: 50, value2: 100};

let new1,new2;
({value1: new1, value2: new2} = Ejobj);

console.log(new1, new2);

// Los paréntesis ( .. ) que cubren la sentencia de asignación se requieren 
// cuando se usa asignación object literal destructuring sin una declaración.
