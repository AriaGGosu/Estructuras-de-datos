// Learn

// Promises , (fullfiled , rejected , pending)
// callbacks,
// Async/await
// Observables

// rxjs ??

const Array = [39,"hector", 5, "jean", 100, true, 22, false, 50];

let newArray = [];

for(let i = Array.length -1; i >= 0; i--){
    newArray += Array[i] + " ";
}

// console.log(newArray);
// console.log(Array.length);

const MayorYmenor = Array.filter(item => {
    return typeof item == 'number'; 
});

MayorYmenor.sort((n1,n2)=>{
    return n1 - n2;
});

console.log(MayorYmenor[0]);
console.log(MayorYmenor[MayorYmenor.length-1]);

const eaea = [10,200,30,55];

console.log(Math.max.apply(Math,eaea));
console.log(Math.max(...eaea));

const primos = n => {
    if(n === 2){
        return "primo";
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return "no es primo";
        }
        else{
            return "primo";
        }
    }
}
console.log(primos(3));

// primeros números primos son 
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
// 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97,
// que son todos los primos menores que 100.