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