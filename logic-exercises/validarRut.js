// validador de rut

// El Dígito Verificador o Código de Control
// Este dígito utilizado para errores de información,
// errores de tipeo o para mayor seguridad. 
// Podemos encontrarlo en códigos de barras, tarjetas de crédito, 
// códigos bancarios, códigos de identificación personal (como es el RUT) 
// e inclusive la Placa Patente Única de automóviles (PPU). 
// En el caso del RUT y PPU el digito verificador, 
// además de lo mencionado anteriormente, 
// se utiliza para evitar fraudes y engaños de suplantación de identidad.


// Rol Único Tributario
// Cada persona inscrita en el Registro Civil tiene su propio RUT,
// número único e irrepetible que nos sirve como un método de identificación. 
// Este consta de un número de 8 dígitos + un digito verificador que puede ir de 0 a 9 o una K.

// En Chile el dígito verificador es único para cada RUT, éste se calcula con un algoritmo muy sencillo, 
// conocido como “módulo 11”

// Veamos el siguiente ejemplo:

// Imagínense que mi RUT es el siguiente:

// 12.678.579-?

// Se procede a tomar los números que componen el RUT de derecha a izquierda, 
// y se multiplica cada dígito por los números que componen la serie numérica 
// 2, 3, 4, 5, 6, y 7. Si se ha llegado al octavo número, se reinicia la serie a 2 nuevamente. 
// Para el ejemplo esto se aplicaría así:

// 9 x 2 = 18
// 7 x 3 = 21
// 5 x 4 = 20
// 8 x 5 = 40
// 7 x 6 = 42
// 6 x 7 = 42
// 2 x 2 = 4
// 1 x 3 = 3

// Sumamos todos los resultados y nos arroja: 190
// A este número le aplicamos “módulo 11”, es decir, lo que resta al dividirlo por 11.

// 190:11= 17.2727272727

// Quitando la parte decimal.

// 17 x 11 = 187, y para llegar a 190 faltan 3

// Finalmente a 11 le restamos el resultado anterior: 11 – 3 = 8

// El resultado anterior corresponde al dígito verificador, 
// a menos que el resultado sea 11 el dígito será 0 y si es 10 el dígito será K.

// Así nuestro RUT vendría a ser: 12.678.579-8

// rut 12345678-9 









// escribamos lo que haremos con la Data

// 1 recibimos el numero 

// 2 lo pasamos a string 

// 3 aqui le quitamos el valor del guion con regex "/-/"

// 4 guardamos el digito actual en la const digito

// 5 guardamos los demas numeros en reversa en la variable reverseString

// 6 creamos un ciclo donde recorra el largo de la const numeros haciendo una multiplicacion
// por los valores desde el 2 hasta el 7 y si quedan numeros por multiplicar
// reseteamos los valores de la multiplicacion desde el 2 nuevamente 

// 7 todo esto lo guardamos en la variable resultado 

// 8 al resultado le aplicamos el metodo modulo 11 para que nos de 
// el resto de la division quitando la parte decimal

// 9 finalmente a 11 le restamos el resultModulo y esto lo guardamos en una variable

// 10 el resultado de esto sera el digito verificador 
// si el resultado es 11 el digito sera 0 
// si el resultado es 10 el digito sera K 

// 1
const verificadorRut = numero => {
    // 2
    const numerosString = numero.toString().toUpperCase();
    let digito = "";
    let reverseString = "";
    // 4
    digito = numerosString.charAt(numerosString.length - 1);
    console.log("el digito actual es " + digito);


    // 5
    for(let i = numerosString.length -2; i >= 0; i--){
        reverseString += numerosString.charAt(i);
    }
    console.log("el numero en reversa es " + reverseString);
    let valorChar = 0;
    let total = 0;
    let multiplicacion = 2;
    // 6
    for(let i = 0; i < reverseString.length; i++){
        if(multiplicacion > 7){
            multiplicacion = 2;
        }
        valorChar = parseInt(reverseString.charAt(i)) * multiplicacion;
        // console.log(multiplicacion);
        // console.log(reverseString.charAt(i));
        // console.log(valorChar);
        // console.log("------------")
        multiplicacion++;
        // 7
        total += valorChar;
        // 156
    }
    // 8
    let modulo = total % 11;

    // console.log(total);
    console.log(modulo);
    // 9
    let digitoFinal = 11 - modulo;

    // console.log(digito);
    // console.log(digitoFinal);

    if(digito == digitoFinal){
        console.log("rut valido");
    }else if(digitoFinal == 11 && digito == 0){
        console.log("rut valido");
    }else if(digitoFinal == 10 && digito == "K"){
        console.log("rut valido");
    }else{
        console.log("rut invalido");
    }

}

verificadorRut("16942554k");