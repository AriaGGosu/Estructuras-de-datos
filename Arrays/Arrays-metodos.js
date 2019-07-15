const productos = [
    {name: "Ordenador PC" , precio: 699, departamento: "tecnologia"},
    {name: "Sartenes verdes", precio: 39, departamento: "hogar"},
    {name: "Reloj calculadora", precio: 75, departamento: "tecnologia"},
    {name: "Maquina palomitas", precio: 33, departamento: "hogar"},
    {name: "Mueble TV", precio: 120, departamento: "hogar"},
    {name: "Tuppers", precio: 10, departamento: "hogar"},
];





// ----------------------------------------------------- //
// metodo Map()
// ----------------------------------------------------- //

// recorre el array entregando un nuevo array con alguna modificacion

const productosIva = productos.map(item =>{
    // creamos una variable nueva con el valor de precio mas el iva 
    let newPrecio = item.precio + item.precio*0.21;
    // para no modificar los valores del primer arreglo
    // creamos nuevos objetos con los mismos valores y modificamos el precio
    return {...item, precio: newPrecio};
});
console.log("-----------------------------");
console.log("lista de productos mas iva"   );
console.log("-----------------------------");

console.log(productosIva);

const productosOferta = productos.map(item => {
    let newPrecio = item.precio*0.90;
    return {...item, precio: newPrecio};
});

console.log("-----------------------------");
console.log("lista de productos en oferta ");
console.log("-----------------------------");
console.log(productosOferta);

console.log("------------------------------");
console.log("el valor real de los productos");
console.log("------------------------------");
console.log(productos);

const number = [1,2,3,4,5,6];

const numberX2 = number.map(item => {
    return item*2;
});

console.log("-----------------------------");
console.log("lista de numeros");
console.log("-----------------------------");
console.log(number);

console.log("-----------------------------");
console.log("nueva lista de numeros");
console.log("-----------------------------");
console.log(numberX2);





// ----------------------------------------------------- //
// metodo find()
// ----------------------------------------------------- //

// devuelve el primer objeto que devuelva la condicion 
// en este caso el objeto con nombre "Mueble TV"

const muebleTv = productos.find(buscar => {
    // return buscar.name === "Mueble TV";
    return (/Mueble/g).test(buscar.name);
});

console.log("-------------------------------------");
console.log("primer objeto con el nombre de mueble");
console.log("-------------------------------------");
console.log(muebleTv);

// el primer return busca el objeto con el nombre indicado como "Mueble TV"
// el segundo return busca por medio de la exprecion regular
// el primer objeto con la palabra "Mueble"





// ----------------------------------------------------- //
// metodo filter()
// ----------------------------------------------------- //

//devuelve un nuevo array dependiendo el filtro que le demos
// en este caso los productos cuyo departamento sea "hogar"

const productosHogar = productos.filter(item => {
    // return item.departamento === "hogar";
    return /hogar/g.test(item.departamento);
});

// recordemos que
// el primer return devuelve los objetos con el departamento con el nombre de "hogar"
// el segundo return es la expresion regular /hogar/g que devolvera cualquier objeto
// que contenta la cadena de caracteres "hogar" en su departamento

console.log("----------------------------------");
console.log("productos en el departamento hogar");
console.log("----------------------------------");

console.log(productosHogar);




// ----------------------------------------------------- //
// metodo every()
// ----------------------------------------------------- //

// siempre que todos los elementos cumplan una condicion nos devolvera un valor de 
// true o false 

const check = productos.every(item => {
    return item.precio >= 100;
})

console.log("-----------------------------------------------");
console.log("todos los productos tienen un valor sobre 100 ?");
console.log("-----------------------------------------------");

console.log(check);

// ----------------------------------------------------- //
// metodo some()
// ----------------------------------------------------- //

// siempre que algun elemento cumpla la condicion, devolvera un valor de 
// true o false 

const check2 = productos.some(item => {
    return item.precio < 100;
});

console.log("-----------------------------------------------");
console.log("algun producto tienen un valor menor a 100 ?   ");
console.log("-----------------------------------------------");

console.log(check2);

// ----------------------------------------------------- //
// metodo reduce()
// ----------------------------------------------------- //

// reduce recibe 2 para metros 
// total = acomulador // item = que seria referente a la vuelta en el array
// y el valor de 0 para inicializar el acomulador en 0

const precioTotal = productos.reduce((total,item) => {
    // devolvemos el total mas el precio de cada producto
    return total += item.precio;
    // y inicializamos el valor en 0
}, 0);

console.log("-----------------------------------------------");
console.log("suma de todos los precios del arreglo          ");
console.log("-----------------------------------------------");

console.log(precioTotal);

// otro ejemplo
const ArrayDeNumeros = [1,2,3,4,5,6,7];
const suma = ArrayDeNumeros.reduce((total, n) => {
    return total += n;
}, 0);


console.log("-----------------------------------------------");
console.log("suma de todos los numeros en el arreglo        ");
console.log("-----------------------------------------------");

console.log(suma);