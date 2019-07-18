// -------------------------------------//
// Pitágoras
// -------------------------------------//

// Escriba un programa que reciba como entrada las longitudes 
// de los dos catetos a y b de un triángulo rectángulo, 
// y que entregue como salida el largo de la hipotenusa c del triangulo,
// dado por el teorema de Pitágoras: c2=a2+b2.

const pitagoras = (a, b) => {
    let c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);
    console.log(c);
}

console.log("----------");
pitagoras(7,5);
console.log("----------");

// La  función Math.sqrt() retorna la raíz cuadrada de un número
// La función  Math.pow() devuelve la  base elevada al exponente , esto es, base/exponente.
