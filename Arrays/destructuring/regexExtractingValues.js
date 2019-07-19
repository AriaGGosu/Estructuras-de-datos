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