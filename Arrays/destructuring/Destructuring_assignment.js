// Asignación por destructuring

// La sintaxis de destructuring assignment es una expresión de JavaScript 
// que hace posible la extracción de datos de arreglos u objetos usando 
// una sintaxis que equivale a la construcción de arreglos y objetos literales.

// Sintaxis
 
//const [a, b] = [1, 2]
//const [a, b, ...rest] = [1, 2, 3, 4, 5]
//const {a, b} = {a:1, b:2}
//const {a, b, ...rest} = {a:1, b:2, c:3, d:4}  //ES2016

// Descripción

// Las expresiones literales de objetos y arreglos proporcionan una forma sencilla 
// de crear paquetes de datos ad hoc. Una vez que dispones de estos paquetes de datos, 
// puedes usarlos de cualquier forma. Incluso puedes regresarlos de funciones.

// Algo particularmente útil que puedes hacer con destructuring assignment 
// es leer una estructura completa en una sola sentencia, 
// aunque también hay un monton de cosas interesantes que puedes hacer, 
// como se muestra en los siguientes ejemplos.



// Destructuración de un Array
var strNumbers = ["uno", "dos", "tres"];


// sin destructuración 
var uno = strNumbers[0];
var dos = strNumbers[1];
var tres = strNumbers[2];
console.log(uno, dos, tres); // uno dos tres


// con destructuración
var [uno1, dos2, tres3] = strNumbers;
console.log(uno1, dos2, tres3); // uno dos tres


// Asignación sin declaración
let a, b;
[a,b] = [1,2]; // 1 2


// Cambiando orden de las variables

// Después de ejecutar este código, b es 1 y a es 3. 
// Sin destructuring assignment, cambiar el orden de dos variables 
// requiere una variable temporal

let y = 1;
let z = 2;
[y, z] = [z ,y]; // 2 1 

console.log(y,z);


// Multiples valores de retorno
function f() {
    return [1, 2]; // [1 , 2]
}
console.log(f());

let m, n;
[m, n] = f();
console.log("m es igual a " + m + " n es igual a " + n);
// La sentencia [a, b] = f() assigna los resultados de las variables en corchetes en orden: 
// m = 1 y n = 2

// También puedes tomar los valores de retorno en un arreglo:

let h = f();
console.log(h); // [1, 2]


// Ignorando algunos valores de retorno

function f1() {
    return [1, 2, 3];
}

let [o, , p] = f1();
console.log(o, p);


// Extrayendo valores de una expresión regular

// Cuando el método de expresión regular exec() encuentra una coincidencia, 
// devuelve un arreglo que contiene la primera porción de la primera coincidencia 
// entera y luego las porciones de la cadena que coinciden con cada grupo 
// entre paréntesis en la expresión regular. 
// Las asignaciones destructuring te permiten extraer facilmente las partes de este arreglo, 
// ignorando la coincidencia entera si no es necesaria.

var url = "https://developer.mozilla.org/en-US/Web/JavaScript";
var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // logs "https:"
console.log(fullhost); // log "developer.mozilla.org"
console.log(fullpath); // log "en-US/Web/JavaScript"


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


// Objetos anidados y destructuring de arreglos

let metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};


let {title: newTitle, translations: [{ title: insideTitle}] } = metadata;
console.log(newTitle, insideTitle); // log Scratchpad JavaScript-Umgebung


// For para iteraciones con destructuring

let people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith"
      },
      age: 35
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones"
      },
      age: 25
    }
  ];

  let newArray =[];
for(var {name: newName, family: {father: newFather}} of people){
    console.log(newName + " " + newFather);
    newArray.push(newName);
}
let familyArray = [];
for(var {family} of people){
    familyArray.push(family);
}

console.log(newArray);
console.log(familyArray);

