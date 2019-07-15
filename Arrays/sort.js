// // funciones de orden superior en javascript
// uno de los principales usos de las funciones de orden superior en 
// javascript es para iterar sobre arreglos (Arrays).
// EL objeto de array en javascript tiene los siguientes metodos en su prototipo


// [ ]Array.sort();

// la funcion de sort toma el arreglo y lo ordena de cierta manera 
// al ser un arreglo de nombres los ordena alfabeticamente 
// al ser un arreglo de numeros se ordena por numero inicial
// veremos unos ejemplos y aprenderemos a ordenarlos de la forma correcta

const pokemones = ["eevee", "pikachu", "bolbasour", "abra", "blastoise", "lapras"];
const pokemones_A_Z = pokemones.sort(); 

// veamos el primer ejemplo en un desglose de valores

// creamos el array de pokemones con los nombres desordenados 
const pokemonesEj = ["eevee", "pikachu", "bolbasour", "abra", "blastoise", "lapras"];
// creamos una nueva constante asignandole el array de pokemones con la funcion sort
// esto ordenara los valores alfabeticamente tal cual muestra el console log
const pokemones_A_Z_Ej = pokemonesEj.sort(); 

console.log("------------------------");
console.log("pokemones ordenados     ");
console.log(pokemones_A_Z_Ej);
console.log("------------------------");

// ahora veremos el mismo ejemplo con un arreglo de numeros con numeros desordenados y repetidos
const Numeros = [1, 10, 5, 20, 5, 1, 2, 25, 3, 33, 44, 55];
const NumerosOrdenados = Numeros.sort();

console.log("------------------------");
console.log(NumerosOrdenados);
console.log("------------------------");

// como pueden ver el ejemplo anterior muestra los numeros ordenados 
// por el primer digito y no de una forma ascendente

// volvamos a hacer el ejercicio utilizando el metodo correcto 

const Numeros_Ej = [1, 10, 5, 20, 5, 1, 2, 25, 3, 33, 44, 55];

const numerosOrdenados_Ej = Numeros_Ej.sort((prev,next) => {
    // si el primer numero es mayor al siguiente devolvemos un valor positivo
    if(prev > next){
        return 1;
    // si el primer numero es menor al siguiente devolvemos un numero negativo
    }else if(prev < next){
        return -1;
    }else{
    // si el numero es el mismo devolvemos 0
        return 0;
    }
});

// con esto tenemos la funcion aplicada de la forma correcta

console.log("numeros ordenados correctamente");
console.log("------------------------");
console.log(numerosOrdenados_Ej);
console.log("------------------------");

// la misma funcion la podemos escribir de una forma optima y ahorrando codigo de esta manera

const ordenados = Numeros_Ej.sort((prev,next) =>{
    return prev - next;
});

console.log(" numeros ordenados ejemplo 2");
console.log("----------------------------");
console.log(ordenados);
console.log("----------------------------");
