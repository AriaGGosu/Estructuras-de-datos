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