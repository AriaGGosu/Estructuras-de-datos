// Saludo 

// Escriba una funcion que reciba un nombre 
// y lo salude llamandolo por su nombre

const saludo = nombre => {
    console.log("hola " + nombre + " como estas ?");
}
console.log("----------");
saludo("clau");
console.log("----------");

// -------------------------------------//
// Circulo 
// -------------------------------------//

// Escriba una funcion que reciba el radio de un circulo
// y entregue como salida su perimetro y area

const circulo = radio => {  
    let area = Math.pow(radio , 2) * Math.PI;
    console.log("el area del circulo es " + area);
    let perimetro = (2 * Math.PI) * radio ;
    console.log("el perimetro del circulo es " + perimetro);
}

// La función  Math.pow() devuelve la  base elevada al exponente , esto es, baseexponente.
// La propiedad Math.PI representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159

console.log("----------");
circulo(5);
console.log("----------");

// -------------------------------------//
// promedio
// -------------------------------------//

const promedio = (nota1, nota2, nota3, nota4) => {
    let promedio = (nota1 + nota2 + nota3 + nota4)/4;
    console.log("el promedio de notas es " + promedio);
}

console.log("----------");
promedio(6, 7, 5, 4);
console.log("----------");


// -------------------------------------//
// Conversión de unidades de longitud
// -------------------------------------//

const conversion = cm => {
    let total = cm / 2.54;
    return cm +" cm es igual " + total + " pulgadas";
}

console.log("----------");
console.log(conversion(45));
console.log(conversion(13));
console.log("----------");

// -------------------------------------//
// Numero invertido
// -------------------------------------//

const reverse = num => {
    let numString = num.toString();
    let reverseString =""
    for(let i = numString.length; i >= 0; i--){
        reverseString += numString.charAt(i);
    }
    let reverseNumber = parseInt(reverseString);
    console.log(reverseNumber);
}

console.log("----------");
reverse(12345);
console.log("----------");

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



// -------------------------------------//
// Hora futura
// -------------------------------------//

// Escriba un programa que pregunte al usuario la hora actual t del reloj y
// un número entero de horas h, que indique qué hora marcará 
// el reloj dentro de h horas:

const horaFutura = (horaActual, cantidadHoras) => {
    // 5 20 = 24- 5 +20 
    let horaFutura = horaActual + cantidadHoras;
    while(horaFutura > 24){
        horaFutura -= 24;
    }
    console.log("en " + cantidadHoras + " horas el reloj marcara las " + horaFutura);
}

console.log("-------------");
horaFutura(11, 43);
console.log("-------------");

